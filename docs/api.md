# API Documentation

## Base URL

All API endpoints are prefixed with `/api/v1`.

## Authentication

Most endpoints require authentication via Bearer token:
```
Authorization: Bearer <access_token>
```

## Endpoints

### Auth
- `POST /auth/nonce` - Get nonce for signing
- `POST /auth/login` - Login with wallet
- `POST /auth/refresh` - Refresh access token
- `POST /auth/logout` - Logout

### Users
- `GET /users/me` - Get current user
- `PUT /users/me` - Update current user
- `GET /users/:id` - Get user by ID
- `GET /users` - List users (admin only)

### Bets
- `GET /bets` - List bets
- `GET /bets/:id` - Get bet by ID
- `POST /bets` - Create bet
- `PUT /bets/:id` - Update bet (creator only)
- `DELETE /bets/:id` - Cancel bet (creator only)
- `POST /bets/:id/accept` - Accept bet
- `POST /bets/:id/resolve` - Resolve bet (admin only)

### Deposits
- `GET /deposits` - List deposits
- `GET /deposits/:id` - Get deposit by ID
- `POST /deposits` - Initiate deposit

### Payouts
- `GET /payouts` - List payouts
- `GET /payouts/:id` - Get payout by ID
- `POST /payouts` - Request payout
- `POST /payouts/:id/process` - Process payout (admin only)

### Notifications
- `GET /notifications` - List notifications
- `PUT /notifications/:id/read` - Mark as read
- `PUT /notifications/read-all` - Mark all as read

### Leaderboard
- `GET /leaderboard` - Get leaderboard
- `GET /leaderboard/me` - Get user's rank

### Support
- `GET /support/tickets` - List tickets
- `GET /support/tickets/:id` - Get ticket
- `POST /support/tickets` - Create ticket
- `PUT /support/tickets/:id` - Update ticket

### Admin
- `GET /admin/analytics` - Get analytics
- `GET /admin/deposits/pending` - Get pending deposits
- `GET /admin/payouts/pending` - Get pending payouts
- `GET /admin/users` - List users
- `PUT /admin/users/:id/ban` - Ban user
- `PUT /admin/users/:id/unban` - Unban user
- `GET /admin/audit-logs` - Get audit logs

## Error Responses

### 400 Bad Request
```json
{
  "statusCode": 400,
  "message": "Validation failed",
  "errors": [...]
}
```

### 401 Unauthorized
```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

### 403 Forbidden
```json
{
  "statusCode": 403,
  "message": "Forbidden"
}
```

### 404 Not Found
```json
{
  "statusCode": 404,
  "message": "Not Found"
}
```

### 500 Internal Server Error
```json
{
  "statusCode": 500,
  "message": "Internal Server Error"
}
```

## Rate Limiting

- 100 requests per minute per IP
- Exceeding limits returns 429 Too Many Requests
