import { WalletClient, PublicClient, Address, Hex } from 'viem';
import { SafeTransaction, TransactionOverrides } from './types.js';

/**
 * Signs and executes a safe transaction
 * @param walletClient - The wallet client
 * @param publicClient - The public client
 * @param safeAddress - The safe address
 * @param txn - The transaction
 * @param overrides - The overrides
 * @returns The transaction hash
 */
declare const signAndExecuteSafeTransaction: (walletClient: WalletClient, publicClient: PublicClient, safeAddress: Address, txn: SafeTransaction, overrides?: TransactionOverrides) => Promise<Hex>;

export { signAndExecuteSafeTransaction };
