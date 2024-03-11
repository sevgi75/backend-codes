"use strict"
/* ====================================================== */
/*                     BLOG API ROUTES                    */
/* ====================================================== */
const router=require("express").Router()


const { route } = require("express/lib/router")
const {BlogPost}=require("../controllers/blog.controller")

router.route('/posts').get(BlogPost.list)


module.exports=router