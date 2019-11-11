/**
 * API
 */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Init express
const app = express();

// Configs and middlewares
app.use(cors());
app.use(bodyParser.json());

// Listen express
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`
    API is running on ${PORT} port.
    Address: http://localhost:${PORT}
  `);
});
