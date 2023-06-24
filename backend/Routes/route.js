const express= require('express')
const {addRecipeApi,getRecipeApi}= require('../Controller/RecipeController')
const router = express.Router()

// , deleteRecipeApii, editRecipeApi
//api 
router.post('/add', addRecipeApi)
// router.get('/', getRecipeApi)
// router.delete('/:id', deleteRecipeApii)
// router.post(':/id', editRecipeApi)




module.exports=router;