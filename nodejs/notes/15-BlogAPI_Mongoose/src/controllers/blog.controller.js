"use strict"
/* ====================================================== */
/*                     BLOG API CONTROLLERS               */
/* ====================================================== */

require("express-async-errors")

const {BlogPost}=require("../models/blog.model")

// module.exports={
//     "key":"value",
//     "key2":"value",
// }
// module.exports.key="value"
// module.exports.key2="value"

module.exports.BlogPost={

    list: async(req,res)=>{
        const data=await BlogPost.find()
        res.status(200).send({
            error:false,
            data:data
        })
    }
}