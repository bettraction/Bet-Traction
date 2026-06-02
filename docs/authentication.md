# Authentication

## Overview

BetTraction uses wallet-based authentication with JWT tokens.

## Flow

1. User connects wallet via RainbowKit
2. Frontend requests a nonce from the server
3. User signs the nonce with their wallet
4. Frontend sends signed message to server
5. Server verifies signature and issues JWT tokens
6. Tokens are used for authenticated requests

## Endpoints

### POST /api/v1/auth/nonce

Request a nonce for signing.

**Request Body:**

```json
{
  "wallet_address": "0x1234...5678"
}
```

**Response:**

```json
{
  "nonce": "Sign this message to login to BetTraction: abc123xyz",
  "expires_at": "2026-06-03T12:00:00Z"
}
```

### POST /api/v1/auth/login

Login with signed message.

**Request Body:**

```json
{
  "wallet_address": "0x1234...5678",
  "signature": "0xabc...def",
  "nonce": "Sign this message to login to BetTraction: abc123xyz"
}
```

**Response:**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "uuid",
    "wallet_address": "0x1234...5678",
    "username": "user123",
    "balance": "0.0"
  }
}
```

### POST /api/v1/auth/refresh

Refresh access token.

**Request Body:**

```json
{
  "refresh_token": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Response:**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs..."
}
```

### POST /api/v1/auth/logout

Logout user.

**Headers:**

```
Authorization: Bearer <access_token>
```

## JWT Tokens

### Access Token

- Expires in 7 days
- Used for API authentication
- Should be sent in Authorization header

### Refresh Token

- Expires in 30 days
- Used to get new access tokens
- Stored securely (HTTP-only cookie recommended)

## Security Considerations

- Nonces expire after 5 minutes
- Signatures are verified using Viem
- JWT tokens are signed with RS256
- Tokens contain user ID and wallet address
- Refresh tokens are invalidated on logout
