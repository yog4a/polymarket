import { zeroHash, encodeFunctionData, type Hex, type Address } from "viem";
import { ctfAbi } from "../contracts/abis.js";

/**
 * Encodes the CTF contract functions for the Polymarket contract
 */
export class CTFEncoder {
    /**
     * Encodes the split function data for the CTF contract
     * @param collateralToken - The address of the collateral token
     * @param conditionId - The id of the condition
     * @param amount - The amount of tokens to split
     * @returns The encoded function data
     */
    static encodeSplit(collateralToken: Address, conditionId: Hex, amount: bigint): Hex {
        return encodeFunctionData({
            abi: ctfAbi,
            functionName: "splitPosition",
            args: [collateralToken, zeroHash, conditionId, [1, 2], amount],
        });
    }

    /**
     * Encodes the merge function data for the CTF contract
     * @param collateralToken - The address of the collateral token
     * @param conditionId - The id of the condition
     * @param amount - The amount of tokens to merge
     * @returns The encoded function data
     */
    static encodeMerge(collateralToken: Address, conditionId: Hex, amount: bigint): Hex {
        return encodeFunctionData({
            abi: ctfAbi,
            functionName: "mergePositions",
            args: [collateralToken, zeroHash, conditionId, [1, 2], amount],
        });
    }
    
    /**
     * Encodes the redeem function data for the CTF contract
     * @param collateralToken - The address of the collateral token
     * @param conditionId - The id of the condition
     * @returns The encoded function data
     */
    static encodeRedeem(collateralToken: Address, conditionId: Hex): Hex {
        return encodeFunctionData({
            abi: ctfAbi,
            functionName: "redeemPositions",
            args: [collateralToken, zeroHash, conditionId, [1, 2]],
        });
    }
}
