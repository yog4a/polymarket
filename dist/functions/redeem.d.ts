import { WalletClient, PublicClient, Address, Hex, TransactionReceipt } from 'viem';
import { TransactionOverrides } from '../helpers/types.js';

/**
 * The parameters for redeeming positions
 */
type RedeemPositionsParams = {
    safeAddress: Address;
    conditionId: Hex;
    negRisk: boolean;
    amounts: [`${number}`, `${number}`];
};
/**
 * Redeems positions
 * @param walletClient - The wallet client
 * @param publicClient - The public client
 * @returns The function to redeem positions with the given safe address, condition id, neg risk, and optional redeem amounts
 */
declare function redeemPositions(walletClient: WalletClient, publicClient: PublicClient): ({ safeAddress, conditionId, negRisk, amounts }: RedeemPositionsParams, overrides?: TransactionOverrides) => Promise<TransactionReceipt>;

export { type RedeemPositionsParams, redeemPositions };
