const express= require('express')
const {addRecipeApi,getRecipeApi, deleteRecipeApii,updateRecipeApi}= require('../Controller/RecipeController')
const router = express.Router()

// 
//api 
router.post('/add', addRecipeApi)
router.get('/', getRecipeApi)
// router.get('/:id', getRecipeApi)
router.delete('/:id', deleteRecipeApii)
router.post(':/id', updateRecipeApi)




module.exports=router;