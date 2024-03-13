"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG API 
------------------------------------------------------- */

const mongoose = require('mongoose')

// Schema
const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        unique: true,
        // required: true,
        required: [true, 'Email must be required.'],
        // validate: (email) => { return true },
        // validate: [
        //     (email) => {
        //         if (email.includes('@') && email.includes('.')) {
        //             return true
        //         }
        //         return false
        //     },
        //     'Email type is incorrect'
        // ],
        validate: [
            (email) => (email.includes('@') && email.includes('.')),
            'Email type is incorrect'
        ]
    },

    password: {
        type: String,
        trim: true,
        required: true,
        // set: (password) => { return password + '123' },
        // set: function (password) { return password + '123' },
        // set: (password) => passwordEncrypt(password)
        // set: passwordEncrypt
    },

    firstName: String,

    lastName: String,


}, {
    collection: 'user',
    timestamps: true
})

// module.exports = {
//     User:mongoose.model('User', UserSchema)
// }

module.exports = mongoose.model('User', UserSchema)