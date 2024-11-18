const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 5002;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    console.log("product service is running");
    return res.json({message : "product service is running"});
})

app.listen(PORT, () => {
    console.log(`Product service is running at http://localhost:${PORT}/`)
})