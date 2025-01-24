import express from "express";
import postRouter from './post.js'
import userRouter from './user.js'
const router  = express.Router()
// console.log('first')
/**
 * @swagger
 * /users:
 *  get:
 *  summery: create a new post  
 *  description: Get all users
 *  responses:
 *     200:
 *      message: sucess
 */
router.use('/user',userRouter)
router.use('/post',postRouter)
export default router
