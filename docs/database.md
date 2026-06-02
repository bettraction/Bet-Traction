# Database Schema

## Overview

BetTraction uses PostgreSQL with TypeORM for database operations.

## Tables

### users
Stores user information.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Unique user ID |
| wallet_address | VARCHAR(42) | UNIQUE, NOT NULL | User's wallet address |
| username | VARCHAR(50) | UNIQUE, NULLABLE | Display name |
| email | VARCHAR(255) | UNIQUE, NULLABLE | Email address |
| avatar_url | TEXT | NULLABLE | Avatar image URL |
| bio | TEXT | NULLABLE | User bio |
| balance | DECIMAL | DEFAULT 0 | Available balance |
| total_wagered | DECIMAL | DEFAULT 0 | Total amount wagered |
| total_won | DECIMAL | DEFAULT 0 | Total amount won |
| wins | INTEGER | DEFAULT 0 | Number of wins |
| losses | INTEGER | DEFAULT 0 | Number of losses |
| is_admin | BOOLEAN | DEFAULT false | Admin flag |
| is_banned | BOOLEAN | DEFAULT false | Ban status |
| created_at | TIMESTAMP | DEFAULT NOW() | Creation time |
| updated_at | TIMESTAMP | DEFAULT NOW() | Update time |

### bets
Stores bet information.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Unique bet ID |
| creator_id | UUID | FK to users | Bet creator |
| acceptor_id | UUID | FK to users, NULLABLE | Bet acceptor |
| title | VARCHAR(255) | NOT NULL | Bet title |
| description | TEXT | NULLABLE | Bet description |
| terms | TEXT | NOT NULL | Bet terms |
| stake_amount | DECIMAL | NOT NULL | Stake amount |
| currency | VARCHAR(10) | DEFAULT 'ETH' | Currency |
| status | VARCHAR(20) | NOT NULL | Bet status (pending, accepted, resolved, cancelled) |
| winner_id | UUID | FK to users, NULLABLE | Winner |
| resolver_id | UUID | FK to users, NULLABLE | Who resolved the bet |
| resolved_at | TIMESTAMP | NULLABLE | Resolution time |
| expires_at | TIMESTAMP | NULLABLE | Expiration time |
| created_at | TIMESTAMP | DEFAULT NOW() | Creation time |
| updated_at | TIMESTAMP | DEFAULT NOW() | Update time |

### deposits
Stores deposit records.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Unique deposit ID |
| user_id | UUID | FK to users | User |
| amount | DECIMAL | NOT NULL | Deposit amount |
| currency | VARCHAR(10) | DEFAULT 'ETH' | Currency |
| transaction_hash | VARCHAR(66) | UNIQUE, NOT NULL | On-chain tx hash |
| status | VARCHAR(20) | NOT NULL | Status (pending, confirmed, failed) |
| block_number | INTEGER | NULLABLE | Block number |
| confirmed_at | TIMESTAMP | NULLABLE | Confirmation time |
| created_at | TIMESTAMP | DEFAULT NOW() | Creation time |

### payouts
Stores payout records.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Unique payout ID |
| user_id | UUID | FK to users | User |
| bet_id | UUID | FK to bets | Related bet |
| amount | DECIMAL | NOT NULL | Payout amount |
| currency | VARCHAR(10) | DEFAULT 'ETH' | Currency |
| transaction_hash | VARCHAR(66) | UNIQUE, NULLABLE | On-chain tx hash |
| status | VARCHAR(20) | NOT NULL | Status (pending, processing, completed, failed) |
| processed_by | UUID | FK to users, NULLABLE | Admin who processed |
| processed_at | TIMESTAMP | NULLABLE | Processing time |
| created_at | TIMESTAMP | DEFAULT NOW() | Creation time |

### transactions
Stores all transactions (deposits, payouts, bets).

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Unique transaction ID |
| user_id | UUID | FK to users | User |
| type | VARCHAR(20) | NOT NULL | Type (deposit, payout, bet_win, bet_loss) |
| amount | DECIMAL | NOT NULL | Amount |
| currency | VARCHAR(10) | DEFAULT 'ETH' | Currency |
| reference_id | UUID | NULLABLE | Reference to bet/deposit/payout |
| balance_before | DECIMAL | NOT NULL | Balance before |
| balance_after | DECIMAL | NOT NULL | Balance after |
| description | TEXT | NULLABLE | Description |
| created_at | TIMESTAMP | DEFAULT NOW() | Creation time |

### notifications
Stores user notifications.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Unique notification ID |
| user_id | UUID | FK to users | User |
| type | VARCHAR(50) | NOT NULL | Notification type |
| title | VARCHAR(255) | NOT NULL | Title |
| message | TEXT | NOT NULL | Message |
| data | JSONB | NULLABLE | Additional data |
| read | BOOLEAN | DEFAULT false | Read status |
| created_at | TIMESTAMP | DEFAULT NOW() | Creation time |

### audit_logs
Stores audit logs for admin actions.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Unique log ID |
| admin_id | UUID | FK to users | Admin |
| action | VARCHAR(100) | NOT NULL | Action performed |
| entity_type | VARCHAR(50) | NULLABLE | Entity type |
| entity_id | UUID | NULLABLE | Entity ID |
| old_values | JSONB | NULLABLE | Old values |
| new_values | JSONB | NULLABLE | New values |
| ip_address | VARCHAR(45) | NULLABLE | IP address |
| user_agent | TEXT | NULLABLE | User agent |
| created_at | TIMESTAMP | DEFAULT NOW() | Creation time |

### support_tickets
Stores support tickets.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Unique ticket ID |
| user_id | UUID | FK to users | User |
| subject | VARCHAR(255) | NOT NULL | Subject |
| description | TEXT | NOT NULL | Description |
| status | VARCHAR(20) | NOT NULL | Status (open, in_progress, resolved, closed) |
| priority | VARCHAR(20) | DEFAULT 'medium' | Priority |
| assigned_to | UUID | FK to users, NULLABLE | Assigned admin |
| resolved_at | TIMESTAMP | NULLABLE | Resolution time |
| created_at | TIMESTAMP | DEFAULT NOW() | Creation time |
| updated_at | TIMESTAMP | DEFAULT NOW() | Update time |

### leaderboard
Stores leaderboard data.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Unique ID |
| user_id | UUID | FK to users | User |
| period | VARCHAR(20) | NOT NULL | Period (daily, weekly, monthly, all_time) |
| score | DECIMAL | NOT NULL | Score |
| rank | INTEGER | NULLABLE | Rank |
| wins | INTEGER | DEFAULT 0 | Wins in period |
| total_wagered | DECIMAL | DEFAULT 0 | Wagered in period |
| created_at | TIMESTAMP | DEFAULT NOW() | Creation time |
| updated_at | TIMESTAMP | DEFAULT NOW() | Update time |
