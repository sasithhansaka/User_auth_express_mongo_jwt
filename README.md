# User Authentication REST API
- This project provides a secure user authentication system built with Express.js, JWT, and MongoDB.
## It offers the following features:
- User Registration and Login: Allows users to register and authenticate securely.
- Access Tokens: Implements JWT for session management, including token generation and validation.
- Password Security: Utilizes Node.js crypto library to hash passwords, ensuring secure storage.

## Getting Started
Follow these steps to set up the project locally.

## Ensure you have the following installed:
Node.js (v14 or later),
MongoDB,
npm or yarn package manager

### Clone the repository
    git clone https://github.com/yourusername/user-authentication-api.git
    cd user-authentication-api
### Install dependencies
    npm install
### Configure environment variables
#### Create a .env file in the root directory and add the following
    PORT=5002
    MONGO_URI=your_mongodb_connection_string
    ACCESS_TOKEN=your_access_token_secret
### Start the development server
    npm run dev
- The server will run at http://localhost:3000.
## API Endpoints
### user register
    http://localhost:5002/api/user/register-user	
### user login
    http://localhost:5002/api/user/login-user
### current user
    http://localhost:5002/api/user/current--user
## Built With
- Express.js - Fast, minimalist web framework for Node.js
- JWT - Secure and compact token authentication
- MongoDB - Flexible NoSQL database for user datal
- Node.js crypto - Native cryptography library for password hashing

- Contributions are welcome! Feel free to submit issues or pull requests to improve the project.



  



