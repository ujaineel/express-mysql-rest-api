require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const morgan = require("morgan");
const PORT = process.env.PORT || 8000;

const tutorialRoutes = require("./app/routes/tutorial.routes");
const res = require("express/lib/response");

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.json({ message: "ok" })
});

require("./app/routes/tutorial.routes.js")(app);

app.get('*', (req, res) => {
    res.json({ message: "Error. Where are you heading ?"})
});

app.listen(PORT, () => {
    console.log(`MySQL REST API running at localhost:${PORT}`);
});