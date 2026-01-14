export { PostOrdersArgs } from '@polymarket/clob-client';

/**
 * PostedOrderStatus describes the status of a posted order.
 */
type PostedOrderStatus = 'matched' | 'live' | 'delayed' | 'unmatched';
type BasePostedOrder = {
    success: boolean;
    errorMsg: string | "";
    orderID: `0x${string}` | "";
    transactionsHashes?: `0x${string}`[];
    status: PostedOrderStatus | "";
    takingAmount: string | "";
    makingAmount: string | "";
};
type PostedOrderDelayed = BasePostedOrder & {
    success: true;
    errorMsg: "";
    status: "delayed";
    orderID: `0x${string}`;
    takingAmount: string;
    makingAmount: string;
    transactionsHashes?: never;
};
type PostedOrderUnmatched = BasePostedOrder & {
    success: true;
    errorMsg: "";
    status: "unmatched";
    orderID: `0x${string}`;
    takingAmount: string;
    makingAmount: string;
    transactionsHashes?: never;
};
type PostedOrderLive = BasePostedOrder & {
    errorMsg: "";
    orderID: `0x${string}`;
    takingAmount: "";
    makingAmount: "";
    status: "live";
    success: true;
};
type PostedOrderMatched = BasePostedOrder & {
    errorMsg: "";
    orderID: `0x${string}`;
    takingAmount: string;
    makingAmount: string;
    status: "matched";
    transactionsHashes: `0x${string}`[];
    success: true;
};
type PostedOrderError = BasePostedOrder & {
    errorMsg: string;
    success: boolean;
    status: "";
    orderID: "";
    takingAmount: "";
    makingAmount: "";
};
type PostedOrder = PostedOrderLive | PostedOrderMatched | PostedOrderDelayed | PostedOrderUnmatched | PostedOrderError;

export type { PostedOrder };
