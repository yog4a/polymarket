import '../types-D_dt56n4.js';
import '@polymarket/order-utils';
import { ApiKeyCreds, ClobClient as ClobClient$1 } from '@polymarket/clob-client';
import './types/postedOrders.js';
import { Wallet } from '@ethersproject/wallet';
import { OrderFunctions } from './functions.js';

/**
 * PolyClobClient class to interact with the Polymarket Clob API
 * @param funderAddress - Address of deployed Safe proxy wallet
 * @param signerWallet - Wallet that deployed the Safe proxy wallet
 * @returns PolyClobClient
 */
declare class ClobClient {
    private readonly funderAddress;
    private readonly signerWallet;
    private auth;
    private instance;
    readonly order: OrderFunctions;
    constructor(funderAddress: string, signerWallet: Wallet);
    /**
     * Returns cached Auth or creates a new one via createOrDeriveApiKey.
     */
    getAuth(): Promise<ApiKeyCreds>;
    /**
     * Returns a singleton ClobClient instance, initializing authentication if needed.
     */
    getClobClient(): Promise<ClobClient$1>;
}

export { ClobClient };
