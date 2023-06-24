const mongoose = require('mongoose')
const connection = async()=>{
    const URL='mongodb://localhost:27017/RecipeApp'
    try{
        await mongoose.connect(URL)
        console.log('connected successfully')
    }catch(err){
        alert(err)
    }
}

module.exports=connection

