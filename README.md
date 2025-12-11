# @yog4a/polymarket

A personal TypeScript SDK for interacting with [Polymarket](https://polymarket.com) Safe wallets, built on [viem](https://viem.sh).

## Installation

```bash
npm install github:yog4a/polymarket viem
pnpm add github:yog4a/polymarket viem
```

## Usage

### Initialization

Create an SDK instance with your wallet configuration:

```ts
import { PolymarketSDK } from '@yog4a/polymarket';
import { polygon } from 'viem/chains';

const sdk = new PolymarketSDK({
    publicRpcUrl: 'https://polygon-rpc.com',
    walletRpcUrl: 'https://polygon-rpc.com',
    walletAccountPrivateKey: '0x...',
    chain: polygon,
});
```

### 1. Split Positions

Split USDC collateral into YES/NO conditional tokens for a market.

- Use when you want to acquire positions on both outcomes.
- The `amount` is in USDC (6 decimals handled automatically).

```ts
const receipt = await sdk.splitPositions({
    safeAddress: '0x...',           // Your Polymarket Safe address
    amount: '10',                   // USDC amount to split
    conditionId: '0x...',           // Market condition ID
    negRisk: true,                  // true for neg-risk markets
});

console.log(`Split confirmed: ${receipt.transactionHash}`);
```

### 2. Merge Positions

Merge YES/NO conditional tokens back into USDC collateral.

- Use when you want to exit positions and recover collateral.
- Requires equal amounts of YES and NO tokens.

```ts
const receipt = await sdk.mergePositions({
    safeAddress: '0x...',
    amount: '10',                   // Amount of each token to merge
    conditionId: '0x...',
    negRisk: true,
});

console.log(`Merge confirmed: ${receipt.transactionHash}`);
```

### 3. Redeem Positions

Redeem winning positions after market resolution.

- Use after a market has resolved to claim your winnings.
- For neg-risk markets, specify amounts for each outcome `[yesAmount, noAmount]`.

```ts
const receipt = await sdk.redeemPositions({
    safeAddress: '0x...',
    conditionId: '0x...',
    negRisk: true,
    amounts: ['100', '0'],          // [YES tokens, NO tokens] to redeem
});

console.log(`Redeem confirmed: ${receipt.transactionHash}`);
```

### Transaction Overrides

All methods accept optional transaction overrides:

```ts
await sdk.splitPositions(
    { safeAddress, amount, conditionId, negRisk },
    { gasPrice: 100_000_000_000n }  // Custom gas price
);
```

## API Reference

### `PolymarketSDK`

| Method | Description |
|--------|-------------|
| `splitPositions(params, overrides?)` | Split USDC into YES/NO tokens |
| `mergePositions(params, overrides?)` | Merge YES/NO tokens back to USDC |
| `redeemPositions(params, overrides?)` | Redeem winning positions after resolution |

## Links

- [Polymarket](https://polymarket.com)
- [viem Documentation](https://viem.sh)
- [Polygon Network](https://polygon.technology)

---

**Made by [Yog4a](https://github.com/yog4a)**
