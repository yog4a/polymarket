import { Hex, Chain } from 'viem';
import { mergePositions } from './functions/merge.cjs';
import { redeemPositions } from './functions/redeem.cjs';
import { splitPositions } from './functions/split.cjs';
import './helpers/types.cjs';

/**
 * The client configuration
 */
type ClientConfig = {
    publicRpcUrl: `http://${string}` | `https://${string}`;
    walletRpcUrl: `http://${string}` | `https://${string}`;
    walletAccountPrivateKey: Hex;
    chain: Chain;
};
/**
 * SDK class to interact with Polymarket's smart contract functions
 */
declare class PolymarketSDK {
    /** Viem public client */
    private readonly publicClient;
    /** Viem wallet client */
    private readonly walletClient;
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
