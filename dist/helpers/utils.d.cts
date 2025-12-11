import { Hex } from 'viem';

/**
 * Joins hex data into a single hex string
 * @param hexData - The hex data to join
 * @returns The joined hex string
 *
 * @example
 * import { joinHexData } from "./utils"
 * const result = joinHexData(["0x1234", "0xab", "0xc"]);
 * // result === "0x1234abc"
 *
 * @example
 * // Ensures odd-length hex parts are padded
 * const result2 = joinHexData(["0x1", "0x02"]);
 * // result2 === "0x0102"
 */
declare function joinHexData(hexData: Hex[]): Hex;
/**
 * Gets the length of the hex data
 * @param hexData - The hex data to get the length of
 * @returns The length of the hex data
 */
declare function getHexDataLength(hexData: Hex): number;

export { getHexDataLength, joinHexData };
