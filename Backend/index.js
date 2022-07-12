const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv").config()
const path = require('path');
const {studentData,moderatorData,adminData} = require("./datamodel")
const jwt = require("jsonwebtoken")



const app = new express();
app.use(cors());
app.use(express.json({ urlencoded: true }));



// Authentication -All

// #1 Student

app.post("/student", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  studentData.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
    if (err) {
      console.log("error is", err)
    }
    else {
      console.log(user)
    }
  }).clone().then((user) => {
    if (user !== null) {
      let payload = { subject: user.email + user.password };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({token: token, data:user._id });
    }
    else {
      res.status(401).send('Wrong Credentials')
    }
  });
});

// #2 Moderator

app.post("/moderator", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  moderatorData.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
    if (err) {
      console.log("error is", err)
    }
    else {
      console.log(user)
    }
  }).clone().then((user) => {
    if (user !== null) {
      let payload = { subject: user.email + user.password };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token, data:user._id });
    }
    else {
      res.status(401).send('Wrong Credentials')
    }
  });
});

// #3 Admin

app.post("/admin", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  adminData.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
    if (err) {
      console.log("error is", err)
    }
    else {
      console.log(user)
    }
  }).clone().then((user) => {
    if (user !== null) {
      let payload = { subject: user.email + user.password };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token, data:user._id });
    }
    else {
      res.status(401).send('Wrong Credentials')
    }
  });
});

// Student New Password

app.post("/student/newpassword",(req,res)=>{
  studentnew = (Math.random().toString(36).substring(2, 5)+"stu"+Math.random().toString(36).substring(2, 6))
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");

  studentData.findOneAndUpdate({email:req.body.email},{$set:{password:studentnew}}).then(()=>{
    console.log("Success")
    res.send()
  })

})

// Moderator New Password

app.post("/moderator/newpassword",(req,res)=>{
  moderatornew = (Math.random().toString(36).substring(2, 5)+"mod"+Math.random().toString(36).substring(2, 6))
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");

  moderatorData.findOneAndUpdate({email:req.body.email},{$set:{password:moderatornew}}).then(()=>{
    console.log("Success")
    res.send()
  })



})

// Admin New Password

app.post("/admin/newpassword",(req,res)=>{
  adminnew = (Math.random().toString(36).substring(2, 5)+"adm"+Math.random().toString(36).substring(2, 6))
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");

  adminData.findOneAndUpdate({email:req.body.email},{$set:{password:adminnew}}).then((data)=>{
    console.log("Success")
    res.send()
  })

})



const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Your app is running on PORT ${PORT}`)
})