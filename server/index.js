require('dotenv').config();
const express= require('express');
const app= express();
const cors=require("cors");
const connection=require('./db');
const userRoute= require('./routes/user');
const authRoute= require('./routes/auth');

//database
connection();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/signup", userRoute);
app.use("/login", authRoute);

const port = process.env.PORT || 8080;
app.listen(port, ()=>console.log(`server listening on ${port}`))