const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db.js");
const app = express();
const UserModel = require("./models/User.js");

app.use(express.json())
app.use(cors())

connectDB().then(() => {
  app.listen(3001, () => {
    console.log('Server is running on port 3000');
  });
});

app.post('./login', (req,res) =>{
  const {email, password} = req.body
  UserModel.findOne({email : email})
  .then(user =>{
    if(user){
      if(user.password === password){
        res.json("Success")
      }else{
        res.json("Incorrect user credential")
      }
    }else{
      res.json("No record existed")
    }
  })
})

app.post('./signup', (req,res) =>{
  UserModel.create(req.body)
  .then(User => res.json(User))
  .catch(err => res.json(err))
})


