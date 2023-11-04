const mongoose=require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required: true
    },
    dob:{
        type: Date,
        required: true
    }
});

userSchema.methods.generateAuthToken= function(){
    const token=jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn:"7d"})
    return token
};

const User= mongoose.model("User", userSchema);

module.exports = {User};
 