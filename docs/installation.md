
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

    - Add environment variables

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
