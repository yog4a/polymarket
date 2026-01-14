import { mergePositions } from './functions/merge.cjs';
import { redeemPositions } from './functions/redeem.cjs';
import { splitPositions } from './functions/split.cjs';
import { ViemClient, ViemConfig } from './viem.cjs';
import 'viem';
import './helpers/types.cjs';
import 'viem/accounts';

/**
 * Configuration options for initializing the Polymarket client.
 *
 * @extends ViemConfig
 *
 * @property {number} chainId - The blockchain network chain ID (e.g., 137 for Polygon mainnet, 80002 for Amoy).
 * @property {number} signatureType - Method used for signing transactions and orders:
 *   0 = Browser Wallet (e.g., MetaMask, Coinbase Wallet, etc.)
 *   1 = Magic Link or Email Login
 *   2 = Polymarket Gnosis Safe
 * @property {string} funderAddress - Address of the Polymarket funder account/profile (used for gas funding and management).
 */
type ClientConfig = ViemConfig & {
    chainId: number;
    /**
     * Method for signing transactions:
     *   0 = Browser Wallet (e.g., MetaMask, Coinbase Wallet)
     *   1 = Magic Link/Email Authentication
     *   2 = Polymarket Gnosis Safe
     */
    signatureType: number;
    /**
     * Ethereum address of the Polymarket account acting as the funder for necessary transactions.
     */
    funderAddress: string;
};
/**
 * SDK class to interact with Polymarket's smart contract functions
 */
declare class PolymarketSDK extends ViemClient {
    /** Function to split positions */
    readonly splitPositions: ReturnType<typeof splitPositions>;
    /** Function to merge positions */
    readonly mergePositions: ReturnType<typeof mergePositions>;
    /** Function to redeem positions */
    readonly redeemPositions: ReturnType<typeof redeemPositions>;
    /**
     * Creates a new PolymarketSDK instance
     * @param config - The client configuration
     */
    constructor(config: ClientConfig);
}

export { PolymarketSDK };
