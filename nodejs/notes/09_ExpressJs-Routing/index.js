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

/*
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

// app.post('/',(req,res)=>{ res.send({ "message":"POST method called" })})
// app.put('/',(req,res)=>{ res.send({ "message":"PUT method called" })})
// app.delete('/',(req,res)=>{ res.send({ "message":"DELETE method called" })})

app.all('/',(req,res)=>{res.send({ "message":"ALL method called"})})
*/
// app.get('/drive1/drive2',(req,res)=>{ res.send({ "message":"GET method called" })})

// joker characters
// app.get('/',(req,res)=>{ res.send({ "message":"GET method called" })})
// app.get('/ab(x)?12',(req,res)=>{ res.send({ message:"ab12 or abx12" })}) // only ab12 and abx12
// app.get('/ab(x)+12',(req,res)=>{ res.send({ message:"abx........x12" })}) // ab ve 12 arasına n tane x gelebilir

// app.get('/ab*',(req,res)=>{ res.send({ "message":"GET method called" })}) //sonu ne olursa olsun
// app.get('/a*b',(req,res)=>{ res.send({ "message":"GET method called" })}) // başı a sonu b ortada ne olursa olsun

// regex
//! iki / arasında regex kabul edilir '' kullanmayın
// regexr.com
// app.get(/abc$/,(req,res)=>{ res.send({ message:"start with any" })}) //başı ne olursa olsun sonu abc olacak
// app.get(/^\/abc/,(req,res)=>{ res.send({ message:"and with any" })}) // başı abc olacak sonu ne olursa olsun
// app.get(/\/*abc/,(req,res)=>{ res.send({ message:"start with any" })}) // başlangıç ne olursa olsun
// app.get(/abc/,(req,res)=>{ res.send({ message:"find abc in path" })}) // içinde abc olacak başına sonuna ne gelirse gelsin

//? url parametres
// http://127.0.0.1:8000/524/location/izmir
// app.get('/:blogId/location/:location',(req,res)=>{

//     // res.send({
//     //     params:req.params,
//     //     blogId:req.params.blogId
//     // })

//     res.send({
//         blogId:req.params.blogId,
//         url:{
//             protocol:req.protocol,
//             domain:req.hostname,
//             method:req.method,
//             url:req.url,
//             path:req.path,

//             params:req.params,
//             body:req.body,
//             query:req.query,

//             header:req.headers,

//         }
//     })
// app.get('/:userId',(req,res)=>{
// app.get('/:userId[0-9]',(req,res)=>{ 
// app.get('/:userId[\\d]+',(req,res)=>{ 
// app.get('/:userId[\\D]+',(req,res)=>{ 
// app.get('/:userId[\\w]+',(req,res)=>{
    // http://127.0.0.1:8000/57-deneme // thunder da bu şekilde send yapılır
/*    
app.get('/:userId-:userName',(req,res)=>{

    res.send({
        userId:req.params.userId,
        userName:req.params.userName,
        url:{
            protocol:req.protocol,
            domain:req.hostname,
            method:req.method,
            url:req.url,
            path:req.path,
            params:req.params,
            // body:req.body,
            query:req.query,
            header:req.headers,

        }
    })
})
*/
app.get('/',(req,res)=>{

    res.status(200).send({
        message:"tebrikler üye oldunuz"
    })
})
app.post('/',(req,res)=>{ res.status(201).send({ "message":"POST method called" })})
app.put('/',(req,res)=>{ res.status(202).send({ "message":"PUT method called" })})
app.delete('/',(req,res)=>{ res.status(202).send({ "message":"DELETE method called" })})

app.listen(PORT,HOST,()=>console.log(`Server runned http://${HOST}:${PORT}`))