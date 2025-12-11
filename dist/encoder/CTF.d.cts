import { Address, Hex } from 'viem';

/**
 * Encodes the CTF contract functions for the Polymarket contract
 */
declare class CTFEncoder {
    /**
     * Encodes the split function data for the CTF contract
     * @param collateralToken - The address of the collateral token
     * @param conditionId - The id of the condition
     * @param amount - The amount of tokens to split
     * @returns The encoded function data
     */
    static encodeSplit(collateralToken: Address, conditionId: Hex, amount: bigint): Hex;
    /**
     * Encodes the merge function data for the CTF contract
     * @param collateralToken - The address of the collateral token
     * @param conditionId - The id of the condition
     * @param amount - The amount of tokens to merge
     * @returns The encoded function data
     */
    static encodeMerge(collateralToken: Address, conditionId: Hex, amount: bigint): Hex;
    /**
     * Encodes the redeem function data for the CTF contract
     * @param collateralToken - The address of the collateral token
     * @param conditionId - The id of the condition
     * @returns The encoded function data
     */
    static encodeRedeem(collateralToken: Address, conditionId: Hex): Hex;
}

export { CTFEncoder };
