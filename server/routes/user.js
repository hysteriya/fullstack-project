const userRouter=require('express').Router();
const {User}= require("../model/user");
const bcrypt= require("bcrypt");

userRouter.post("/", async (req, res)=>{
    try{
        const reqemail=req.body.email;
        const user= await User.findOne({email: reqemail});
        if (user)
            return res.status(409).send({message: "User already exists"});

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPass= await bcrypt.hash(req.body.password, salt);

        await new User({...req.body, password:hashPass}).save();//spread op
        res.status(201).send({message:'User reated successfully'});

    }
    catch(error){
        res.status(500).send({message:"Internal server error"});
        console.log(error);
    }
});
module.exports=userRouter;
