# Architecture

## Overview

BetTraction uses a monorepo architecture with the following components:

## Frontend

### Web App (apps/web)

- **Stack**: React 18 + Vite + TypeScript + Tailwind CSS
- **Features**:
  - Landing Page
  - Explore Bets
  - Create Bet
  - Accept Bet
  - Profile
  - Leaderboard
  - Vault Transparency
  - FAQ
  - Support
  - Dashboard
  - Settings
- **Wallet Integration**: RainbowKit + Wagmi + Viem

### Admin Dashboard (apps/admin)

- **Stack**: React 18 + Vite + TypeScript + Tailwind CSS + Recharts
- **Features**:
  - Login
  - Analytics
  - Pending Deposits
  - Pending Payouts
  - Bets
  - Users
  - Reports
  - Disputes
  - Notifications
  - Settings
  - Audit Logs

## Backend

### API Server (apps/api)

- **Stack**: NestJS + TypeScript + TypeORM + PostgreSQL + Redis
- **Modules**:
  - **Auth**: JWT authentication, refresh tokens
  - **Users**: User management, profiles
  - **Bets**: Bet creation, acceptance, resolution
  - **Deposits**: On-chain deposit verification
  - **Payouts**: Manual payout processing
  - **Notifications**: Real-time notifications
  - **Support**: Support tickets
  - **Admin**: Admin-only endpoints
  - **Analytics**: Metrics and reporting

## Data Layer

### PostgreSQL

- Stores all application data
- Tables: users, bets, deposits, payouts, transactions, notifications, audit_logs, support_tickets, leaderboard

### Redis

- Cache layer
- Session storage
- Real-time pub/sub

## Web3 Layer

### Base Mainnet

- Primary network for all transactions
- Low fees, high throughput

### Vault Wallet

- Address: `0xc1A020BE6548D70319a31060E32f1E2A8Cf8d930`
- Managed escrow
- All deposits and payouts flow through here

## Infrastructure

### Docker

- Containerized deployments
- Docker Compose for local development

### Nginx

- Reverse proxy
- SSL termination
- Load balancing

### Monitoring

- **Prometheus**: Metrics collection
- **Grafana**: Metrics visualization
- **Sentry**: Error tracking

## Authentication

1. User connects wallet via RainbowKit
2. User signs a message for verification
3. Server issues JWT access and refresh tokens
4. Tokens used for authenticated API requests

## Deposit Verification

1. User initiates deposit from frontend
2. User sends ETH/tokens to vault wallet
3. Backend monitors the vault address
4. Once transaction is confirmed, deposit is marked as verified
5. User's balance is updated

## Payout Verification

1. Bet is resolved
2. Admin initiates payout
3. Transaction is signed and sent from vault
4. Backend verifies on-chain confirmation
5. Payout is marked as complete

## Vault System

- All funds held in secure vault wallet
- Full audit trail of all transactions
- Transparency page showing all deposits and payouts
- Manual payout process with multiple approvals

## Admin Dashboard

- Secure login with 2FA
- Real-time analytics
- Pending deposit review
- Payout processing
- User management
- Dispute resolution
- Audit logs
