"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- *
app.get('/',(req,res)=>{
    throw new Error('Error Message')
})

app.get('/user/:id', (req, res, next) => {

    const id = req.params?.id || 0

    try {
        if(isNaN(id)) {

            throw new Error('ID is not a number')
    
        }else{
    
            res.send({
                message: 'OK',
                id
            })
        }
    }catch(err){

        // next içinde bir hata objesi gönderirsek, errorHandler yakalar.
        next(err)

        // res.send({
        //     error: true,
        //     message: err.message
        // })

    }

    
})
/* ------------------------------------------------------- */

app.get('/*', (req, res, next) => {

    res.errorStatusCode = 404

    throw new Error('There is an Error Message', { cause: 'No reason :'})
})

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
//* ERROR HANDLER

//? errorHandler is middleware and has must be four parametters. (error, request, response, next)
const errorHandler = (err, req, res, next) => {

    // console.log(err)
    console.log('errorHandler started.');

    const errorStatusCode = res?.errorStatusCode || 500

    res.status(errorStatusCode).send({
        error: true,
        message: err.message,
        cause: err.cause,
        stack: err.stack,
    })

}
//? for run errorHandler call in use.
//? It must be at last middleware.
app.use(errorHandler)

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));