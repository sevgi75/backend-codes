"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json())

// Catch async-errors:
require('express-async-errors')

// app.all('/', (req, res) => { //Allow all methods. all -> URL=/ - use -> URL=/*
//     res.send('WELCOME TO TODO API')
// })

/* ------------------------------------------------------- */
// MODEL

const { Sequelize, DataTypes } = require('sequelize')
// sequelize instant oluştur
const sequelize = new Sequelize('sqlite:./db.sqlite3')

// define methodu sequelize modeli oluştur:
// her bir model veritabanında bir tabloya denk gelir
// sequelize.define('tableName',{modelDetails})

const Todo = sequelize.define('todos', {

    // ilk sutun olarak id sutunu sequelize tarafından otomatik olarak oluşturulur/yönetilir.
    // id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false, // default: true
    //     unique: true,  // default: false
    //     comment: 'description',
    //     primaryKey: true,
    //     autoIncrement: true,
    //     field: 'custom_name',
    //     defaultValue: 'default', // default: null
    // }
    title: {
        type:DataTypes.STRING,
        allowNull: false
    },
    description: DataTypes.TEXT, // ShortHand

    priority: {
        type: DataTypes.TINYINT,
        allowNull: false,
        default: 0
    },

    isDone: {
        type:DataTypes.BOOLEAN,
        allowNull: false,
        default: false
    }

})
 // Syncronization
 // Model bilgilerini db  ye uygula
 //  sequelize.sync()  // CREATE TABLE
 // sequelize.sync({ force: true }) // DROP TABLE & CREATE TABLE
 // sequelize.sync({ alter: true }) // TO BACKUP & DROP TABLE & CREATE TABLE & FROM BACKUP

 // Connect to db:
 sequelize.authenticate()
    .then(() => console.log('* DB Connected *'))
    .catch(() => console.log('* DB Not Connected *'))

/* ------------------------------------------------------- */
// ROUTERS:

const router = express.Router()

router.post('/', async(req, res) => {
    const receivedData = req.body

    const data = await Todo.create({
        title: receivedData.title,
        description: receivedData.description,
        priority: receivedData.priority,
        isDone: receivedData.isDone
    })

    console.log(data);
})


app.use(router)

/* ------------------------------------------------------- */

const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log('errorHandler worked.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));