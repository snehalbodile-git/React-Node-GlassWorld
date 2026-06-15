const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email"],
    },
    phone: {
      type: String,
      required: true,
      match: [/^[0-9]{10}$/, "Please use a valid phone number"],
    },
    address: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "vendor", "customer","user"], // customize as needed
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

const user = mongoose.model("Users", userSchema);
module.exports = user;