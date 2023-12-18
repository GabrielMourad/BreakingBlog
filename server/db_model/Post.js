// Import the Mongoose library
const mongoose = require('mongoose')

// Define the schema for the Post entity
const PostSchema = new mongoose.Schema({
    // Define fields for the Post entity
    title: String,
    summary: String,
    content: String,
    user: String,
}, {
    // Add timestamps for createdAt and updatedAt
    timestamps: true
})

// Create a Mongoose model for the Post entity
const PostModel = mongoose.model('Post', PostSchema)

// Export the Post model for use in other files
module.exports = PostModel;
