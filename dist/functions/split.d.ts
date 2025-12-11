import { WalletClient, PublicClient, Address, Hex, TransactionReceipt } from 'viem';
import { TransactionOverrides } from '../helpers/types.js';

/**
 * The parameters for splitting positions
 */
type SplitPositionsParams = {
    safeAddress: Address;
    conditionId: Hex;
    negRisk: boolean;
    amount: `${number}`;
};
/**
 * Splits positions
 * @param walletClient - The wallet client
 * @param publicClient - The public client
 * @returns The function to split positions with the given safe address, condition id, neg risk, and amount
 */
declare function splitPositions(walletClient: WalletClient, publicClient: PublicClient): ({ safeAddress, conditionId, negRisk, amount }: SplitPositionsParams, overrides?: TransactionOverrides) => Promise<TransactionReceipt>;

export { type SplitPositionsParams, splitPositions };
