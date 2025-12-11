import { Hex } from 'viem';

/**
 * Encodes the Neg Risk Adapter contract functions for the Polymarket contract
 */
declare class NegRiskAdapterEncoder {
    /**
     * Encodes the redeem function data for the Neg Risk Adapter contract
     * @param conditionId - The id of the condition
     * @param amounts - The amounts of tokens to redeem
     * @returns The encoded function data
     */
    static encodeRedeemNegRisk(conditionId: Hex, amounts: bigint[]): Hex;
    /**
     * Encodes the convert function data for the Neg Risk Adapter contract
     * @param marketId - The id of the market
     * @param indexSet - The index set
     * @param amount - The amount of tokens to convert
     * @returns The encoded function data
     */
    static encodeConvert(marketId: Hex, indexSet: bigint, amount: bigint): Hex;
}

export { NegRiskAdapterEncoder };
