
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        unique: true,
        required: true,
        
      },
      gender: {
        type: String,
        required: true,
      },
      ipAddress: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  const User = mongoose.model("infos", userSchema);

  module.exports = User;