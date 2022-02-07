const express = require('express');
const cors = require('cors');
const connectDb = require('./database');
const categoryRoutes = require('./apis/Category/routes');
const ingredientRoutes = require('./apis/Ingredient/routes')
const recipeRoutes = require('./apis/Category/routes')
const userRoutes = require('./apis/User/routes')
const passport = require('passport');
const app = express();
const { localStrategy, jwtStrtegy } = require("./middleware/passport")


app.use(cors());
app.use(express.json());
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrtegy)




app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
  });
});

connectDb();
app.listen(process.env.PORT || 8000);