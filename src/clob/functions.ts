import { OrderBuilder } from "./builder.js";
import { Wallet } from "@ethersproject/wallet";
import type { OrderInput, MarketData, SignatureType, SignedOrder, PostedOrder, PostOrdersArgs } from "./types.js";
import { ClobClient } from "@polymarket/clob-client";

import { buildUnsignedOrder } from "./functions/buildUnsignedOrder.js";

/**
 * OrderFunctions class to interact with the Polymarket Clob API
 * @param funderAddress - The address of the funder
 * @param signerWallet - The wallet of the signer
 * @param chainId - The chain ID
 * @returns OrderFunctions
 */
export class OrderFunctions {
    private readonly signerAddress: string;
    private readonly orderBuilder: OrderBuilder;

    constructor(
        private readonly funderAddress: string,
        private readonly signerWallet: Wallet,
        private readonly chainId: number,
        private readonly signatureType: SignatureType,
        private readonly getClobClient: () => Promise<ClobClient>,
    ) {
        this.signerAddress = this.signerWallet.address;
        
        this.orderBuilder = new OrderBuilder({
            signer: this.signerWallet,
            chainId: this.chainId,
        });
    }

    /**
     * Create a signed order
     * @param userOrder - The user order
     * @param marketData - The market data
     * @returns The signed order
     */
    async createSignedOrder(userOrder: OrderInput, marketData: MarketData): Promise<SignedOrder> { 
        const unsignedOrder = buildUnsignedOrder({
            signerAddress: this.signerAddress,
            makerAddress: this.funderAddress,
            signatureType: this.signatureType,
            userOrder: userOrder,
            resolved: marketData,
        });

        if (marketData.negRisk) {
            return this.orderBuilder.builderNegRisk.buildSignedOrder(unsignedOrder);
        }
        return this.orderBuilder.builderExchange.buildSignedOrder(unsignedOrder);
    }

    /**
     * Post a signed order
     * @param arg - The arguments for posting the order
     * @param deferExec - Whether to defer execution
     * @param defaultPostOnly - Whether to use the default post only
     * @returns The posted order
     */
    async postSignedOrder(arg: PostOrdersArgs, deferExec?: boolean, defaultPostOnly?: boolean): Promise<PostedOrder> {
        const clobClient = await this.getClobClient();
        const orders = await clobClient.postOrders([arg], deferExec, defaultPostOnly);
        return orders[0]!;
    }

    /**
     * Post multiple signed orders
     * @param args - The arguments for posting the orders
     * @param deferExec - Whether to defer execution
     * @param defaultPostOnly - Whether to use the default post only
     * @returns The posted orders
     */
    async postSignedOrders(args: PostOrdersArgs[], deferExec?: boolean, defaultPostOnly?: boolean): Promise<PostedOrder[]> {
        const clobClient = await this.getClobClient();
        const orders = await clobClient.postOrders(args, deferExec, defaultPostOnly);
        return orders;
    }
}