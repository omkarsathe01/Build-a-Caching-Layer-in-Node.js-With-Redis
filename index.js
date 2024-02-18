const express = require("express");
// populate proces.env
require("dotenv").config();
const { UserController } = require("./src/controllers/users");
// initialize an Express application
const app = express();
app.use(express.json());
// register an endpoint
app.get("/api/v1/users", UserController.getAll);
// start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
