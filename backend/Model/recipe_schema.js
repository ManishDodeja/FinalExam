const mongoose = require('mongoose');
const recipeSchema = mongoose.Schema({
    title:String,
    description: String,
    ingredients: String,
    instructions:String
})


const Recipes= mongoose.model('Recipes', recipeSchema)
module.exports=Recipes