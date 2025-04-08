require("dotenv").config();
const express = require("express");
const cors = require("cors");
const ticketRoutes = require("./src/routes/ticketRoutes");
const reportRoutes = require("./src/routes/reportRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", ticketRoutes);
app.use("/api", reportRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
