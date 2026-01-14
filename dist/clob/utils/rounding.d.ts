/**
 * Count decimal places of a number
 */
declare const decimalPlaces: (num: number) => number;
/**
 * Round number normally (half up)
 */
declare const roundNormal: (num: number, decimals: number) => number;
/**
 * Round number down (floor)
 */
declare const roundDown: (num: number, decimals: number) => number;
/**
 * Round number up (ceil)
 */
declare const roundUp: (num: number, decimals: number) => number;
/**
 * Check if a price is valid for a given tick size
 */
declare const priceValid: (price: number, tickSize: string) => boolean;

export { decimalPlaces, priceValid, roundDown, roundNormal, roundUp };
