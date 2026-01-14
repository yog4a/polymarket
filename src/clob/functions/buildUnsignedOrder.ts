import { SignatureType } from "../types.js";
import { type UnsignedOrderParams, type UnsignedOrderResult } from "../types/signedOrder.js";
import { ROUNDING_CONFIG } from "../constants.js";
import { zeroAddress } from "viem";
import { getOrderRawAmounts, toCollateralUnits } from "../utils/amounts.js";
//import { generateOrderSalt } from "../utils/salt.js";
import { priceValid } from "../utils/rounding.js";

/**
 * Build an unsigned order
 * @returns The unsigned order
 */
export function buildUnsignedOrder(params: UnsignedOrderParams): UnsignedOrderResult {
    const { signerAddress, makerAddress, userOrder, resolved } = params;

    const signatureType = params.signatureType ?? SignatureType.EOA;

    if (!priceValid(userOrder.price, resolved.tickSize)) {
        throw new Error(
            `invalid price (${userOrder.price}), min: ${resolved.tickSize} - max: ${1 - parseFloat(resolved.tickSize)}`
        );
    }

    let taker;
    if (typeof userOrder.taker !== "undefined" && userOrder.taker) {
        taker = userOrder.taker;
    } else {
        taker = zeroAddress;
    }

    const roundCfg = ROUNDING_CONFIG[resolved.tickSize];
    const { rawMakerAmt, rawTakerAmt, side } = getOrderRawAmounts(
        userOrder.side,
        userOrder.size,
        userOrder.price,
        roundCfg
    );

    const makerAmount = toCollateralUnits(rawMakerAmt);
    const takerAmount = toCollateralUnits(rawTakerAmt);

    return {
        //salt: generateOrderSalt(),
        maker: makerAddress,
        taker: taker,
        tokenId: userOrder.tokenID,
        makerAmount,
        takerAmount,
        side: side,
        feeRateBps: (resolved.feeRateBps ?? "0").toString(),
        nonce: (userOrder.nonce ?? "0").toString(),
        signer: signerAddress,
        expiration: (userOrder.expiration ?? 0).toString(),
        signatureType,
    };
}