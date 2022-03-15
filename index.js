require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const PORT = process.env.PORT || 8000;

const tutorialRoutes = require("./app/routes/tutorial.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.json({ message: "ok" })
});

require("./app/routes/tutorial.routes.js")(app);

app.listen(PORT, () => {
    console.log(`MySQL REST API running at localhost:${PORT}`);
});