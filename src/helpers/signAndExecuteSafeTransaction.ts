import { zeroAddress, encodePacked, type WalletClient, type PublicClient, type Hex, type Address } from "viem";
import { type SafeTransaction, type TransactionOverrides } from "./types.js";
import { safeAbi } from "../contracts/abis.js";
import { signTransactionHash } from "./signTransactionHash.js";

/**
 * Signs and executes a safe transaction
 * @param walletClient - The wallet client
 * @param publicClient - The public client
 * @param safeAddress - The safe address
 * @param txn - The transaction
 * @param overrides - The overrides
 * @returns The transaction hash
 */
export const signAndExecuteSafeTransaction = async (
    walletClient: WalletClient, 
    publicClient: PublicClient, 
    safeAddress: Address, 
    txn: SafeTransaction,
    overrides?: TransactionOverrides
): Promise<Hex> => {
    if (!overrides) {
        overrides = {};
    }

    const nonce = await publicClient.readContract({
        address: safeAddress,
        abi: safeAbi,
        functionName: "nonce",
    });
  
    const safeTxGas = 0n;
    const baseGas = 0n;
    const gasPrice = 0n;
    const gasToken = zeroAddress;
    const refundReceiver = zeroAddress;

    const txHash = await publicClient.readContract({
        address: safeAddress,
        abi: safeAbi,
        functionName: "getTransactionHash",
        args: [
            txn.to,
            BigInt(txn.value),
            txn.data,
            txn.operation,
            safeTxGas,
            baseGas,
            gasPrice,
            gasToken,
            refundReceiver,
            nonce,
        ],
    }) as Hex;
  
    const { r, s, v } = await signTransactionHash(walletClient, txHash);
    const packedSig = encodePacked(['uint256', 'uint256', 'uint8'], [r, s, v]);

    return walletClient.writeContract({
        chain: walletClient.chain,
        account: walletClient.account!,
        address: safeAddress,
        abi: safeAbi,
        functionName: "execTransaction",
        args: [
            txn.to,
            txn.value,
            txn.data,
            txn.operation,
            safeTxGas,
            baseGas,
            gasPrice,
            gasToken,
            refundReceiver,
            packedSig,
        ],
        ...overrides,
    });
}
