import { type WalletClient, type PublicClient, type Address, type Hex, type TransactionReceipt, parseUnits } from "viem";
import { CONDITIONAL_TOKENS_FRAMEWORK_ADDRESS, NEG_RISK_ADAPTER_ADDRESS, USDC_ADDRESS } from "../contracts/addresses.js";
import { CTFEncoder, NegRiskAdapterEncoder } from "../encoder/_index.js";
import { signAndExecuteSafeTransaction, type SafeTransaction, type TransactionOverrides, OperationType } from "../helpers/index.js";

/**
 * The parameters for redeeming positions
 */
export type RedeemPositionsParams = {
    safeAddress: Address;
    conditionId: Hex;
    negRisk: boolean;
    amounts: [`${number}`, `${number}`];
}

/**
 * Redeems positions
 * @param walletClient - The wallet client
 * @param publicClient - The public client
 * @returns The function to redeem positions with the given safe address, condition id, neg risk, and optional redeem amounts
 */
export function redeemPositions(walletClient: WalletClient, publicClient: PublicClient) {
    /**
     * Redeems positions
     * @param params - The parameters for redeeming positions
     * @param overrides - The transaction overrides
     * @returns The transaction receipt
     */
    return async function({ safeAddress, conditionId, negRisk, amounts }: RedeemPositionsParams, overrides?: TransactionOverrides): Promise<TransactionReceipt> {
        const values = amounts.map(amount => BigInt(amount));

        // amounts of conditional tokens to redeem. Only used for neg risk redeems
        // should always have length 2, with the first element being the amount of yes tokens to redeem and the
        // second element being the amount of no tokens to redeem
        // Only necessary for redeeming neg risk tokens
        const data = negRisk 
            ? NegRiskAdapterEncoder.encodeRedeemNegRisk(conditionId, values) 
            : CTFEncoder.encodeRedeem(USDC_ADDRESS, conditionId);

        // to address
        const to = negRisk 
            ? NEG_RISK_ADAPTER_ADDRESS
            : CONDITIONAL_TOKENS_FRAMEWORK_ADDRESS;


        const safeTxn: SafeTransaction = {
            to: to,
            data: data,
            operation: OperationType.Call,
            value: "0",
        };

        const txn = await signAndExecuteSafeTransaction(walletClient, publicClient, safeAddress, safeTxn, overrides);
        const receipt = await publicClient.waitForTransactionReceipt({ hash: txn });

        return receipt;
    }
}
