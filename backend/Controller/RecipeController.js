const Recipes = require('../Model/recipe_schema')
module.exports = {
    addRecipeApi: async (req, res) => {
        try {
            const newRecipe = new Recipes(req.body);

            const savedRecipe = await newRecipe.save();

            // Send a response to the client indicating success
            res.json({ success: true, recipe: savedRecipe });
        } catch (err) {
            // Handle any errors that occur during the process
            console.error('Error while adding recipe:', err);
            res.status(500).json({ success: false, error: 'Failed to add recipe' });
        }
    },

    getRecipeApi: async (req, res) => {
        try {
            // const usersList = await Users.find().select('-_id');
            const recipesList = await Recipes.find();
            res.status(200).json(recipesList)
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    },

    deleteRecipeApii: async (req, res) => {
        try {
            await Recipes.deleteOne({ _id: req.params.id })
            // res.status(200).json()
        } catch (err) {
            res.status(409).json({ message: err.message })
        }
    },

    updateRecipeApi: async (req, res) => {
        let newRecipe = req.body
        const editRecipe = new Recipes(newRecipe)

        try {
            await Recipes.updateOne({ _id: req.params.id }, editRecipe)
            response.status(201).json(editRecipe)
        } catch (err) {
            res.status(409).json({ message: err.message })
        }

    }
}