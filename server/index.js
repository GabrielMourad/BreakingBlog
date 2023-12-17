// Import necessary dependencies
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./db_model/User')
const Post = require('./db_model/Post')
const server = express();
const multer = require('multer')
require("dotenv").config()
const postMiddleware = multer({ dest: 'images/' })
const fs = require('fs')

//breaking-blog-server-gabriel-mourads-projects.vercel.app

// Serve images statically
server.use('/images', express.static(__dirname + '/images'))

// Connect to MongoDB
mongoose.connect(process.env.MONGO_LINK)

// Middleware setup
server.use(cors())
server.use(express.json())

// Route for user registration
server.post('/register', async (request,response) => {
    const { username, password } = request.body
    try {
        // Create a new user in the database
        const userDoc = await User.create({
            username,
            password
        })
        response.json(userDoc);

    } catch (error) {
        response.status(400).json(error)
    }
})

// Route for user login
server.post('/login', async (request,response) => {
    const { username, password } = request.body

    try {
        // Find a user in the database based on provided credentials
        const userDoc = await User.findOne({
            username,
            password
        })
        console.log(userDoc)
        response.json(userDoc);

    } catch (error) {
        response.status(400).json(error)
    }
})

// Route for creating a new post
server.post('/post', postMiddleware.single('file'), async (request,response) => {
    const { path, originalname } = request.file
    const { title, summary, content, user } = request.body

    // Extract file extension and create a new filename
    const nameArr = originalname.split('.')
    const fileExt = nameArr[nameArr.length - 1]
    const pathWithExt = `${path}.${fileExt}`
    fs.renameSync(path, pathWithExt)

    // Create a new post in the database
    const postDoc = await Post.create({
        title,
        summary,
        content,
        cover: pathWithExt,
        user
    })

    response.json(postDoc)
})

// Route for retrieving all posts
server.get('/post', async (request, response) => {
    const allPosts = await Post.find()
    response.json(allPosts)
})

// Route for retrieving a single post by ID
server.get('/post/:id', async (request, response) => {
    const { id } = request.params
    const postDoc = await Post.findById(id)
    response.json(postDoc)
})

