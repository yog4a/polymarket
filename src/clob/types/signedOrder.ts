import { TickSize, Side, SignatureType } from "../types.js";

export type OrderInput = {
    tokenID: string;      // IMPORTANT: tokenID (comme dans ton code)
    side: Side;
    price: number;        // 0..1
    size: number;         // en shares
    taker?: string;       // optionnel, sinon 0x0
    expiration?: number;  // sinon 0
    nonce?: string;       // sinon "0"
};

export type MarketData = {
    tickSize: TickSize;
    feeRateBps: string; // ex "1000"
    negRisk: boolean;
};

export type UnsignedOrderParams = {
    signerAddress: string;
    makerAddress: string;
    signatureType?: SignatureType;
    userOrder: OrderInput;
    resolved: MarketData;
};
  
export type UnsignedOrderResult = {
    //salt: string;
    maker: string;
    signer: string;
    taker: string;
    tokenId: string;
    makerAmount: string;
    takerAmount: string;
    expiration: string;
    nonce: string;
    feeRateBps: string;
    side: number; // 0/1
    signatureType: number; // 2
};
