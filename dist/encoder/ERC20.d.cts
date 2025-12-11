import { Address, Hex } from 'viem';

/**
 * Encodes the ERC20 token functions for the Polymarket contract
 */
declare class ERC20Encoder {
    /**
     * Encodes the transfer function data for the ERC20 token
     * @param to - The address to transfer the tokens to
     * @param value - The amount of tokens to transfer
     * @returns The encoded function data
     */
    static encodeTransfer(to: Address, value: bigint): Hex;
    /**
     * Encodes the approve function data for the ERC20 token
     * @param spender - The address to approve the tokens to
     * @param approvalAmount - The amount of tokens to approve
     * @returns The encoded function data
     */
    static encodeApprove(spender: Address, approvalAmount: bigint): Hex;
}

export { ERC20Encoder };
