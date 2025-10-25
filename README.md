# SwapVerse - Socialized Trading on Base

A Next.js Base Mini App for frictionless token swaps with social features.

## Features

- 🔥 **Social Sentiment Swaps**: Discover trending tokens based on Farcaster community sentiment
- ⚡ **Gasless Swaps**: Execute swaps with sponsored gas fees via OnchainKit
- 🏆 **Leaderboards**: Compete with top traders and track your performance
- 🎯 **Token-Gated Perks**: Exclusive features for token holders
- 📱 **Mobile-First**: Optimized for Farcaster Mini App experience

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2)
- **Wallet**: OnchainKit (Coinbase Wallet)
- **Social**: Farcaster MiniKit
- **Styling**: Tailwind CSS with Coinbase theme
- **TypeScript**: Full type safety

## Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Set up environment variables**:
```bash
cp .env.local.example .env.local
# Edit .env.local with your API keys
```

3. **Run development server**:
```bash
npm run dev
```

4. **Open in browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
swapverse/
├── app/
│   ├── components/       # React components
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── providers.tsx     # Context providers
│   └── globals.css       # Global styles
├── public/
│   └── .well-known/
│       └── farcaster.json # Mini App manifest
└── package.json
```

## Key Components

- **ConnectWallet**: Wallet connection with OnchainKit
- **TrendingTokens**: Display tokens with Farcaster sentiment
- **SwapInterface**: Token swap UI with gasless transactions
- **Leaderboard**: Top traders by volume/profit
- **UserStats**: Personal trading statistics

## Deployment

1. **Build for production**:
```bash
npm run build
```

2. **Deploy to Vercel**:
```bash
vercel deploy
```

3. **Configure manifest**:
Update `public/.well-known/farcaster.json` with your production URL

## Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: OnchainKit API key
- `NEXT_PUBLIC_BASE_RPC_URL`: Base RPC endpoint
- `NEXT_PUBLIC_PAYMASTER_URL`: Paymaster service URL
- `NEYNAR_API_KEY`: Farcaster data API key
- `DEX_AGGREGATOR_API_KEY`: DEX aggregator API key

## Features Roadmap

- [ ] Real-time sentiment analysis
- [ ] Advanced trading analytics
- [ ] Social sharing of trades
- [ ] Token-gated premium features
- [ ] Push notifications for swaps
- [ ] Multi-chain support

## License

MIT

## Support

For issues and questions, visit [GitHub Issues](https://github.com/swapverse/swapverse/issues)
