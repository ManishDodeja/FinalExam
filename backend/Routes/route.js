const express= require('express')
const {addRecipeApi,getRecipeApi, deleteRecipeApii}= require('../Controller/RecipeController')
const router = express.Router()

// , editRecipeApi
//api 
router.post('/add', addRecipeApi)
router.get('/', getRecipeApi)
router.delete('/:id', deleteRecipeApii)
// router.post(':/id', editRecipeApi)




module.exports=router;