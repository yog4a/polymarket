import { type Hex, type Address } from "viem";

/**
 * The call type
 */
export enum CallType {
    Invalid = "0",
    Call = "1",
    DelegateCall = "2",
}
  
/**
 * The proxy transaction
 */
export interface ProxyTransaction {
    to: string;
    typeCode: CallType;
    data: string;
    value: string;
}

/**
 * The operation type
 */
export enum OperationType {
    Call, // 0
    DelegateCall, // 1
}  

/**
 * The safe transaction
 */
export interface SafeTransaction {
    to: Address;
    operation: OperationType
    data: Hex;
    value: `${number}` | `${bigint}`;
}

/**
 * The transaction overrides
 */
export type TransactionOverrides = {
    gasPrice?: bigint;
}