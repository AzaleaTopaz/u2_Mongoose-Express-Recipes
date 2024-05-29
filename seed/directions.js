const db = require('../db')
const Direction = require('../models/direction')
const Recipe = require('../models/recipe')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main =async () => {
    const Chilaquiles = await Recipe.find({name: 'Chilaquiles'});
    const CucumberTomatoSalad = await Recipe.find({name: 'Cucumber Tomato Salad'})
    const PadThai = await Recipe.find({name: 'Pad Thai'})
    const directions = [
        {
            steps: [
            {
              stepNumber: 1,
              stepDetail: `Place noodles in a large bowl, pour over plenty of boiling water. Soak for 5 minutes, then drain in a colander and quickly rinse under cold water. Don’t leave them sitting around for more than 5 – 10 minutes.`,
            },
            {
                stepNumber: 2,
                stepDetail: 'Mix Sauce in small bowl.',
              },
              {
                stepNumber: 3,
                stepDetail: 'Heat 2 tbsp oil in a large non stick pan (or well seasoned skillet) over high heat. Add garlic and onion, cook for 30 seconds.',
              },
              {
                stepNumber: 4,
                stepDetail: 'Add chicken and cook for 1 1/2 minutes until mostly cooked through.',
              },
              {
                stepNumber: 5,
                stepDetail: 'Push to one side of the pan, pour egg in on the other side. Scramble using the wooden spoon (add touch of extra oil if pan is too dry), then mix into chicken.',
                
              },
              {
                stepNumber: 6,
                stepDetail: 'Add bean sprouts, tofu, noodles then Sauce.',
                
              },

              {
                stepNumber: 7,
                stepDetail: 'Toss gently for about 1 1/2 minutes until Sauce is absorbed by the noodles.',
                
              },
              {
                stepNumber: 8,
                stepDetail: 'Add garlic chives and half the peanuts. Toss through quickly then remove from heat.',
                
              },
              {
                stepNumber: 9,
                stepDetail: 'Add garlic chives and half the peanuts. Toss through quickly then remove from heat.',
                
              },
              

          ],
            recipe: PadThai[0]._id
    
          },
          {
            steps: [
            {
              stepNumber: 1,
              stepDetail: 'In a medium pot, you want to heat up some oil and then sear up the tomatoes. As a result, the tomatoes will be a bit softened. Remove the tomatoes and set them aside.' ,
            },
            {
                stepNumber: 2,
                stepDetail: 'Next, you want to add the dried chiles, onion and garlic and sear those.' ,
              },
              {
                stepNumber: 3,
                stepDetail: 'Add the tomatoes back to the pot with the dried chiles and then cover them with water or chicken broth.' ,
              },
              {
                stepNumber: 4,
                stepDetail: 'During this time, the simmering of the water will rehydrate the chiles and soften up the tomatoes even more. In turn, this will make them easy to blend.' ,
              },
              {
                stepNumber: 5,
                stepDetail: 'Pour everything into the blender and puree until very smooth. Next, return it to the pot and cook it until it reaches a simmer. Turn the heat down and let it cook for a bit.' ,
              },
              {
                stepNumber: 6,
                stepDetail: 'And then, you want to fry up your eggs and get all of the garnishes ready.' ,
              },
              {
                stepNumber: 7,
                stepDetail: `Toss the sauce with the tortilla chips. And then, top the fried eggs on top and garnish with red onion, cilantro, crumbled cotija cheese and limes. As a result, you’ll have runny eggs on top. yum!`,
              },
          ],
            recipe: Chilaquiles[0]._id
    
          },
          {
            steps: [
            {
              stepNumber: 1,
              stepDetail:'Combine all ingredients in a bowl and toss well.'
            },
            {
                stepNumber: 2,
                stepDetail:'Refrigerate at least 20 minutes before serving.'
              }
          ],
            recipe: CucumberTomatoSalad[0]._id
          },

    ]
    await Direction.insertMany(directions)
    console.log('created cuisines.')

}
const run = async () => {
    await main()
    db.close()
 }
 
 run()