import { parseUnits } from "viem";
import { Side } from "../types.js";
import { COLLATERAL_TOKEN_DECIMALS } from "../constants.js";
import { decimalPlaces, roundDown, roundNormal, roundUp } from "./rounding.js";

/**
 * Calculate raw maker and taker amounts from order params
 */
export function getOrderRawAmounts(
    side: Side,
    size: number,
    price: number,
    roundConfig: { 
        price: number; 
        size: number; 
        amount: number 
    }
) {
    const rawPrice = roundNormal(price, roundConfig.price);

    if (side === Side.BUY) {
        const rawTakerAmt = roundDown(size, roundConfig.size);
        let rawMakerAmt = rawTakerAmt * rawPrice;

        if (decimalPlaces(rawMakerAmt) > roundConfig.amount) {
            rawMakerAmt = roundUp(rawMakerAmt, roundConfig.amount + 4);
            if (decimalPlaces(rawMakerAmt) > roundConfig.amount) {
                rawMakerAmt = roundDown(rawMakerAmt, roundConfig.amount);
            }
        }

        return { rawMakerAmt, rawTakerAmt, side: Side.BUY };

    } else if (side === Side.SELL) {
        const rawMakerAmt = roundDown(size, roundConfig.size);
        let rawTakerAmt = rawMakerAmt * rawPrice;

        if (decimalPlaces(rawTakerAmt) > roundConfig.amount) {
            rawTakerAmt = roundUp(rawTakerAmt, roundConfig.amount + 4);
            if (decimalPlaces(rawTakerAmt) > roundConfig.amount) {
                rawTakerAmt = roundDown(rawTakerAmt, roundConfig.amount);
            }
        }

        return { rawMakerAmt, rawTakerAmt, side: Side.SELL };
    }
        
    throw new Error(`Invalid side: ${side}`);
}

/**
 * Convert an amount to collateral units (bigint string)
 */
export function toCollateralUnits(amount: number): string {
    return parseUnits(amount.toString(), COLLATERAL_TOKEN_DECIMALS).toString();
}