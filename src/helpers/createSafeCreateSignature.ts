import { zeroAddress, type WalletClient, type Hex } from "viem";
import { SAFE_FACTORY_ADDRESS } from "../contracts/addresses.js";
import { SAFE_FACTORY_NAME } from "../contracts/constants.js";

/**
 * Creates a safe create signature
 * @param signer - The signer (WalletClient) to sign the safe create signature
 * @param chainId - The chain id to sign the safe create signature
 * @returns The safe create signature
 */
export function createSafeCreateSignature(signer: WalletClient, chainId: number): Promise<Hex> {
    return signer.signTypedData({
        account: signer.account!,
        domain: {
            chainId,
            name: SAFE_FACTORY_NAME,
            verifyingContract: SAFE_FACTORY_ADDRESS,
        },
        types: {
            CreateProxy: [
                { name: "paymentToken", type: "address" },
                { name: "payment", type: "uint256" },
                { name: "paymentReceiver", type: "address" },
            ],
        },
        primaryType: "CreateProxy",
        message: {
            paymentToken: zeroAddress,
            payment: 0n,
            paymentReceiver: zeroAddress,
        },
    });
}