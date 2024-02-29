'use strict'
/*
    Expressjs Routing
*/
// $ npm i
// or npm i express dotenv
require('dotenv').config(); 


const PORT=process.env?.PORT || 8000
const HOST=process.env?.HOST || "127.0.0.1"
const express=require("express")

const app=express() // express üzerinde birserver oluşturduk

app.get('/',(req,res)=>{
    // res.write("hello")
    // res.end()

    // res.write(JSON.stringify({
    //     message:"hello"
    // }))
    // res.end()
    
    // console.log('hello');
    res.send({  // tercih edilen
        "message":"hello"
    })
    // res.send('hello FS15') // birden fazla send manasız
})

app.post('/',(req,res)=>{ res.send({ "message":"POST method called" })})

app.listen(PORT,HOST,()=>console.log(`Server runned http://${HOST}:${PORT}`))