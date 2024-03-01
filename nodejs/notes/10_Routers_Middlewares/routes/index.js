"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

// express.Router()
// const express=require('express') 
// const router = express.Router()
//? üstteki iki satırı tek satırda altta yazıyorum

const router = require('express').Router()

// router.get('/', (req, res) => res.send({ message: "Home Area" }))
// router.get('/about', (req, res) => res.send({ message: "About Area" }))
// router.get('/user/:id', (req, res) => res.send({ message: "User Area" }))

//? router.route()
// bu yöntemle tek bir url e birden fazla method gönderebiliyoruz
router.route('/')
    .get((req, res) => res.send({ message: "get" }))
    .post((req, res) => res.send({ message: "post" }))
    .put((req, res) => res.send({ message: "put" }))
    .delete((req, res) => res.send({ message: "delete" }))

module.exports = router