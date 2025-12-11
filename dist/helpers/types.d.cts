import { Address, Hex } from 'viem';

/**
 * The call type
 */
declare enum CallType {
    Invalid = "0",
    Call = "1",
    DelegateCall = "2"
}
/**
 * The proxy transaction
 */
interface ProxyTransaction {
    to: string;
    typeCode: CallType;
    data: string;
    value: string;
}
/**
 * The operation type
 */
declare enum OperationType {
    Call = 0,// 0
    DelegateCall = 1
}
/**
 * The safe transaction
 */
interface SafeTransaction {
    to: Address;
    operation: OperationType;
    data: Hex;
    value: `${number}` | `${bigint}`;
}
/**
 * The transaction overrides
 */
type TransactionOverrides = {
    gasPrice?: bigint;
};

export { CallType, OperationType, type ProxyTransaction, type SafeTransaction, type TransactionOverrides };
