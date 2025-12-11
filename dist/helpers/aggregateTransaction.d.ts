import { SafeTransaction } from './types.js';
import 'viem';

/**
 * Aggregates the transactions into a single transaction
 * @param txns - The safe transactions to aggregate
 * @returns The aggregated transaction
 */
declare function aggregateTransaction(txns: SafeTransaction[]): SafeTransaction;

export { aggregateTransaction };
