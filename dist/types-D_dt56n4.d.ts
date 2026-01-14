import { Side, SignatureType } from '@polymarket/order-utils';
import '@polymarket/clob-client';
import './clob/types/postedOrders.js';

type OrderInput = {
    tokenID: string;
    side: Side;
    price: number;
    size: number;
    taker?: string;
    expiration?: number;
    nonce?: string;
};
type MarketData = {
    tickSize: TickSize;
    feeRateBps: string;
    negRisk: boolean;
};
type UnsignedOrderParams = {
    signerAddress: string;
    makerAddress: string;
    signatureType?: SignatureType;
    userOrder: OrderInput;
    resolved: MarketData;
};
type UnsignedOrderResult = {
    maker: string;
    signer: string;
    taker: string;
    tokenId: string;
    makerAmount: string;
    takerAmount: string;
    expiration: string;
    nonce: string;
    feeRateBps: string;
    side: number;
    signatureType: number;
};

/**
 * Tick size for order pricing precision
 */
type TickSize = "0.1" | "0.01" | "0.001" | "0.0001";
/**
 * Rounding configuration for price/size/amount
 */
interface RoundingConfig {
    price: number;
    size: number;
    amount: number;
}
/**
 * Contract configuration for a chain
 */
interface ContractConfig {
    exchange: string;
    negRiskAdapter: string;
    negRiskExchange: string;
    collateral: string;
    conditionalTokens: string;
}

export type { ContractConfig as C, MarketData as M, OrderInput as O, RoundingConfig as R, TickSize as T, UnsignedOrderParams as U, UnsignedOrderResult as a };
