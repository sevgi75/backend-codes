"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- *
//? Middleware functions must be has three parameters. 
//? Last parameter is for next().

// Middleware:
app.get('/',(req,res,next)=>{

    console.log('Middleware started.');

    // Go to next route:
    next()

    // console.log('Middleware 24 started.');

    // res.send({
    //     message: 'Middleware'
    // })
})

// Route-Path
app.get('/',(req,res)=>{

    console.log('Route started.');

    res.send({
        message: 'Welcome'
    })
})

/* ------------------------------------------------------- *

// Middleware:
app.get('/',(req,res,next)=>{

    if(req.query?.username == 'clarusway') {

        //? Send data by req/res:
        req.welcome = 'Welcome'
        res.username = req.query?.username

        next()

    } else {

        res.send({
            message: 'username is wrong.'
        })

    }    
})

// Route-Path
app.get('/',(req,res)=>{

    res.send({
        // message: 'Welcome'
        message: req?.welcome + ' to ' + res?.username
    })
})
/* ------------------------------------------------------- *

app.get('/', (req, res, next) => {

    req.message1 = 'middleware-1 started.'
    next()
})

app.get('/', (req, res, next) => {

    req.message2 = 'middleware-2 started.'
    next()
})

app.get('/', (req, res, next) => {

    req.message3 = 'middleware-3 started.'
    next()
})

app.get('/', (req, res, next) => {

    req.message4 = 'middleware-4 started.'
    next()
})

app.get('/', (req, res) => {
    res.send({
        message1: req.message1,
        message2: req.message2,
        message3: req.message3,
        message4: req.message4,
        message: "Finished",
    })
})

/* ------------------------------------------------------- *

const middleFunc1 = (req, res, next) => {

    req.message1 = 'middleFunc1 started.'
    next()
    // next('route')
}

const middleFunc2 = (req, res, next) => {

    req.message2 = 'middleFunc2 started.'
    next()
}

// Use middlewares:
// app.use(middleFunc1)
// app.use(middleFunc2)
//? Altarnative:
// app.use(middleFunc1, middleFunc2)
//? Altarnative:
// app.use([middleFunc1, middleFunc2]) // all paths
//? It can use URL:
// app.get('/abc', [middleFunc1, middleFunc2]) // only /abc only get
// app.use('/abc', [middleFunc1, middleFunc2]) // only /abc/* and all methods

// app.all('/*', (req, res) => {
//     res.send({
//         message1: req.message1,
//         message2: req.message2,
//         message: "Finished",
//     })
// })

//? use kullanmadanda middleware func eklenebilir(Biz use halini kullanacağız)
app.get('/*', middleFunc1, middleFunc2, (req, res) => {
    res.send({
        message1: req.message1,
        message2: req.message2,
        message: "Finished",
    })
})

// started by next('route')
app.get('/', (req, res) => {
    res.send({
        message: 'next route'
    })
})

/* ------------------------------------------------------- */
//? Move to file:

// const middleFuncs = require('./middlewares/') // in array
// app.use(middleFuncs)

const { middleFunc1, middleFunc2 } = require('./middlewares/') // in object
app.use(middleFunc1, middleFunc2)

app.get('/*', (req, res) => {
    res.send({
        message1: req.message1,
        message2: req.message2,
        message: "Finished",
    })
})


/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));