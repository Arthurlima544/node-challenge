
## How to Use It

### Development Mode
```bash
npm run dev
```
The server will start at `http://localhost:3333` with hot reload enabled.

### API Documentation

Access the interactive API documentation at:
- **Scalar UI**: `http://localhost:3333/docs`

### Database Management
```bash
# Generate new migrations
npm run db:generate

# Apply migrations
npm run db:migrate

# Open Drizzle Studio
npm run db:studio
```

### Authentication
1. **Register/Login** to get JWT token
2. **Include token** in Authorization header: `Bearer <token>`
3. **Manager role** required for course creation
