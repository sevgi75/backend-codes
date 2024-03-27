"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
// User Model:

const passwordEnrypt = require("../helpers/passwordEncrypt");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      trim: true,
      required: true,
      set: passwordEnrypt,
    },

    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      validate: (email) => email.includes("@") && email.includes("."),
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

// Model:
module.exports = mongoose.model("User", UserSchema);
