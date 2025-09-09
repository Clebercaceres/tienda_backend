const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { sequelize } = require("./src/database");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
}).catch(err => console.log("Error DB:", err));