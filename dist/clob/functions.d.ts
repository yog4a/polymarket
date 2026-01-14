import { Wallet } from '@ethersproject/wallet';
import { SignatureType, SignedOrder } from '@polymarket/order-utils';
import { ClobClient, PostOrdersArgs } from '@polymarket/clob-client';
import { O as OrderInput, M as MarketData } from '../types-D_dt56n4.js';
import { PostedOrder } from './types/postedOrders.js';

/**
 * OrderFunctions class to interact with the Polymarket Clob API
 * @param funderAddress - The address of the funder
 * @param signerWallet - The wallet of the signer
 * @param chainId - The chain ID
 * @returns OrderFunctions
 */
declare class OrderFunctions {
    private readonly funderAddress;
    private readonly signerWallet;
    private readonly chainId;
    private readonly signatureType;
    private readonly getClobClient;
    private readonly signerAddress;
    private readonly orderBuilder;
    constructor(funderAddress: string, signerWallet: Wallet, chainId: number, signatureType: SignatureType, getClobClient: () => Promise<ClobClient>);
    /**
     * Create a signed order
     * @param userOrder - The user order
     * @param marketData - The market data
     * @returns The signed order
     */
    createSignedOrder(userOrder: OrderInput, marketData: MarketData): Promise<SignedOrder>;
    /**
     * Post a signed order
     * @param arg - The arguments for posting the order
     * @param deferExec - Whether to defer execution
     * @param defaultPostOnly - Whether to use the default post only
     * @returns The posted order
     */
    postSignedOrder(arg: PostOrdersArgs, deferExec?: boolean, defaultPostOnly?: boolean): Promise<PostedOrder>;
    /**
     * Post multiple signed orders
     * @param args - The arguments for posting the orders
     * @param deferExec - Whether to defer execution
     * @param defaultPostOnly - Whether to use the default post only
     * @returns The posted orders
     */
    postSignedOrders(args: PostOrdersArgs[], deferExec?: boolean, defaultPostOnly?: boolean): Promise<PostedOrder[]>;
}

export { OrderFunctions };
