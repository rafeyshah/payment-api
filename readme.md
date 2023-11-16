# Payment API Learning Project

:wave: Welcome to my Node.js and Express API learning project! In this project, I've built a comprehensive API with various features and best practices. Here's a summary of what you'll find in this project:

- Split this project: https://github.com/rafeyshah/node-express-api-learning-project
- Created Relationship between User, Groups, Work and Workers

## Features

:clipboard: **CRUD Operations**: The API provides CRUD (Create, Read, Update, Delete) functionality for various resources, including Work, Group, Workers, User, and Entity.

:closed_lock_with_key: **Authentication & Authorization**: Implemented a secure authentication system with login and signup functionality. Users are authenticated and authorized to perform specific actions.

:lock: **Password Hashing**: Passwords are securely hashed using the Bcrypt library, ensuring user data protection.

:boom: **Validation with Joi**: Utilized the Joi library for input validation to ensure data integrity and security.

:link: **Relationships Between Entities**: Established relationships and associations between different entities in the database.

:arrows_counterclockwise: **Async/Await**: Refactored callback-based and promise-based code to use async/await for better code readability and maintainability.

:tada: **Aggregation**: Aggregation Group is used to fetch countries in Entity Collection 

:key: **Environment Setup**: Utilized environment variables to configure the application, following best practices to keep sensitive data secure.

## Prerequisites

Before you get started, ensure you have the following installed:

- Node.js and npm
- Database (e.g., MongoDB)
- Any necessary dependencies mentioned in package.json

## Getting Started

1. Clone this repository.
2. Install dependencies: `npm install`.
3. Set up your environment variables as per the .env.example file.
4. Run the application: `npm start`.

