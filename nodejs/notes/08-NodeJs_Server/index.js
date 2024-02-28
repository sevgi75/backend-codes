'use strict'
/*
   NodeJs SERVER
*/
require('dotenv').config()
// const PORT=process.env.PORT
// const HOST=process.env.HOST
// console.log(process.env)

const PORT=process.env?.PORT || 8000
const HOST=process.env?.HOST || "127.0.0.1"

// console.log("welcome");
const http=require("node:http")
// http.createServer((param1,param2)=>{ ... })
// http.createServer((request,response)=>{ ... })
// http.createServer((req,res)=>{
//     res.end('<h1> welcome to nodejs server </h1>')
// }).listen(8000,()=>console.log(`server runned : http://${HOST}:${PORT}`))
// }).listen(8000,()=>console.log("server runned : http://127.0.0.1:8000"))
// }).listen(8000,()=>console.log("server runned : http://localhost:8000"))

const app=http.createServer((req,res)=>{
    console.log(req.method);

    res.end('<h1> welcome to nodejs server </h1>')
})
app.listen(8000,()=>console.log(`server runned : http://${HOST}:${PORT}`))
