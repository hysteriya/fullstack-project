const authRouter=require('express').Router();
const {User}= require('../model/user');
const bcrypt= require('bcrypt');

authRouter.post("/", async(req, res)=>{
    try {
        const user= await User.findOne({email: req.body.email});
        if (!user)
            return res.status(401).send({mesage:"Invalid email"});
        const validPass= await bcrypt.compare(
            req.body.password, user.password
        );
        if(!validPass)
            return res.status(401).send({mesage:"Incorrect password"});
        const token= user.generateAuthToken();
        res.status(200).send({data: token, message:"Logged in"})
    } catch (error) {
        res.status(500).send({message:"Login server error"});
    }
});

module.exports=authRouter;