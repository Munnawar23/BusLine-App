📄 Environment Setup (.env File Required)
To run the server, you must create a .env file inside the server/ directory with the following keys:
# MongoDB connection string
MONGO_URI=your_mongodb_connection_string_here

# Google OAuth client ID
GOOGLE_CLIENT_ID=your_google_client_id_here

# JWT access token configuration
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d

# JWT refresh token configuration
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=30d

# Cookie encryption key (must be at least 32 characters long)
COOKIE_PASSWORD=your_secure_cookie_password_here

# Admin credentials (for AdminJS login)
ADMIN_LOGIN_EMAIL=your_admin_email@example.com
ADMIN_LOGIN_PASSWORD=your_admin_password
