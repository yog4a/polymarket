// import { OrderBuilder } from "./builder.js";
// import { Wallet } from "@ethersproject/wallet";
// import type { OrderInput, MarketData, SignatureType, SignedOrder, PostedOrder, PostOrdersArgs } from "./types.js";
// import { ClobClient, createL2Headers } from "@polymarket/clob-client";

// import { buildUnsignedOrder } from "./functions/buildUnsignedOrder.js";

// /**
//  * OrderFunctions class to interact with the Polymarket Clob API
//  * @param funderAddress - The address of the funder
//  * @param signerWallet - The wallet of the signer
//  * @param chainId - The chain ID
//  * @returns OrderFunctions
//  */
// export class OrderFunctions {
//     private readonly signerAddress: string;
//     private readonly orderBuilder: OrderBuilder;

//     constructor(
//         private readonly funderAddress: string,
//         private readonly signerWallet: Wallet,
//         private readonly chainId: number,
//         private readonly signatureType: SignatureType,
//         private readonly getClobClient: () => Promise<ClobClient>,
//     ) {
//         this.signerAddress = this.signerWallet.address;
        
//         this.orderBuilder = new OrderBuilder({
//             signer: this.signerWallet,
//             chainId: this.chainId,
//         });
//     }
// }

// /**
//  * Post multiple signed orders
//  * @param args - The arguments for posting the orders
//  * @param deferExec - Whether to defer execution
//  * @param defaultPostOnly - Whether to use the default post only
//  * @returns The posted orders
//  */
// async function postSignedOrders(args: PostOrdersArgs[], deferExec?: boolean, defaultPostOnly?: boolean) {

//     return execute(args: PostOrdersArgs[], deferExec?: boolean, defaultPostOnly?: boolean) {
//         const endpoint = POST_ORDERS;
//         const ordersPayload = [];
//         for (const { order, orderType, postOnly: orderPostOnly } of args) {
//             const orderPayload = orderToJson(order, this.creds?.key || "", orderType, deferExec, orderPostOnly ?? defaultPostOnly);
//             ordersPayload.push(orderPayload);
//         }
//         const l2HeaderArgs = {
//             method: POST,
//             requestPath: endpoint,
//             body: JSON.stringify(ordersPayload),
//         };
//         const headers = await createL2Headers(this.signer, this.creds, l2HeaderArgs, this.useServerTime ? await this.getServerTime() : undefined);
//         return this.post(`${this.host}${endpoint}`, { headers, data: ordersPayload });
//     }
// }