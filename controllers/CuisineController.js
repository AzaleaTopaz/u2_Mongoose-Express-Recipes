const Cuisine = require('../models/cuisine');

const getAllCuisines = async (req, res) => {
    try {
        const cuisines = await Cuisine.find()
        res.json(cuisines)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllCuisines
}