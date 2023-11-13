# User Authentication App

A user authentication module for signing up and signing in users to the application. Built using React with React Hook Form for efficient form management.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Sign Up Page**:
  - Users can create an account by filling out a signup form.
  - Signup form fields include email, name, and password.
  - Password requirements:
    - Minimum length of 8 characters.
    - At least 1 letter.
    - At least 1 number.
    - At least 1 special character.
  - Upon successful signup, users are redirected to the application page.

- **Sign In Page**:
  - Registered users can sign in using their email and password.
  - Sign-in form fields include email and password.

- **Application Page**:
  - Once signed in, users are greeted with a welcoming message: "Welcome to the application."

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your system.
- A code editor of your choice (e.g., Visual Studio Code).

### Installation

1. Clone the repository:

   git clone https://github.com/MuhammadTaha00/eg_assesment_auth_app_frontend.git

2. Install dependencies
    npm install 
3. Create env file see env example

4. Start the development server

    npm start or yarn start

    start using app