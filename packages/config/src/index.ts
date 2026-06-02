import 'dotenv/config';

export interface NetworkConfig {
  name: string;
  chainId: number;
  rpcUrl: string;
  explorerUrl: string;
}

export interface AppConfig {
  api: {
    port: number;
    host: string;
    prefix: string;
    version: string;
  };
  web: {
    port: number;
    url: string;
  };
  admin: {
    port: number;
    url: string;
  };
  database: {
    url: string;
  };
  redis: {
    url: string;
  };
  jwt: {
    secret: string;
    expiresIn: string;
    refreshSecret: string;
    refreshExpiresIn: string;
  };
  network: NetworkConfig;
  vaultWalletAddress: string;
  sentry: {
    dsn?: string;
    environment: string;
  };
}

const config: AppConfig = {
  api: {
    port: parseInt(process.env.API_PORT || '3000'),
    host: process.env.API_HOST || '0.0.0.0',
    prefix: process.env.API_PREFIX || 'api',
    version: process.env.API_VERSION || 'v1',
  },
  web: {
    port: parseInt(process.env.WEB_PORT || '5173'),
    url: process.env.WEB_URL || 'http://localhost:5173',
  },
  admin: {
    port: parseInt(process.env.ADMIN_PORT || '5174'),
    url: process.env.ADMIN_URL || 'http://localhost:5174',
  },
  database: {
    url: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/bettraction',
  },
  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    refreshSecret:
      process.env.JWT_REFRESH_SECRET || 'your-super-secret-refresh-token-key-change-this',
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '30d',
  },
  network: {
    name: process.env.NETWORK_NAME || 'Base Mainnet',
    chainId: parseInt(process.env.NETWORK_CHAIN_ID || '8453', 10),
    rpcUrl: process.env.NETWORK_RPC_URL || 'https://mainnet.base.org',
    explorerUrl: process.env.NETWORK_EXPLORER_URL || 'https://basescan.org',
  },
  vaultWalletAddress:
    process.env.VAULT_WALLET_ADDRESS || '0xc1A020BE6548D70319a31060E32f1E2A8Cf8d930',
  sentry: {
    dsn: process.env.SENTRY_DSN,
    environment: process.env.SENTRY_ENVIRONMENT || 'development',
  },
};

export default config;
