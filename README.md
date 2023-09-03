# Node.js TypeScript Base

This is a simple Node.js CRUD (Create, Read, Update, Delete) application built using TypeScript, Express.js, and MongoDB. It provides API endpoints for managing tasks.

## Prerequisites

- Node.js: Ensure you have Node.js installed on your machine.
- MongoDB: Make sure you have MongoDB installed and running locally or provide a connection string to a MongoDB database.

## Getting Started

1. Clone the repository:
   git clone https://github.com/your-username/nodejs-typescript-crud.git

2. Navigate to the project directory: cd nodejs-typescript-crud

3. Install dependencies: npm install
 
4. Create a .env file in the project root and configure your environment variables:
- DATABASE_URL: MongoDB connection string.
- PORT: Port on which the server will run.

5. Start the server: npm start

## Dependencies Used
- express: Fast, unopinionated, minimalist web framework for Node.js.
- mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
- cors: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- dotenv: Loads environment variables from a .env file into process.env.
- typescript: Superset of JavaScript that compiles to clean JavaScript output.

## API Endpoints
- GET /api/todos: Get all tasks.
- GET /api/todos/:id: Get a task by ID.
- POST /api/todos: Create a new task.
- PUT /api/todos/:id: Update a task by ID.
- DELETE /api/todos/:id: Delete a task by ID.


