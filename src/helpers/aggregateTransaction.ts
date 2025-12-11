import { type SafeTransaction } from "./types.js";
import { createSafeMultisendTransaction } from "./createSafeMultisendTransaction.js";

/**
 * Aggregates the transactions into a single transaction
 * @param txns - The safe transactions to aggregate
 * @returns The aggregated transaction
 */
export function aggregateTransaction(txns: SafeTransaction[]): SafeTransaction {
    if (txns.length === 1) {
        return txns[0]!;
    }
    return createSafeMultisendTransaction(txns);
}
