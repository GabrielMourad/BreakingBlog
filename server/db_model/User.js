// Import the Mongoose library
const mongoose = require('mongoose')

// Define the schema for the User entity
const UserSchema = new mongoose.Schema({
    // Define the username field with specified attributes
    username: {
        type: String,
        required: true, // Username is required
        min: 1, // Minimum length for username
        unique: true // Username must be unique
    },
    // Define the password field with specified attributes
    password: {
        type: String,
        required: true // Password is required
    }
})

// Create a Mongoose model for the User entity
const UserModel = mongoose.model('User', UserSchema)

// Export the User model for use in other files
module.exports = UserModel;
