const express = require("express");
const app = express();

const RecipeRoutes = require("./apis/Recipe/routes");
const UserRoutes = require("./apis/User/routes");
const connectDB = require("./database");

app.use(express.json());
app.use("/user", UserRoutes);
app.use("/recipe", RecipeRoutes);
connectDB();
app.listen(8080);
