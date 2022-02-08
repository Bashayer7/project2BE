<<<<<<< HEAD
const mongoose = require('mongoose');
const connectDB = async () => {
  const conn = await mongoose.connect("mongodb+srv://Ahmed:ahmed123@cluster0.8dp85.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
=======
const mongoose = require("mongoose");
const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://coded:coded@cluster0.cyf5q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
>>>>>>> 5ae1eedec2178a94701e83fd463761b9eb56d8af
  console.log(`mongo connected: ${conn.connection.host}`);
};
module.exports = connectDB;
