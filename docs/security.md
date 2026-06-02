# Security

## Overview

Security is our top priority at BetTraction. We implement industry best practices to protect user funds and data.

## Security Measures

### Code Security

- Regular security audits
- Static code analysis
- Dependency scanning (npm audit, Trivy)
- CodeQL analysis
- Peer review for all changes

### Infrastructure Security

- Docker containers with least privilege
- Network segmentation
- Firewall rules
- Regular security patches
- DDoS protection

### Data Security

- Encryption at rest (PostgreSQL Transparent Data Encryption)
- Encryption in transit (TLS 1.3)
- Secure key management
- Regular backups (encrypted)
- Access logs and monitoring

### Wallet Security

- Wallet signature verification
- Nonce-based authentication
- JWT with short expiration
- Refresh token rotation
- No private keys stored on servers

## Responsible Disclosure

See [SECURITY.md](../SECURITY.md) for responsible disclosure policy.

## Audit Reports

We undergo regular security audits by third-party firms. Audit reports are available upon request.

## Bug Bounty

We offer a bug bounty program for security researchers. Please contact security@bettraction.com for details.

## Incident Response

1. Detection & Reporting
2. Triage & Assessment
3. Containment
4. Eradication
5. Recovery
6. Post-Incident Review

## Contact

- Security Email: security@bettraction.com
- PGP Key: https://bettraction.com/pgp-key.txt
