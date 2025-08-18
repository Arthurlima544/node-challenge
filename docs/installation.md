
##  Installation

### Prerequisites
- Node.js (version 22.18)
- Docker & Docker Compose
- Git

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Arthurlima544/node-rocketseat-challenge.git
   cd node-rocketseat-challenge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**

    - Edit the `.env` and `.env.test` file to set the required environment variables. The following variables are required:
      - `DATABASE_URL` – The connection string for your database (e.g., `postgres://user:password@localhost:5432/dbname`)
      - `PORT` – The port number the app should run on (e.g., `3000`)
      - `JWT_SECRET` – Secret key for JWT authentication
      - `NODE_ENV` - Environment (e.g., `development`, `test`, `production`)

4. **Start database**
   ```bash
   docker-compose up -d
   ```

5. **Run database migrations**
   ```bash
   npm run db:migrate
   ```

6. **Seed the database (optional)**
   ```bash
   npm run db:seed
   ```
