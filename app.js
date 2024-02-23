const express = require("express");
const http = require("http");
const greetingApi = require("./src/routes/greetingApi");

const logger = require("./src/middleware/logger");
const userRoutes = require("./src/middleware/userRoutes");
const auth = require("./auth/auth");

const app = express();
const server = http.createServer(app);
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "API test",
      description: "API documentation",
      contact: {
        name: "Edwar Susarra",
      },
      servers: ["http://localhost:3000"],
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

if (process.env.NODE_ENV !== "test") {
  app.use(logger);
}

greetingApi(app);
auth(app);
app.use(userRoutes);

const startServer = () => {
  server.listen(3000, () => {
    console.log("The server is running on http://localhost:3000");
  });
};

module.exports = { app, startServer, server };
