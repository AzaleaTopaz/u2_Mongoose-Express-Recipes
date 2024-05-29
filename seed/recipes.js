const db =require('../db');
const Cuisine = require('../models/cuisine');
const Recipe = require('../models/recipe');


db.on('error', console.error.bind(console, 'MongoDB connection error'));

const main =async () =>{
    const Mediterranean = await Cuisine.find({name: 'Mediterranean'});
    const Mexican = await Cuisine.find({name: 'Mexican'});
    const Thai = await Cuisine.find({name: 'Thai'});

const recipes = [
    {
        name: 'Chilaquiles',
        ingredients: ['tortillas', 'eggs', 'roma tomatoes', 'white onion', 'garlic cloves', 'dried guajillo chiles' ],
        difficulty: 'easy',
        preparation_time: '15 mins',
        cuisine: Mexican[0]._id

    },
    {
        name: 'Pad Thai',
        ingredients: ['Pad Thai dried rice sticks', 'tamarind puree', 'brown sugar', 'fish sauce', 'oyster sauce', 'vegetable oil', 'onion', 'chicken breast', 'eggs', '...' ],
        difficulty: 'medium',
        preparation_time: '20 mins',
        cuisine: Thai[0]._id

    },
    {
        name: 'Cucumber Tomato Salad',
        ingredients: ['cucumber', 'tomato', 'red onion', 'parsley', 'olive oil', 'red wine vinegar', 'salt', 'pepper' ],
        difficulty: 'easy',
        preparation_time: '10 mins',
        cuisine: Mediterranean[0]._id

    },
]

    await Recipe.insertMany(recipes)
    console.log('created recipes.')
}

const run = async () => {
    await main()
    db.close()
}

run()