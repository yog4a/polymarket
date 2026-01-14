/**
 * Count decimal places of a number
 */
export const decimalPlaces = (num: number): number => {
    if (Number.isInteger(num)) return 0;
    const arr = num.toString().split(".");
    return arr.length <= 1 ? 0 : arr[1]!.length;
};

/**
 * Round number normally (half up)
 */
export const roundNormal = (num: number, decimals: number): number => {
    if (decimalPlaces(num) <= decimals) return num;
    return Math.round((num + Number.EPSILON) * 10 ** decimals) / 10 ** decimals;
};

/**
 * Round number down (floor)
 */
export const roundDown = (num: number, decimals: number): number => {
    if (decimalPlaces(num) <= decimals) return num;
    return Math.floor(num * 10 ** decimals) / 10 ** decimals;
};

/**
 * Round number up (ceil)
 */
export const roundUp = (num: number, decimals: number): number => {
    if (decimalPlaces(num) <= decimals) return num;
    return Math.ceil(num * 10 ** decimals) / 10 ** decimals;
};

/**
 * Check if a price is valid for a given tick size
 */
export const priceValid = (price: number, tickSize: string): boolean => {
    const t = parseFloat(tickSize);
    return price >= t && price <= 1 - t;
};