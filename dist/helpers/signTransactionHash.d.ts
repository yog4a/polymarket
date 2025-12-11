import { WalletClient, Hex } from 'viem';

/**
 * The split signature
 */
interface SplitSignature {
    r: bigint;
    s: bigint;
    v: number;
}
/**
 * Signs the transaction hash
 * @param walletClient - The wallet client
 * @param message - The message to sign
 * @returns The signed message
 */
declare function signTransactionHash(walletClient: WalletClient, message: Hex): Promise<SplitSignature>;

export { signTransactionHash };
