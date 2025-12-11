import { encodeFunctionData, encodePacked } from "viem";
import { multisendAbi } from "../contracts/abis.js";
import { SAFE_MULTISEND_ADDRESS } from "../contracts/addresses.js";
import { getHexDataLength, joinHexData } from "./utils.js";
import { type SafeTransaction, OperationType } from "./types.js";

/**
 * Creates a safe multisend transaction
 * @param txns - The safe transactions to create a safe multisend transaction for
 * @returns The safe multisend transaction
 */
export function createSafeMultisendTransaction(txns: SafeTransaction[]): SafeTransaction {
    const data = encodeFunctionData({
        abi: multisendAbi,
        functionName: "multiSend",
        args: [
            joinHexData(
                txns.map((tx) =>
                    encodePacked(
                        ["uint8", "address", "uint256", "uint256", "bytes"],
                        [
                            tx.operation,
                            tx.to,
                            BigInt(tx.value),
                            BigInt(getHexDataLength(tx.data)),
                            tx.data
                        ]
                    ),
                ),
            ),
        ],
    });
  
    return {
        to: SAFE_MULTISEND_ADDRESS,
        value: "0",
        data: data,
        operation: OperationType.DelegateCall,
    };
}
