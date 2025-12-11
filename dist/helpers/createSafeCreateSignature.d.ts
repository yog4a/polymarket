import { WalletClient, Hex } from 'viem';

/**
 * Creates a safe create signature
 * @param signer - The signer (WalletClient) to sign the safe create signature
 * @param chainId - The chain id to sign the safe create signature
 * @returns The safe create signature
 */
declare function createSafeCreateSignature(signer: WalletClient, chainId: number): Promise<Hex>;

export { createSafeCreateSignature };
