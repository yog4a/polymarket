import { parseUnits, type WalletClient, type PublicClient, type Address, type Hex, type TransactionReceipt } from "viem";
import { CONDITIONAL_TOKENS_FRAMEWORK_ADDRESS, NEG_RISK_ADAPTER_ADDRESS, USDC_ADDRESS } from "../contracts/addresses.js";
import { USDCE_DIGITS } from "../contracts/constants.js";
import { CTFEncoder } from "../encoder/_index.js";
import { signAndExecuteSafeTransaction, type SafeTransaction, OperationType, type TransactionOverrides } from "../helpers/index.js";

/**
 * The parameters for merging positions
 */
export type MergePositionsParams = {
    safeAddress: Address;
    amount: `${number}`;
    conditionId: Hex;
    negRisk: boolean;
}

/**
 * Merges positions
 * @param walletClient - The wallet client
 * @param publicClient - The public client
 * @returns The function to merge positions with the given safe address, amount, condition id, and neg risk
 */
export function mergePositions(walletClient: WalletClient, publicClient: PublicClient) {
    /**
     * Merges positions
     * @param params - The parameters for merging positions
     * @param overrides - The transaction overrides
     * @returns The transaction receipt
     */
    return async function({ safeAddress, amount, conditionId, negRisk }: MergePositionsParams, overrides?: TransactionOverrides): Promise<TransactionReceipt> {

        const value = parseUnits(amount, USDCE_DIGITS);
        const data = CTFEncoder.encodeMerge(USDC_ADDRESS, conditionId, value);
        const to = negRisk ? NEG_RISK_ADAPTER_ADDRESS: CONDITIONAL_TOKENS_FRAMEWORK_ADDRESS;
    
        const safeTxn: SafeTransaction = {
            to: to,
            data: data,
            operation: OperationType.Call,
            value: "0",
        };
    
        const txHash = await signAndExecuteSafeTransaction(walletClient, publicClient, safeAddress, safeTxn, overrides);
        const receipt = await publicClient.waitForTransactionReceipt({ hash: txHash });

        return receipt;
    }
}