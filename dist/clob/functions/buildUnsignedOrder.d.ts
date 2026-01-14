import { U as UnsignedOrderParams, a as UnsignedOrderResult } from '../../types-D_dt56n4.js';
import '@polymarket/order-utils';
import '@polymarket/clob-client';
import '../types/postedOrders.js';

/**
 * Build an unsigned order
 * @returns The unsigned order
 */
declare function buildUnsignedOrder(params: UnsignedOrderParams): UnsignedOrderResult;

export { buildUnsignedOrder };
