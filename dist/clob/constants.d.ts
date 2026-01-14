import { C as ContractConfig, T as TickSize, R as RoundingConfig } from '../types-D_dt56n4.js';
import '@polymarket/order-utils';
import '@polymarket/clob-client';
import './types/postedOrders.js';

/**
 * Decimals for USDC collateral token
 */
declare const COLLATERAL_TOKEN_DECIMALS = 6;
/**
 * Decimals for conditional tokens
 */
declare const CONDITIONAL_TOKEN_DECIMALS = 6;
/**
 * Polygon Amoy testnet contract addresses
 */
declare const AMOY_CONTRACTS: ContractConfig;
/**
 * Polygon mainnet contract addresses
 */
declare const MATIC_CONTRACTS: ContractConfig;
/**
 * Rounding configuration per tick size
 */
declare const ROUNDING_CONFIG: Record<TickSize, RoundingConfig>;
/**
 * Get contract configuration for a chain
 * @param chainId - Chain ID (137 for Polygon, 80002 for Amoy)
 */
declare const getContractConfig: (chainId: number) => ContractConfig;

export { AMOY_CONTRACTS, COLLATERAL_TOKEN_DECIMALS, CONDITIONAL_TOKEN_DECIMALS, MATIC_CONTRACTS, ROUNDING_CONFIG, getContractConfig };
