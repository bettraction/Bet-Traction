export interface User {
  id: string;
  wallet_address: string;
  username?: string;
  email?: string;
  avatar_url?: string;
  bio?: string;
  balance: string;
  total_wagered: string;
  total_won: string;
  wins: number;
  losses: number;
  is_admin: boolean;
  is_banned: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface Bet {
  id: string;
  creator_id: string;
  acceptor_id?: string;
  title: string;
  description?: string;
  terms: string;
  stake_amount: string;
  currency: string;
  status: 'pending' | 'available' | 'accepted' | 'resolved' | 'cancelled';
  winner_id?: string;
  resolver_id?: string;
  resolved_at?: Date;
  expires_at?: Date;
  created_at: Date;
  updated_at: Date;
  creator?: User;
  acceptor?: User;
  winner?: User;
}

export interface Deposit {
  id: string;
  user_id: string;
  amount: string;
  currency: string;
  transaction_hash: string;
  status: 'pending' | 'confirmed' | 'failed';
  block_number?: number;
  confirmed_at?: Date;
  created_at: Date;
  user?: User;
}

export interface Payout {
  id: string;
  user_id: string;
  bet_id: string;
  amount: string;
  currency: string;
  transaction_hash?: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  processed_by?: string;
  processed_at?: Date;
  created_at: Date;
  user?: User;
  bet?: Bet;
}

export interface Notification {
  id: string;
  user_id: string;
  type: string;
  title: string;
  message: string;
  data?: Record<string, any>;
  read: boolean;
  created_at: Date;
}

export interface ApiResponse<T = any> {
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export interface LoginRequest {
  wallet_address: string;
  signature: string;
  nonce: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  user: User;
}

export interface CreateBetRequest {
  title: string;
  description?: string;
  terms: string;
  stake_amount: string;
  currency?: string;
  expires_at?: string;
}

export interface InitiateDepositRequest {
  amount: string;
  currency?: string;
}

export interface RequestPayoutRequest {
  amount: string;
  currency?: string;
}

export interface CreateSupportTicketRequest {
  subject: string;
  description: string;
  priority?: 'low' | 'medium' | 'high';
}
