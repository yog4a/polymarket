import { Side, SignatureType, SignedOrder } from "@polymarket/order-utils";
import { OrderType } from "@polymarket/clob-client";

import { type OrderInput, type MarketData } from "./types/signedOrder.js";
import { type PostedOrder, type PostOrdersArgs } from "./types/postedOrders.js";

export { 
    Side, 
    SignatureType, 
    type SignedOrder, 
    OrderType, 
    type OrderInput, 
    type MarketData,
    type PostedOrder,
    type PostOrdersArgs,
};

/**
 * Tick size for order pricing precision
 */
export type TickSize = "0.1" | "0.01" | "0.001" | "0.0001";

/**
 * Rounding configuration for price/size/amount
 */
export interface RoundingConfig {
    price: number;
    size: number;
    amount: number;
};

/**
 * Contract configuration for a chain
 */
export interface ContractConfig {
    exchange: string;
    negRiskAdapter: string;
    negRiskExchange: string;
    collateral: string;
    conditionalTokens: string;
};
