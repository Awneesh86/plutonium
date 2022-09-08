const express = require('express');

const router = express.Router();
const authorController = require('../Controller/authorController')
const blogsController = require('../Controller/blogsController')
const mid1 = require('../MiddleWare/auth')

//============== Create Author API =============================//
router.post('/authors', authorController.createAuthor)

//================== Create Author Login API =====================//
router.post('/login', authorController.loginAuthor)

//================== Create Blogs API ============================//
router.post('/blogs', mid1.authentication, blogsController.createBlogs)

//================= Get All Blogs API =============================//
router.get('/blogs', mid1.authentication, blogsController.getAllBlogs)

//================== Put Blogs API Using BlogID =====================//
router.put('/blogs/:blogId', mid1.authentication, mid1.authorization, blogsController.updateBlog)

//==================== Delete Blogs By Path Using BlogID API ============//
router.delete('/blogs/:blogId', mid1.authentication, mid1.authorization, blogsController.deleteBlog)

//=================== Deleted Blogs By Using Query Params API =============//
router.delete('/blogs', blogsController.deleteByKeys)




module.exports = router;
