export { ClobClient } from './clob/clob.cjs';
export { C as ContractConfig, M as MarketData, O as OrderInput, R as RoundingConfig, T as TickSize } from './types-ByN2L6tA.cjs';
export { Side, SignatureType, SignedOrder } from '@polymarket/order-utils';
export { OrderType, PostOrdersArgs } from '@polymarket/clob-client';
export { PostedOrder } from './clob/types/postedOrders.cjs';
import '@ethersproject/wallet';
import './clob/functions.cjs';
