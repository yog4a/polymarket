import { ExchangeOrderBuilder } from "@polymarket/order-utils";
import type { Wallet } from "@ethersproject/wallet";
import { getContractConfig } from "./constants.js";

/**
 * Order builder class to build orders for the Polymarket Clob API
 * @param signer - The signer wallet
 * @param chainId - The chain ID
 * @returns OrderBuilder
 */
export class OrderBuilder {
    public readonly builderExchange: ExchangeOrderBuilder;
    public readonly builderNegRisk: ExchangeOrderBuilder;

    constructor(private readonly cfg: {
        signer: Wallet;
        chainId: number;
    }) {
        const contracts = getContractConfig(this.cfg.chainId);
        this.builderExchange = new ExchangeOrderBuilder(contracts.exchange, this.cfg.chainId, this.cfg.signer);
        this.builderNegRisk  = new ExchangeOrderBuilder(contracts.negRiskExchange, this.cfg.chainId, this.cfg.signer);
    }
}