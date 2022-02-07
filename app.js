const express = require("express");
const res = require("express/lib/response");

const port = 8000;
const app = express();

const UserRoutes = require("./api/user/routes");
const RecipeRoutes = require("./api/recipe/routes");
const Recipe = require("./db/models/Recipe");
const user = require("./db/models/user");
app.use(express.json());

router.listen(8000, () => {
  console.log("the app is running on localhost 8000");
});
