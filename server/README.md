# server

## Setup

Set up the database by following the instructions in [database/README.md](../database/README.md).

Create `.env` file:

```bash
touch .env
```

Add environment variables to `.env` file:

```bash
DATABASE_URL=postgres://user:password@localhost:5432/climbcompdb?schema=public
JWT_SECRET=your-secret
```

Apply database migrations:

```bash
npx prisma migrate dev --skip-generate
```

## Start server

Generate types:

```bash
yarn typegen
```

Start server:

```bash
yarn dev
```
