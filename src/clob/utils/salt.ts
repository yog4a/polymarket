/**
 * Generate a random order salt
 */
export function generateOrderSalt() {
  return Math.round(Math.random() * Date.now()) + "";
}
