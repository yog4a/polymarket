import { type WalletClient, type PublicClient, type Address, type Hex, type TransactionReceipt, parseUnits } from "viem";
import { CONDITIONAL_TOKENS_FRAMEWORK_ADDRESS, NEG_RISK_ADAPTER_ADDRESS, USDC_ADDRESS } from "../contracts/addresses.js";
import { USDCE_DIGITS } from "../contracts/constants.js";
import { CTFEncoder } from "../encoder/_index.js";
import { signAndExecuteSafeTransaction, type SafeTransaction, type TransactionOverrides, OperationType } from "../helpers/index.js";

/**
 * The parameters for splitting positions
 */
export type SplitPositionsParams = {
    safeAddress: Address;
    conditionId: Hex;
    negRisk: boolean;
    amount: `${number}`;
}

/**
 * Splits positions
 * @param walletClient - The wallet client
 * @param publicClient - The public client
 * @returns The function to split positions with the given safe address, condition id, neg risk, and amount
 */
export function splitPositions(walletClient: WalletClient, publicClient: PublicClient) {
    /**
     * Splits positions
     * @param params - The parameters for splitting positions
     * @param overrides - The transaction overrides
     * @returns The transaction receipt
     */
    return async function({ safeAddress, conditionId, negRisk, amount }: SplitPositionsParams, overrides?: TransactionOverrides): Promise<TransactionReceipt> {
        const value = parseUnits(amount, USDCE_DIGITS);
        const data = CTFEncoder.encodeSplit(USDC_ADDRESS, conditionId, value);
        const to = negRisk ? NEG_RISK_ADAPTER_ADDRESS : CONDITIONAL_TOKENS_FRAMEWORK_ADDRESS;

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
