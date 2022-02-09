const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    password: { type: String, required: true },
    email: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
