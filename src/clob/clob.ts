import { ClobClient as BaseClobClient, Side, ApiKeyCreds } from "@polymarket/clob-client";
import { Wallet } from "@ethersproject/wallet";

import { OrderFunctions } from "./functions.js";

/** Configuration for the Polymarket Clob API */
const HOST = "https://clob.polymarket.com";

/** Chain ID for the Polygon mainnet */
const CHAIN_ID = 137;

/** Signature type for the Polymarket Clob API */
const SIGNATURE_TYPE = 2;

/**
 * PolyClobClient class to interact with the Polymarket Clob API
 * @param funderAddress - Address of deployed Safe proxy wallet
 * @param signerWallet - Wallet that deployed the Safe proxy wallet
 * @returns PolyClobClient
 */
export class ClobClient {
    private auth: any = null;
    private instance: BaseClobClient | null = null;

    public readonly order: OrderFunctions;

    constructor(
        private readonly funderAddress: string,
        private readonly signerWallet: Wallet,
    ) {
        this.order = new OrderFunctions(
            this.funderAddress,
            this.signerWallet,
            CHAIN_ID,
            SIGNATURE_TYPE,
            this.getClobClient.bind(this),
        );
    }

    /**
     * Returns cached Auth or creates a new one via createOrDeriveApiKey.
     */
    async getAuth(): Promise<ApiKeyCreds> {
        if (this.auth) {
            return this.auth;
        }
        const tempClient = new BaseClobClient(HOST, CHAIN_ID, this.signerWallet);
        this.auth = await tempClient.createOrDeriveApiKey();
        return this.auth;
    }

    /**
     * Returns a singleton ClobClient instance, initializing authentication if needed.
     */
    async getClobClient(): Promise<BaseClobClient> {
        if (this.instance) {
            return this.instance;
        }
        const auth = await this.getAuth();
        this.instance = new BaseClobClient(HOST, CHAIN_ID, this.signerWallet, auth, SIGNATURE_TYPE, this.funderAddress);
        return this.instance;
    }
}
