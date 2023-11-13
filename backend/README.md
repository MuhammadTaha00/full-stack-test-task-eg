# User Authentication Backend with NestJS and MongoDB

This is the backend module for user authentication built with NestJS, using MongoDB as the database. It provides API endpoints for user signup and signin, enforcing validation rules with Data Transfer Objects (DTOs) and securing endpoints with JWT authentication.

## Table of Contents

- [Features](#features)
- [Technical Stack](#technical-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Endpoints](#endpoints)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Signup**:
  - Users can create an account by providing their email, name, and password.
  - Passwords are securely hashed before storing them in the database.

- **User Signin**:
  - Registered users can sign in using their email and password.
  - JSON Web Tokens (JWT) are used for user authentication.

- **Validation**:
  - Input data is validated using Data Transfer Objects (DTOs) with class-validator.

- **Security**:
  - Passwords are securely hashed before storing them in the database.
  - JWT authentication is used for secure access to endpoints.

## Technical Stack

- [NestJS](https://nestjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [class-validator](https://github.com/typestack/class-validator)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your system.
- MongoDB database (locally or hosted).

### Installation

1. Clone the repository:
   git clone https://github.com/yourusername/auth-backend.git

2. Install dependencies
    npm install 
3. Create env file see env example

4. Start the development server

    npm start 

  Hurray app is running 