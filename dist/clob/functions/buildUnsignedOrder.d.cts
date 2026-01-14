import { U as UnsignedOrderParams, a as UnsignedOrderResult } from '../../types-ByN2L6tA.cjs';
import '@polymarket/order-utils';
import '@polymarket/clob-client';
import '../types/postedOrders.cjs';

/**
 * Build an unsigned order
 * @returns The unsigned order
 */
declare function buildUnsignedOrder(params: UnsignedOrderParams): UnsignedOrderResult;

export { buildUnsignedOrder };
