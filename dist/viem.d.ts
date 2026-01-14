import { PublicClient, WalletClient, Hex, Chain } from 'viem';
import { Address } from 'viem/accounts';

/**
 * Configuration type for initializing a Viem client.
 * @property publicRpcUrl - The public RPC endpoint URL (HTTP/HTTPS).
 * @property walletRpcUrl - The RPC endpoint URL used for wallet actions (HTTP/HTTPS).
 * @property walletAccountPrivateKey - The private key (as Hex) for the wallet account.
 * @property chain - The blockchain chain object (Viem's Chain type) describing the network.
 */
type ViemConfig = {
    /** Public RPC endpoint URL for reading blockchain data. */
    publicRpcUrl: `http://${string}` | `https://${string}`;
    /** RPC endpoint URL for signing and sending wallet transactions. */
    walletRpcUrl: `http://${string}` | `https://${string}`;
    /** The wallet's private key in hex string format. */
    walletAccountPrivateKey: Hex;
    /** The blockchain network configuration (e.g., mainnet, polygon, amoy, etc). */
    chain: Chain;
};
/**
 * ViemClient class to interact with viem
 */
declare class ViemClient {
    /** Viem Account Address */
    protected readonly accountAddress: Address;
    /** Viem public client */
    protected readonly publicClient: PublicClient;
    /** Viem wallet client */
    protected readonly walletClient: WalletClient;
    /**
     * Creates a new Viem instance
     * @param config - The viem configuration
     */
    constructor(config: ViemConfig);
}

export { ViemClient, type ViemConfig };
