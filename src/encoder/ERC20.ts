import { encodeFunctionData, type Hex, type Address } from "viem";
import { erc20Abi } from "../contracts/abis.js";

/**
 * Encodes the ERC20 token functions for the Polymarket contract
 */
export class ERC20Encoder {
    /**
     * Encodes the transfer function data for the ERC20 token
     * @param to - The address to transfer the tokens to
     * @param value - The amount of tokens to transfer
     * @returns The encoded function data
     */
    static encodeTransfer(to: Address, value: bigint): Hex {
        return encodeFunctionData({
            abi: erc20Abi,
            functionName: "transfer",
            args: [to, value],
        });
    }

    /**
     * Encodes the approve function data for the ERC20 token
     * @param spender - The address to approve the tokens to
     * @param approvalAmount - The amount of tokens to approve
     * @returns The encoded function data
     */
    static encodeApprove(spender: Address, approvalAmount: bigint): Hex {
        return encodeFunctionData({
            abi: erc20Abi,
            functionName: "approve",
            args: [spender, approvalAmount],
        });
    }
}
