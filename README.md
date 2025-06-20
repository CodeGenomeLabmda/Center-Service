# Center Service 🏨

---

## 🚀 Features

-   Express REST API
-   Prisma ORM with MySQL
-   TypeScript support
-   Centralized error handling
-   Request tracing via Correlation IDs
-   Winston-based logging
-   Zod-based request validation

---

## 🛠️ Prerequisites

Make sure you have the following installed:

-   [Node.js](https://nodejs.org/)
-   [Git](https://git-scm.com/)
-   [MySQL](https://www.mysql.com/)

---

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Center-Service

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Update .env with your database credentials
```

---

## 🗄️ Database Setup

```bash
# Run migrations
npm run prisma-migrate
# Generate Prisma client
npm run prisma-generate
```

---

## 🚀 Running the Application

```bash
# For development (with auto-reload)
npm run dev

# For production
npm run build
npm start
```

---

## 🛠️ Available Scripts

You can use the following npm scripts for development and deployment:

| Script              | Description                                                                                   |
|---------------------|----------------------------------------------------------------------------------------------|
| `npm run dev`       | Generates Prisma client and starts the server with auto-reload using nodemon.                |
| `npm run build`     | Compiles the TypeScript source code to JavaScript in the `dist` folder.                      |
| `npm start`         | Runs the compiled server from the `dist` folder using ts-node.                               |
| `npm run create-migration` | Creates a new Prisma migration (does not apply it) using the current schema.          |
| `npm run prisma-migrate`   | Applies all pending Prisma migrations to the database.                                |

> **Note:** Make sure to update your `.env` file and run database migrations before starting the server.

---

## 📖 Project Structure

-   `src/controllers/` - Express route handlers
-   `src/services/` - Business logic
-   `src/repositories/` - Database access via Prisma
-   `src/prisma/` - Prisma schema and migrations
-   `src/middlewares/` - Express middlewares (error handling, correlation ID, etc.)
-   `src/validators/` - Zod schemas for request validation
-   `src/utils/` - Helpers and error classes
-   `src/config/` - Configuration and logger setup

---

## 🧪 Testing

_TODO: Add testing instructions if tests are present._

---

## 📄 Environment Variables

See [.env.example](.env.example) for required variables:

-   `PORT`
-   `DATABASE_URL`

---

## 📝 License

MIT
