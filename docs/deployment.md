# Deployment Guide

## Prerequisites

- Docker
- Docker Compose
- PostgreSQL 15+
- Redis 7+
- Domain name
- SSL certificate

## Docker Deployment

### Using Docker Compose

1. **Clone repository**

   ```bash
   git clone https://github.com/bettraction/bettraction.git
   cd bettraction
   ```

2. **Set up environment**

   ```bash
   cp .env.production.example .env
   # Edit .env with production values
   ```

3. **Start all services**
   ```bash
   docker-compose up -d
   ```

### Services

- `postgres: PostgreSQL
- `redis`: Redis
- `api`: NestJS API
- `web`: React web app
- `admin`: React admin dashboard
- `nginx`: Reverse proxy

## Environment Variables

See [.env.production.example](../.env.production.example) for required variables.

## Database Migrations

Run migrations:

```bash
docker-compose exec api npm run migration:run
```

## Health Checks

- API: http://localhost:3000/api/health
- Web: http://localhost:80
- Admin: http://localhost:81

## Backup & Restore

### Backup Database

```bash
docker-compose exec postgres pg_dump -U postgres bettraction > backup.sql
```

### Restore Database

```bash
docker-compose exec -T postgres psql -U postgres bettraction < backup.sql
```

## SSL with Let's Encrypt

1. Install certbot
2. Obtain certificate
3. Configure Nginx
4. Set up auto-renewal

See [Nginx Configuration](../infrastructure/nginx/nginx.conf)

## Monitoring

- Prometheus: http://localhost:9090
- Grafana: http://localhost:3000

## CI/CD

GitHub Actions workflows:

- `lint.yml` - Lint code
- `test.yml` - Run tests
- `build.yml` - Build project
- `security.yml` - Security scans
- `release.yml` - Create releases
- `deploy.yml` - Deploy to production

## Rollback

```bash
# Rollback to previous version
docker-compose up -d --build api web admin
```
