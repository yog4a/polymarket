import { Address, Hex } from 'viem';

/**
 * Encodes the ERC1155 token functions for the Polymarket contract
 */
declare class ERC1155Encoder {
    /**
     * Encodes the transfer function data for the ERC1155 token
     * @param from - The address to transfer the tokens from
     * @param to - The address to transfer the tokens to
     * @param id - The id of the token to transfer
     * @param value - The amount of tokens to transfer
     * @returns The encoded function data
     */
    static encodeTransferFrom(from: Address, to: Address, id: bigint, value: bigint): Hex;
    /**
     * Encodes the approve function data for the ERC1155 token
     * @param spender - The address to approve the tokens to
     * @param approval - The approval status (true or false)
     * @returns The encoded function data
     */
    static encodeApprove(spender: Address, approval: boolean): Hex;
}

export { ERC1155Encoder };
