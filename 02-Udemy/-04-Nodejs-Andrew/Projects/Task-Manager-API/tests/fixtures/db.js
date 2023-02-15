const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../../src/models/user");

const user1Id = new mongoose.Types.ObjectId();
const user1 = {
  _id: user1Id,
  name: "User",
  email: "user@me.io",
  password: "user1234",
  tokens: [
    {
      token: jwt.sign({ _id: user1Id }, process.env.JWT_SECRET),
    },
  ],
};

const setupDB = async () => {
  await User.deleteMany();
  await new User(user1).save();
};

module.exports = {
  user1,
  user1Id,
  setupDB,
};
