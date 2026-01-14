import { ExchangeOrderBuilder } from '@polymarket/order-utils';
import { Wallet } from '@ethersproject/wallet';

/**
 * Order builder class to build orders for the Polymarket Clob API
 * @param signer - The signer wallet
 * @param chainId - The chain ID
 * @returns OrderBuilder
 */
declare class OrderBuilder {
    private readonly cfg;
    readonly builderExchange: ExchangeOrderBuilder;
    readonly builderNegRisk: ExchangeOrderBuilder;
    constructor(cfg: {
        signer: Wallet;
        chainId: number;
    });
}

export { OrderBuilder };
