const express = require("express");
const app = express();
require('dotenv').config({ path: './config/.env' });
const cors = require("cors");
const PORT = process.env.PORT || 5002;
const connectDB = require('./config/connection');
const routes = require("./routes/product.routes");

connectDB();
app.use(express.json());
app.use(cors());

app.use("/api/product", routes);

app.get("/", (req, res) => {
    console.log("product service is running");
    return res.json({message : "product service is running"});
})

app.listen(PORT, () => {
    console.log(`Product service is running at http://localhost:${PORT}/`)
})