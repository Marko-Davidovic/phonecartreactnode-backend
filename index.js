const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const register = require("./routes/register");
const login = require("./routes/login");
const orders = require("./routes/orders");
const stripe = require("./routes/stripe");
const productsRoute = require("./routes/products");
const users = require("./routes/users");

const products = require("./products");

const app = express();

require("dotenv").config();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://phone-cart-fullstack.netlify.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());
app.use(cors());

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/stripe", stripe);
app.use("/api/products", productsRoute);
app.use("/api/users", users);
app.use("/api/orders", orders);

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

// app.use(express.static('../frontend/build'));

app.get("/products", (req, res) => {
  res.send(products);
});

const uri = process.env.DB_URI;
const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
