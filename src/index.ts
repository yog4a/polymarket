import { createPublicClient, createWalletClient, http, type Hex, type Chain, type WalletClient, type PublicClient } from "viem";
import { privateKeyToAccount } from 'viem/accounts'
import { mergePositions, redeemPositions, splitPositions } from "./functions/_index.js";

/**
 * The client configuration
 */
type ClientConfig = {
    publicRpcUrl: `http://${string}` | `https://${string}`;
    walletRpcUrl: `http://${string}` | `https://${string}`;  
    walletAccountPrivateKey: string;
    chain: Chain;
};

/**
 * SDK class to interact with Polymarket's smart contract functions
 */
export class PolymarketSDK {
    /** Viem public client */
    private readonly publicClient: PublicClient;
    /** Viem wallet client */
    private readonly walletClient: WalletClient;
    /** Function to split positions */
    public readonly splitPositions: ReturnType<typeof splitPositions>;
    /** Function to merge positions */
    public readonly mergePositions: ReturnType<typeof mergePositions>;
    /** Function to redeem positions */
    public readonly redeemPositions: ReturnType<typeof redeemPositions>;

    /**
     * Creates a new PolymarketSDK instance
     * @param config - The client configuration
     */
    constructor(config: ClientConfig) {
        const account = privateKeyToAccount(config.walletAccountPrivateKey);

        this.publicClient = createPublicClient({
            chain: config.chain,
            transport: http(config.publicRpcUrl),
        });

        this.walletClient = createWalletClient({
            chain: config.chain,
            transport: http(config.walletRpcUrl),
            account: account,
        });

        this.splitPositions = splitPositions(this.walletClient, this.publicClient);
        this.mergePositions = mergePositions(this.walletClient, this.publicClient);
        this.redeemPositions = redeemPositions(this.walletClient, this.publicClient);
    }
}
