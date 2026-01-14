import { Side } from '@polymarket/order-utils';

/**
 * Calculate raw maker and taker amounts from order params
 */
declare function getOrderRawAmounts(side: Side, size: number, price: number, roundConfig: {
    price: number;
    size: number;
    amount: number;
}): {
    rawMakerAmt: number;
    rawTakerAmt: number;
    side: Side;
};
/**
 * Convert an amount to collateral units (bigint string)
 */
declare function toCollateralUnits(amount: number): string;

export { getOrderRawAmounts, toCollateralUnits };
