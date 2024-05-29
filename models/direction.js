const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Direction = new Schema(
    {
        steps: [
        {
          stepNumber: {type: Number, required: true},
          stepDetail: {type: String, required: true },
        }
      ],
        recipe: {type: mongoose.Schema.Types.ObjectId, ref: 'recipe'}

      },
      
    {timestamps: true}
    );
    
    
    
    module.exports = mongoose.model('direction', Direction)