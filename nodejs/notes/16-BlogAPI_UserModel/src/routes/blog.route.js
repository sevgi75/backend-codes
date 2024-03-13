"use strict"
/* ====================================================== */
/*                     BLOG API Routes               */
/* ====================================================== */
const router=require("express").Router()

const {BlogPost}=require("../controllers/blog.controller")


router.route('/posts')
    .get(BlogPost.list)
    .post(BlogPost.create)

router.route('/posts/:postId')
    .get(BlogPost.read)
    .put(BlogPost.update) // put patch aynı
    .patch(BlogPost.update) 
    .delete(BlogPost.delete)
  

module.exports=router