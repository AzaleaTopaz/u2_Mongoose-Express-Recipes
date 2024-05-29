
const db = require('../db')
const Cuisine = require('../models/cuisine')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
        const cuisines = [

        {
            name: 'Mediterranean',
            origin: ['Europe', 'Africa', 'Middle East'],
            decription: `The concept of Mediterranean cuisine has its roots in an area near the Mediterranean Sea that grows the olive tree in abundance. Here, the most well-recognized and popular ingredient in Mediterranean cuisine, olive oil, is produced, distributed, and even exported worldwide for use in traditional Mediterranean dishes.`
         },
         {
            name: 'Mexican',
            origin: ['Mexico'],
            decription: `Mexican cuisine consists of the cooking cuisines and traditions of the modern country of Mexico. Its earliest roots lie in Mesoamerican cuisine.`
         },
         {
            name: 'Thai',
            origin: ['Thailand'],
            decription: `Thai cuisine is the national cuisine of Thailand. Thai cooking places emphasis on lightly prepared dishes with aromatics and spicy heat.`
         },
    ]

    await Cuisine.insertMany(cuisines)
    console.log('created cuisines.')
}

const run = async () => {
   await main()
   db.close()
}

run()