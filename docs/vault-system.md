# Vault System

## Overview

The BetTraction Vault System uses a managed escrow model to secure all user funds.

## Vault Wallet

**Address**: `0xc1A020BE6548D70319a31060E32f1E2A8Cf8d930`

All deposits and payouts flow through this wallet.

## Managed Escrow Model

1. User deposits funds into vault
2. Funds are held securely in the vault
3. When a bet is accepted, stakes are locked
4. When bet is resolved, payout is sent from vault
5. All transactions are publicly verifiable on BaseScan

## Deposit Verification

1. User initiates deposit via frontend
2. Frontend displays vault address and deposit amount
3. User sends funds from their wallet to vault
4. Backend monitors vault transactions
5. Once transaction has 6 confirmations, deposit is marked verified
6. User's balance is updated

## Manual Payout Process

1. Bet is resolved (winner determined)
2. Admin reviews pending payout
3. Multiple approvals may be required
4. Payout transaction is created and signed
5. Transaction is sent to network
6. Backend verifies transaction confirmation
7. Payout marked as complete

## Transparency System

- All deposits are publicly listed on our Transparency page
- All payouts are publicly listed on our Transparency page
- Users can verify their own transactions on BaseScan
- Full audit trail available in admin dashboard

## Proof of Deposits

Every deposit has:

- Transaction hash
- Block number
- Confirmation count
- User wallet address
- Deposit amount
- Timestamp

## Proof of Payouts

Every payout has:

- Transaction hash
- Block number
- Recipient wallet address
- Payout amount
- Related bet ID
- Timestamp
- Admin who processed it

## Security Measures

- Multi-signature wallet (coming soon)
- Time-locked withdrawals
- Full audit logging
- Real-time monitoring
- Regular security audits
- 24/7 oversight by security team
