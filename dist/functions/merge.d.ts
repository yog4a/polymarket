import { WalletClient, PublicClient, Address, Hex, TransactionReceipt } from 'viem';
import { TransactionOverrides } from '../helpers/types.js';

/**
 * The parameters for merging positions
 */
type MergePositionsParams = {
    safeAddress: Address;
    amount: `${number}`;
    conditionId: Hex;
    negRisk: boolean;
};
/**
 * Merges positions
 * @param walletClient - The wallet client
 * @param publicClient - The public client
 * @returns The function to merge positions with the given safe address, amount, condition id, and neg risk
 */
declare function mergePositions(walletClient: WalletClient, publicClient: PublicClient): ({ safeAddress, amount, conditionId, negRisk }: MergePositionsParams, overrides?: TransactionOverrides) => Promise<TransactionReceipt>;

export { type MergePositionsParams, mergePositions };
