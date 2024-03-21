"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Personnel = require("../models/personnel.model");
const Token = require('../models/token.model')

module.exports = {
 
  // LOGIN & LOGOUT

  login: async (req, res) => {
    const { username, password } = req.body;

    if (username && password) {
      //? findOne, passwordu modeldeki set metodundaki encrypt i kullanarak db'de filtreleme yapar
      const user = await Personnel.findOne({ username, password });
      if (user) {
        /* SESSION *
        // Set Session:
        req.session = {
          id: user._id,
          password: user.password,
        };
        // Set Cookie:
        if (req.body?.rememberMe) {
          req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3; // 3 Days
        }
        /* SESSION */

        /* TOKEN */



        /* TOKEN */

        res.status(200).send({
          error: false,
          user,
        });
      } else {
        res.errorStatusCode = 401;
        throw new Error("Wrong Username or Password.");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Please entry username and password.");
    }
  },

  logout: async (req, res) => {
    // Set session to null:
    req.session = null;
    res.status(200).send({
      error: false,
      message: "Logout: Sessions Deleted.",
    });
  },
};
