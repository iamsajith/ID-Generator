const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv").config()
const path = require('path');
const { studentData, moderatorData, adminData } = require("./datamodel")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")
const { google } = require("googleapis")
const { datacatalog } = require("googleapis/build/src/apis/datacatalog");



const app = new express();
app.use(cors());
app.use(express.json({ urlencoded: true }));




// Send Mail 

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const REFRESH_TOKEN = process.env.REFRESH_TOKEN
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

const sendMail = async (step, email, password) => {
  if (step === 0) {

    try {

      const accessToken = await oAuth2Client.getAccessToken
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: process.env.EMAIL,
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken
        }
      })
      const mailOptions = {
        from: 'ID Generator <process.env.EMAIL>',
        to: email,
        subject: "Reset Password",
        html: `<em>Hi👋, You have requested to reset your password. We can not simply send you your new password. You can use the PIN which is attached below to change your password.<em style='text-align: center'><h2>${password}</h2>`
      }
      const result = await transport.sendMail(mailOptions)
      return result
    } catch (error) {
      return error
    }
  }
  else {
    try {

      const accessToken = await oAuth2Client.getAccessToken
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: process.env.EMAIL,
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken
        }
      })
      const mailOptions = {
        from: 'ID Generator <process.env.EMAIL>',
        to: email,
        subject: "Updated Password",
        html: `<em>Hi👋, Your password has been successfully updated. Please use the below as your new password.<em style='text-align: center'><h2>${password}</h2>`
      }
      const result = await transport.sendMail(mailOptions)
      return result
    } catch (error) {
      return error
    }
  }
}

// #1 Student - Authentication

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
      res.status(200).send({ token: token, data: user._id });
    }
    else {
      res.status(401).send('Wrong Credentials')
    }
  });
});

// #2 Moderator - Authentication

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
      res.status(200).send({ token, data: user._id });
    }
    else {
      res.status(401).send('Wrong Credentials')
    }
  });
});

// #3 Admin - Authentication

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
      res.status(200).send({ token, data: user._id });
    }
    else {
      res.status(401).send('Wrong Credentials')
    }
  });
});

// Student PIN

app.post("/student/pin", (req, res) => {

  const randomPin = Math.floor(1000 + Math.random() * 9000)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  studentData.findOneAndUpdate({ email: req.body.email }, { $set: { pin: randomPin } }).then(() => {
    const mail = req.body.email
    sendMail(step = 0, mail, randomPin).then((result) => console.log("Send Successfully", result))
      .catch((error) => { console.log(error) })
    res.send()
  })

})
// Student New Password

app.post("/student/newpassword", (req, res) => {
  studentnew = (Math.random().toString(36).substring(2, 5) + "stu" + Math.random().toString(36).substring(2, 6))
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  pin = req.body.pin
  studentData.findOneAndUpdate({ email: req.body.email, pin: pin }, { $set: { password: studentnew } }).then((data) => {
    if (data !== null) {
      const mail = req.body.email
      sendMail(step = 1, mail, studentnew).then((result) => console.log(result))
        .catch((error) => { console.log(error) })
      res.send()
    }
    else {
      res.status(404).send("Data not found")
    }
  })



})

// Moderator PIN

app.post("/moderator/pin", (req, res) => {

  const randomPin = Math.floor(1000 + Math.random() * 9000)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  moderatorData.findOneAndUpdate({ email: req.body.email }, { $set: { pin: randomPin } }).then(() => {
    const mail = req.body.email
    sendMail(step = 0, mail, randomPin).then((result) => console.log("Send Successfully", result))
      .catch((error) => { console.log(error) })
    res.send()
  })

})
// Moderator New Password

app.post("/moderator/newpassword", (req, res) => {
  moderatornew = (Math.random().toString(36).substring(2, 5) + "mod" + Math.random().toString(36).substring(2, 6))
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  pin = req.body.pin
  moderatorData.findOneAndUpdate({ email: req.body.email, pin: pin }, { $set: { password: moderatornew } }).then((data) => {
    if (data !== null) {
      const mail = req.body.email
      sendMail(step = 1, mail, moderatornew).then((result) => console.log(result))
        .catch((error) => { console.log(error) })
      res.send()
    }
    else {
      res.status(404).send("Data not found")
    }
  })



})

// Admin PIN

app.post("/admin/pin", (req, res) => {

  const randomPin = Math.floor(1000 + Math.random() * 9000)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  adminData.findOneAndUpdate({ email: req.body.email }, { $set: { pin: randomPin } }).then((data) => {
    console.log(data)
    const mail = req.body.email
    sendMail(step = 0, mail, randomPin).then((result) => console.log("Send Successfully", result))
      .catch((error) => { console.log(error) })
    res.send()
  })

})
// Admin New Password

app.put("/admin/newpassword", (req, res) => {
  adminnew = (Math.random().toString(36).substring(2, 5) + "adm" + Math.random().toString(36).substring(2, 6))
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  pin = req.body.pin
  adminData.findOneAndUpdate({ email: req.body.email, pin: pin }, { $set: { password: adminnew } }).then((data) => {
    console.log(pin)
    if (data !== null) {
      const mail = req.body.email
      sendMail(step = 1, mail, adminnew).then((result) => console.log(result))
        .catch((error) => { console.log(error) })
      res.send()
    }
    else {
      res.status(404).send("Data not found")
    }
  })



})

app.post('/student/register', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
 
  register = req.body

  studentData.findOneAndUpdate({ email: register.email }, {
    $set: {
      name: register.name,
      phone: register.phone,
      course:register.course,
      batch: register.batch,
      image: register.image,
      startDate: register.startDate,
      endDate: register.endDate
    }
  }).then((data) => {
    res.send()

  })

})

app.get("/idcard/:id",(req,res)=>{


  studentData.findOne({_id:req.params.id},{password:0,pin:0,_id:0,image:0}).then((data)=>{
   

res.send(data)
  })


  
})



const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Your app is running on PORT ${PORT}`)
})
