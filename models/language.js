// require mongoose:
const mongoose = require('mongoose') //import the Mongoose library, which is a tool for working with MongoDB databases in Node.js
const { Schema } = mongoose //use destructuring to import the Schema class from the Mongoose library.

// schema:
//define a new Mongoose schema called 'languageSchema' with four fields
const languageSchema = new Schema ({ 
    name: { type: String, required: true },
    greeting: String,
    pangram: String,
    filler: String
})

// model and export:
//create a new Mongoose model called 'Language', based on the 'languageSchema' and export it to be used in other parts of the application.
const Language = mongoose.model('Language', languageSchema) 
module.exports = Language

//This is a Node.js module that exports a Mongoose model called "Language"