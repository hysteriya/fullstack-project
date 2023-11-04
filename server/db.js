const mongoose=require('mongoose');

module.exports=()=>{
    try{
        mongoose.connect(process.env.DB);
        console.log("connected to db successfully")
    }
    catch(error){
        console.log("error")
    }
}