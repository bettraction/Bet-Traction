# Contributing

We love contributions! Thank you for considering contributing to BetTraction.

## Code of Conduct

Please read and follow our Code of Conduct (coming soon).

## How Can I Contribute?

### Reporting Bugs

- Use the Bug Report template
- Include steps to reproduce
- Include environment details
- Include screenshots if applicable

### Suggesting Features

- Use the Feature Request template
- Explain the problem
- Suggest a solution
- Consider alternatives

### Code Contributions

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Run linting
6. Submit a PR

## Development Setup

### Prerequisites

- Node.js 20+
- npm 10+
- Docker
- PostgreSQL 15+
- Redis 7+

### Local Development

```bash
# Clone repo
git clone https://github.com/bettraction/bettraction.git
cd bettraction

# Install dependencies
npm install

# Set up env
cp .env.example .env
# Edit .env

# Start services
docker-compose up -d postgres redis

# Run migrations
cd apps/api
npm run migration:run

# Start dev
npm run dev
```

## Pull Request Guidelines

1. Follow existing code style
2. Write tests for new features
3. Update documentation
4. Make sure all tests pass
5. Keep PRs focused and small
6. Use conventional commits

## Commit Messages

We use Conventional Commits:

```
<type>(<scope>): <subject>

Types:
- feat: new feature
- fix: bug fix
- docs: documentation
- style: formatting
- refactor: refactoring
- test: tests
- chore: build/tooling
```

## Code Style

- ESLint for linting
- Prettier for formatting
- TypeScript for type safety
- Conventional commits

## Testing

```bash
# Run lint
npm run lint

# Run tests
npm run test

# Type check
npm run type-check
```

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Reach out to us at hello@bettraction.com
