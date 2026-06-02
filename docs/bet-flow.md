# Bet Flow

## Overview

This document describes the complete lifecycle of a bet on BetTraction.

## Bet Lifecycle

### 1. Create Bet
1. User connects wallet
2. User navigates to Create Bet page
3. User fills in:
   - Title
   - Description
   - Terms
   - Stake amount
   - Expiration date
4. User confirms bet creation
5. Bet is created with status `pending`
6. User must deposit stake into vault

### 2. Deposit Stake
1. User initiates deposit from bet page
2. Frontend shows vault address and amount
3. User sends transaction from wallet
4. Backend monitors vault for transaction
5. After 6 confirmations, deposit is verified
6. User's balance is updated
7. Bet becomes available for acceptance

### 3. Accept Bet
1. Another user finds the bet in Explore page
2. User reviews bet details and terms
3. User clicks "Accept Bet"
4. User must have sufficient balance
5. User's stake is locked
6. Bet status changes to `accepted`
7. Both users are notified

### 4. Resolve Bet
1. Bet outcome is determined (per terms)
2. Users can agree on outcome
3. If no agreement, admin resolves
4. Admin reviews evidence and makes decision
5. Winner is selected
6. Bet status changes to `resolved`
7. Payout is initiated

### 5. Payout
1. Payout is created in `pending` status
2. Admin reviews payout
3. Admin processes payout
4. Transaction is sent from vault to winner
5. Backend verifies transaction on-chain
6. Payout marked as `completed`
7. Winner's balance is updated
8. Both users are notified

## Statuses

### Bet Statuses
- `pending`: Created, waiting for creator's deposit
- `available`: Deposit confirmed, waiting for acceptor
- `accepted`: Accepted by another user, in progress
- `resolved`: Winner determined
- `cancelled`: Cancelled by creator or expired

### Deposit Statuses
- `pending`: Transaction sent, waiting for confirmations
- `confirmed`: 6 confirmations, deposit credited
- `failed`: Transaction failed or was reverted

### Payout Statuses
- `pending`: Payout created, waiting for admin
- `processing`: Admin is processing
- `completed`: Transaction sent and confirmed
- `failed`: Transaction failed

## Notifications

Users receive notifications for:
- Bet accepted
- Bet resolved
- Deposit confirmed
- Payout received
- Dispute updates
- Admin announcements
