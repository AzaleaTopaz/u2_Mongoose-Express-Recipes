const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Cuisine = new Schema(
    {
       name: {type: String, required: true},
       origin:[{type: String, required: true}],
       decription: {type: String, required: true}
    },
    {timestamps: true}
    );
    
    
    
    module.exports = mongoose.model('cuisine', Cuisine)