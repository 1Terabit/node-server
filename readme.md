# Application Description

This application is a web server built with Express.js. It is designed to provide an API with various routes, middleware for authentication and request logging, and API documentation automatically generated through Swagger.

## Main Features

- **Express.js**: Uses Express to handle HTTP requests efficiently and with a clear structure.
- **API Documentation with Swagger**: Integrates Swagger to generate and serve an API documentation user interface, accessible at `/api-docs`. This makes it easier for developers to understand and use the API.
- **Custom Middleware**: Implements middleware for specific functions such as request logging (`logger`) and authentication (`auth`).
- **Defined Routes**: Defines specific routes for different functionalities through imported modules like `greetingApi` and `userRoutes`, organizing the application logic in a modular way.

## How to Run the Project

To start the server:

1. Make sure you have Node.js installed on your system.
2. Clone this repository and navigate to the project directory.
3. Install the dependencies with `npm install`.
4. Start the server with `npm start` or directly by running `node server.js`.
5. Access the API documentation by visiting `http://localhost:3000/api-docs` in your browser.

## Code Structure

- `app.js`: Main file that configures the server, middleware, routes, and Swagger documentation.
- `src/routes`: Directory that contains the route definition files for different parts of the API.
- `src/middleware`: Contains custom middleware like the logger and authentication.
- `auth`: Module that handles user authentication.
