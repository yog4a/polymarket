import { SafeTransaction } from './types.cjs';
import 'viem';

/**
 * Creates a safe multisend transaction
 * @param txns - The safe transactions to create a safe multisend transaction for
 * @returns The safe multisend transaction
 */
declare function createSafeMultisendTransaction(txns: SafeTransaction[]): SafeTransaction;

export { createSafeMultisendTransaction };
