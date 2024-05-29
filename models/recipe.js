const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Recipe = new Schema(
    {
        name: {type: String, required: true},
        ingredients: [{type: String, required: true}],
        difficulty: {type: String, required: true},
        preparation_time: {type: String, required: true },
        cuisine: {type: mongoose.Schema.Types.ObjectId, ref: 'cuisine'}

    },

    {timestamps: true}
    );
    
    
    
    module.exports = mongoose.model('recipe', Recipe)