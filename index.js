require("dotenv").config();
const express = require("express");
const app = express();

// MIDDLEWARE
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/places", require("./controllers/places.js"));

app.get("*", (req, res) => {
    res.status(404).send("404 Not Found");
});

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
