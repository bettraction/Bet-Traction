import { z } from 'zod';

export const walletAddressSchema = z
  .string()
  .regex(/^0x[a-fA-F0-9]{40}$/, 'Invalid wallet address');

export const loginRequestSchema = z.object({
  wallet_address: walletAddressSchema,
  signature: z.string().min(1, 'Signature is required'),
  nonce: z.string().min(1, 'Nonce is required'),
});

export const createBetRequestSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255, 'Title must be 255 characters or less'),
  description: z.string().optional(),
  terms: z.string().min(1, 'Terms are required'),
  stake_amount: z
    .string()
    .refine(
      (val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0,
      'Stake amount must be a positive number'
    ),
  currency: z.string().default('ETH'),
  expires_at: z.string().optional(),
});

export const initiateDepositRequestSchema = z.object({
  amount: z
    .string()
    .refine(
      (val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0,
      'Amount must be a positive number'
    ),
  currency: z.string().default('ETH'),
});

export const requestPayoutRequestSchema = z.object({
  amount: z
    .string()
    .refine(
      (val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0,
      'Amount must be a positive number'
    ),
  currency: z.string().default('ETH'),
});

export const createSupportTicketRequestSchema = z.object({
  subject: z
    .string()
    .min(1, 'Subject is required')
    .max(255, 'Subject must be 255 characters or less'),
  description: z.string().min(1, 'Description is required'),
  priority: z.enum(['low', 'medium', 'high']).default('medium'),
});

export const updateUserSchema = z.object({
  username: z
    .string()
    .min(1, 'Username is required')
    .max(50, 'Username must be 50 characters or less')
    .optional(),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  avatar_url: z.string().url('Invalid URL').optional().or(z.literal('')),
  bio: z.string().max(500, 'Bio must be 500 characters or less').optional(),
});
