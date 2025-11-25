# Secure Authentication System - OJT Project

A professional-grade user authentication and profile management system built with FastAPI, SQLAlchemy, JWT, and vanilla JavaScript.

## Features

- **User Registration** - Secure account creation with email validation
- **User Login** - JWT-based authentication with access/refresh tokens
- **Profile Management** - View and update user profile information
- **Password Security** - bcrypt hashing for password protection
- **Protected Routes** - JWT token validation for secure endpoints
- **Responsive Design** - Modern UI that works on all devices

## Project Structure

\`\`\`
.
├── backend/
│   ├── main.py              # FastAPI app configuration
│   ├── database.py          # SQLAlchemy database setup
│   ├── models.py            # User database model
│   ├── schemas.py           # Pydantic validation schemas
│   ├── requirements.txt     # Python dependencies
│   ├── routers/
│   │   ├── auth.py          # Authentication endpoints
│   │   └── user.py          # User profile endpoints
│   └── utils/
│       ├── jwt_handler.py   # JWT token management
│       └── password_hash.py # Password hashing utilities
└── frontend/
    ├── index.html           # Home page
    ├── register.html        # Registration page
    ├── login.html           # Login page
    ├── profile.html         # User profile page
    ├── style.css            # Styling
    └── app.js               # Navigation & auth logic
\`\`\`

## Installation & Setup

### Backend Setup

1. Install Python dependencies:
\`\`\`bash
cd backend
pip install -r requirements.txt
\`\`\`

2. Set up environment variables (optional):
\`\`\`bash
export SECRET_KEY="your-secret-key-change-in-production"
export DATABASE_URL="sqlite:///./auth.db"
\`\`\`

3. Run the FastAPI server:
\`\`\`bash
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
\`\`\`

The API will be available at `http://localhost:8000`

### Frontend Setup

The frontend is static HTML/CSS/JavaScript. Open the frontend files directly:

1. Navigate to the frontend directory
2. Open `index.html` in your browser, or
3. Serve with a simple HTTP server:

\`\`\`bash
cd frontend
python -m http.server 8080
\`\`\`

Then visit `http://localhost:8080`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### User Profile
- `GET /api/users/me` - Get current user profile (requires auth)
- `PUT /api/users/me` - Update user profile (requires auth)
- `DELETE /api/users/me` - Delete user account (requires auth)

## Request/Response Examples

### Register
\`\`\`bash
curl -X POST http://localhost:8000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "password": "SecurePassword123"
  }'
\`\`\`

Response:
\`\`\`json
{
  "access_token": "eyJhbGc...",
  "refresh_token": "eyJhbGc...",
  "token_type": "bearer",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "created_at": "2025-01-01T12:00:00",
    "updated_at": "2025-01-01T12:00:00"
  }
}
\`\`\`

### Login
\`\`\`bash
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePassword123"
  }'
\`\`\`

Response: (Same as register)

### Get Profile
\`\`\`bash
curl -X GET http://localhost:8000/api/users/me \
  -H "Authorization: Bearer {access_token}"
\`\`\`

### Update Profile
\`\`\`bash
curl -X PUT http://localhost:8000/api/users/me \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer {access_token}" \
  -d '{
    "first_name": "Jane",
    "last_name": "Smith"
  }'
\`\`\`

## Technology Stack

### Backend
- **FastAPI** - Modern Python web framework
- **SQLAlchemy** - SQL database ORM
- **PyJWT** - JWT token handling
- **Passlib/bcrypt** - Password hashing
- **Pydantic** - Data validation

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **Vanilla JavaScript** - Client-side logic with Fetch API

## Security Features

1. **Password Hashing** - bcrypt with salt rounds
2. **JWT Tokens** - Secure token-based authentication
3. **Access Control** - Protected routes with token verification
4. **CORS** - Cross-Origin Resource Sharing configured
5. **Input Validation** - Pydantic schemas validate all inputs

## Testing

### Manual Testing

1. Open browser and go to `http://localhost:8080`
2. Click "Get Started" to register
3. Fill in email, name, password
4. Submit to create account (auto-login)
5. View profile and update information
6. Logout and login again to test persistence

### API Testing with curl or Postman

Use the examples above to test each endpoint.

## Troubleshooting

**CORS Error**: Make sure backend is running on port 8000
**Connection Error**: Ensure frontend URL points to correct backend URL in fetch calls
**Token Invalid**: Tokens expire after 30 minutes. Refresh by logging in again

## Future Enhancements

- Email verification on registration
- Password reset functionality
- Refresh token rotation
- User role management
- Rate limiting
- API documentation with Swagger UI

## Team

OJT Project - Semester 1
- Arhan
- Santosh

## License

This is an educational project for OJT purposes.
