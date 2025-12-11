import { fromHex, type Hex, type WalletClient } from "viem";

/**
 * The split signature
 */
interface SplitSignature {
    r: bigint,
    s: bigint,
    v: number,
}

/**
 * Signs the transaction hash
 * @param walletClient - The wallet client
 * @param message - The message to sign
 * @returns The signed message
 */
export async function signTransactionHash(walletClient: WalletClient, message: Hex): Promise<SplitSignature> {
    let sig = await walletClient.signMessage({
        message: { raw: message },
        account: walletClient.account!,
    });

    let sigV = parseInt(sig.slice(-2), 16);

    if (sigV === 0 || sigV === 1) {
        sigV += 31;
    } else if (sigV === 27 || sigV === 28) {
        sigV += 4;
    } else {
        throw new Error("Invalid signature");
    }

    sig = sig.slice(0, -2) + sigV.toString(16);

    const bigR = fromHex(`0x${sig.slice(2, 66)}`, 'bigint');
    const bigS = fromHex(`0x${sig.slice(66, 130)}`, 'bigint');
    const bigV = fromHex(`0x${sig.slice(130, 132)}`, 'number');

    return {
        r: bigR,
        s: bigS,
        v: bigV,
    };
}
