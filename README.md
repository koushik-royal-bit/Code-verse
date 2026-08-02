# CodeVerse

A modern development platform for collaborative coding, project management, and team collaboration.

## Tech Stack

### Frontend
- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router v6
- Zustand (state management)

### Backend
- Node.js + Express + TypeScript
- Prisma ORM
- PostgreSQL
- Zod (validation)

### Development
- ESLint + Prettier
- Concurrently (monorepo dev)

## Project Structure

```
codeverse/
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── store/
│   │   ├── services/
│   │   ├── types/
│   │   └── utils/
│   └── ...
├── backend/           # Express + TypeScript backend
│   ├── src/
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── modules/
│   └── prisma/
└── package.json       # Root workspace config
```

## Getting Started

### Prerequisites
- Node.js >= 20
- PostgreSQL >= 14

### Installation

```bash
# Install all dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database URL

# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push
```

### Development

```bash
# Start both frontend and backend
npm run dev

# Frontend only (port 3000)
npm run dev --workspace=frontend

# Backend only (port 4000)
npm run dev --workspace=backend
```

### Building

```bash
# Build all packages
npm run build

# Frontend only
npm run build:frontend

# Backend only
npm run build:backend
```

### Database

```bash
# Generate Prisma client
npm run db:generate

# Push schema changes
npm run db:push

# Run migrations
npm run db:migrate

# Open Prisma Studio
npm run db:studio
```

### Linting & Formatting

```bash
# Lint all packages
npm run lint

# Format all packages
npm run format
```

## Environment Variables

See `.env.example` for required variables.

## API Endpoints

- `GET /api/health` - Health check endpoint

## License

MIT