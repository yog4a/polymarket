import { type PostOrdersArgs } from "@polymarket/clob-client";

/**
 * PostedOrderStatus describes the status of a posted order.
 */
type PostedOrderStatus =
    | 'matched'   // order placed and matched with an existing resting order
    | 'live'      // order placed and resting on the book
    | 'delayed'   // order marketable, but subject to matching delay
    | 'unmatched' // order marketable, but failure delaying, placement successful

/**
 * Enum describing possible error and success statuses when posting orders.
 */
enum PostedOrderErrorSuccess {
    INVALID_ORDER_MIN_TICK_SIZE = "INVALID_ORDER_MIN_TICK_SIZE",          // order price isn’t accurate to correct tick sizing
    INVALID_ORDER_MIN_SIZE = "INVALID_ORDER_MIN_SIZE",                    // order size must meet min size threshold requirement
    INVALID_ORDER_DUPLICATED = "INVALID_ORDER_DUPLICATED",                // same order has already been placed
    INVALID_ORDER_NOT_ENOUGH_BALANCE = "INVALID_ORDER_NOT_ENOUGH_BALANCE",// funder address doesn’t have enough balance/allowance
    INVALID_ORDER_EXPIRATION = "INVALID_ORDER_EXPIRATION",                // expiration time is in the past
    INVALID_ORDER_ERROR = "INVALID_ORDER_ERROR",                          // system error while inserting
    INVALID_POST_ONLY_ORDER_TYPE = "INVALID_POST_ONLY_ORDER_TYPE",        // post only flag on invalid order type
    INVALID_POST_ONLY_ORDER = "INVALID_POST_ONLY_ORDER",                  // post only order would match/cross book
    EXECUTION_ERROR = "EXECUTION_ERROR",                                  // error executing trade
    DELAYING_ORDER_ERROR = "DELAYING_ORDER_ERROR",                        // system error while delaying order
    FOK_ORDER_NOT_FILLED_ERROR = "FOK_ORDER_NOT_FILLED_ERROR",            // FOK order could not be fully filled
}

enum PostedOrderErrorFailed {
    ORDER_DELAYED = "ORDER_DELAYED",   // order match delayed due to market conditions
    MARKET_NOT_READY = "MARKET_NOT_READY"
}


type BasePostedOrder = {
    success: boolean;
    errorMsg: string | "";
    orderID: `0x${string}` | "";
    transactionsHashes?: `0x${string}`[];
    status: PostedOrderStatus | "";
    takingAmount: string | "";
    makingAmount: string | "";
}

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
    errorMsg: "",
    orderID: `0x${string}`,
    takingAmount: "";
    makingAmount: "";
    status: "live",
    success: true,
};

type PostedOrderMatched = BasePostedOrder & {
    errorMsg: "",
    orderID: `0x${string}`,
    takingAmount: string;
    makingAmount: string;
    status: "matched",
    transactionsHashes: `0x${string}`[];
    success: true,
};

type PostedOrderError = BasePostedOrder & {
    errorMsg: string;
    success: boolean;
    status: "";
    orderID: "";
    takingAmount: "";
    makingAmount: "";
};
  
type PostedOrder =
    | PostedOrderLive
    | PostedOrderMatched
    | PostedOrderDelayed
    | PostedOrderUnmatched
    | PostedOrderError;


export {
    type PostOrdersArgs,
    type PostedOrder,
}