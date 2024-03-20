"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// /auth:
router.use('/auth', require('./auth.router'))

// /token:
router.use('/tokens', require('./token.router'))

// /department:
router.use('/departments', require('./department.router'))
// /personnel:
router.use('/personnels', require('./personnel.router'))


module.exports = router
