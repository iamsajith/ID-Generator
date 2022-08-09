const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config({ path: "./vars/.env" });
const path = require("path");
const {
  studentData,
  moderatorData,
  adminData,
  courseData,
} = require("./datamodel");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const app = new express();
app.use(cors());
app.use(express.json({ limit: "200mb" }));

app.use(express.static('dist/frontend'));

// Send Mail

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  REFRESH_TOKEN
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendMail = async (step, email, password) => {
  if (step === 0) {
    try {
      const accessToken = await oAuth2Client.getAccessToken;
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: process.env.EMAIL,
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });
      const mailOptions = {
        from: "ID Generator <process.env.EMAIL>",
        to: email,
        subject: "Reset Password",
        html: `<em>Hi👋, You have requested to reset your password. We can not simply send you your new password. You can use the PIN which is attached below to change your password.<em style='text-align: center'><h2>${password}</h2>`,
      };
      const result = await transport.sendMail(mailOptions);
      return result;
    } catch (error) {
      return error;
    }
  } else if(step==1) {
    try {
      const accessToken = await oAuth2Client.getAccessToken;
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: process.env.EMAIL,
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });
      const mailOptions = {
        from: "ID Generator <process.env.EMAIL>",
        to: email,
        subject: "Updated Password",
        html: `<em>Hi👋, Your password has been successfully updated. Please use the below as your new password.<em style='text-align: center'><h2>${password}</h2>`,
      };
      const result = await transport.sendMail(mailOptions);
      return result;
    } catch (error) {
      return error;
    }
  }
  else {
    try {
      const accessToken = await oAuth2Client.getAccessToken;
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: process.env.EMAIL,
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });
      const mailOptions = {
        from: "ID Generator <process.env.EMAIL>",
        to: email,
        subject: "Welcome to ICTAK",
        html: `<em>Hi👋,Your account has been created successfully<em><br><h4>Email : ${email}</h4> <h4>Password : ${password}</h4>`,
      };
      const result = await transport.sendMail(mailOptions);
      return result;
    } catch (error) {
      return error;
    }
  }
};
// #1 Student - Authentication

app.post("/api/student", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  studentData
    .findOne(
      { email: req.body.email.toLowerCase(), password: req.body.password },
      (err, user) => {
        if (err) {
          console.log("error is", err);
        } else {
          console.log(user);
        }
      }
    )
    .clone()
    .then((user) => {
      if (user !== null) {
        let payload = { subject: user.email + user.password };
        let token = jwt.sign(payload, "secretKey");
        res.status(200).send({ token: token, data: user._id });
      } else {
        res.send(user);
      }
    });
});

// #2 Moderator - Authentication

app.post("/api/moderator", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  moderatorData
    .findOne(
      { email: req.body.email.toLowerCase(), password: req.body.password },
      (err, user) => {
        if (err) {
          console.log("error is", err);
        } else {
          console.log(user);
        }
      }
    )
    .clone()
    .then((user) => {
      if (user !== null) {
        let payload = { subject: user.email + user.password };
        let token = jwt.sign(payload, "secretKey");
        res.status(200).send({ token, data: user._id });
      } else {
        res.send(user);
      }
    });
});

// #3 Admin - Authentication

app.post("/api/admin", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  adminData
    .findOne(
      { email: req.body.email.toLowerCase(), password: req.body.password },
      (err, user) => {
        if (err) {
          console.log("error is", err);
        } else {
          console.log(user);
        }
      }
    )
    .clone()
    .then((user) => {
      if (user !== null) {
        let payload = { subject: user.email + user.password };
        let token = jwt.sign(payload, "secretKey");
        res.status(200).send({ token, data: user._id });
      } else {
        res.send(user);
      }
    });
});

// Student PIN

app.post("/api/student/pin", (req, res) => {
  const randomPin = Math.floor(1000 + Math.random() * 9000);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  studentData
    .findOneAndUpdate({ email: req.body.email }, { $set: { pin: randomPin } })
    .then((data) => {
      if (data != null) {
        const mail = req.body.email;
        sendMail((step = 0), mail, randomPin)
          .then((result) => console.log("Send Successfully", result))
          .catch((error) => {
            console.log(error);
          });
        res.send(data);
      } else {
        res.send(data);
      }
    });
});
// Student New Password

app.post("/api/student/newpassword", (req, res) => {
  studentnew =
    Math.random().toString(36).substring(2, 5) +
    "stu" +
    Math.random().toString(36).substring(2, 6);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  pin = req.body.pin;
  studentData
    .findOneAndUpdate(
      { email: req.body.email, pin: pin },
      { $set: { password: studentnew } }
    )
    .then((data) => {
      if (data !== null) {
        const mail = req.body.email;
        sendMail((step = 1), mail, studentnew)
          .then((result) => console.log(result))
          .catch((error) => {
            console.log(error);
          });
        res.send(data);
      } else {
        res.send(data);
      }
    });
});

// Moderator PIN

app.post("/api/moderator/pin", (req, res) => {
  const randomPin = Math.floor(1000 + Math.random() * 9000);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  moderatorData
    .findOneAndUpdate({ email: req.body.email }, { $set: { pin: randomPin } })
    .then((data) => {
      if (data != null) {
        console.log(data);
        const mail = req.body.email;
        sendMail((step = 0), mail, randomPin)
          .then((result) => console.log("Send Successfully", result))
          .catch((error) => {
            console.log(error);
          });
        res.send(data);
      } else {
        res.send(data);
      }
    });
});
// Moderator New Password

app.post("/api/moderator/newpassword", (req, res) => {
  moderatornew =
    Math.random().toString(36).substring(2, 5) +
    "mod" +
    Math.random().toString(36).substring(2, 6);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  pin = req.body.pin;
  moderatorData
    .findOneAndUpdate(
      { email: req.body.email, pin: pin },
      { $set: { password: moderatornew } }
    )
    .then((data) => {
      if (data !== null) {
        const mail = req.body.email;
        sendMail((step = 1), mail, moderatornew)
          .then((result) => console.log(result))
          .catch((error) => {
            console.log(error);
          });
        res.send(data);
      } else {
        res.send(data);
      }
    });
});

// Admin PIN

app.post("/api/admin/pin", (req, res) => {
  const randomPin = Math.floor(1000 + Math.random() * 9000);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  adminData
    .findOneAndUpdate({ email: req.body.email }, { $set: { pin: randomPin } })
    .then((data) => {
      if (data != null) {
        console.log(data);
        const mail = req.body.email;
        sendMail((step = 0), mail, randomPin)
          .then((result) => console.log("Send Successfully", result))
          .catch((error) => {
            console.log(error);
          });
        res.send(data);
      } else {
        res.send(data);
      }
    });
});
// Admin New Password

app.post("/api/admin/newpassword", (req, res) => {
  adminnew =
    Math.random().toString(36).substring(2, 5) +
    "adm" +
    Math.random().toString(36).substring(2, 6);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  pin = req.body.pin;
  adminData
    .findOneAndUpdate(
      { email: req.body.email, pin: pin },
      { $set: { password: adminnew } }
    )
    .then((data) => {
      if (data !== null) {
        const mail = req.body.email;
        sendMail((step = 1), mail, adminnew)
          .then((result) => console.log(result))
          .catch((error) => {
            console.log(error);
          });
        res.send(data);
      } else {
        res.send(data);
      }
    });
});

app.post("/api/student/register", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  const d = new Date();
  dates =
    d.getFullYear() +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + d.getDate()).slice(-2);

  register = req.body.data;

  studentData.find({email:register.email}).then((data)=>{
    if(data.length!=0){
      if(data[0].status===undefined){
        studentData
    .findOneAndUpdate(
      { email: register.email },
      {
        $set: {
          name: register.name,
          phone: register.phone,
          course: register.course,
          batch: register.batch,
          image: req.body.url,
          startDate: register.startDate,
          endDate: register.endDate,
          status: "Submitted",
          Date: dates,
        },
      }
    )
    .then((data) => {
      res.send(data);
    });

    }
    else{
      res.send(undefined)
    }
  }
    else{
      res.send(null)
    }

  })

});

app.get("/api/idcard/:id", (req, res) => {
  studentData
    .findOne({ _id: req.params.id }, { password: 0, pin: 0, _id: 0 })
    .then((data) => {
      res.send(data);
    });
});

app.get("/api/moderator/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");

  id = req.params.id;
  moderatorData.findById(id).then((data) => {
    res.send(data);
  });
});
app.post("/api/moderator/student", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  console.log(req.body.course);
  data = req.body;
  studentData
    .find({ course: data.course, status: "Submitted" }, { password: 0, pin: 0 })
    .then((data) => {
      console.log(data);
      res.send(data);
    });
});

app.post("/api/moderator/accept/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  studentData
    .findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          status: "Accepted",
        },
      }
    )
    .then((data) => {
      console.log(data);
      res.send(data);
    });
});

app.post("/api/moderator/reject/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  studentData
    .findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          status: "Rejected",
        },
      }
    )
    .then((data) => {
      console.log(data);
      res.send(data);
    });
});

// Student History

app.post("/api/moderator/studentHistory", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  console.log(req.body.course);
  data = req.body;
  studentData
    .find({ course: data.course }, { password: 0, pin: 0 }).then((data) => {
      console.log(data);
      res.send(data);
    });
});
// Fetch Moderators

app.post("/api/moderator/fetchmoderator", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  moderatorData
    .find({}, { password: 0, pin: 0 }).then((data) => {
      console.log(data);
      res.send(data);
    });
});



// Add Moderator

app.post("/api/admin/moderator/add", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  moderatorData.findById(req.body._id).then((data)=>{
    console.log(data)
    if (data===null){
      const d = new Date();
      dates =
        d.getFullYear() +
        "-" +
        ("0" + (d.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + d.getDate()).slice(-2);
      moderatornew =
        Math.random().toString(36).substring(2, 5) +
        "mod" +
        Math.random().toString(36).substring(2, 6);
    
      var userCred = {
        name:req.body.name,
        phone:req.body.phone,
        course:req.body.course,
        joiningDate:dates,
        designation:req.body.designation,
        email: req.body.email,
        password: moderatornew,
      };
      var moderatordb = new moderatorData(userCred);
      moderatorData.find({email:userCred.email}).then((data)=>{
        console.log(data)
        if(data.length == 0){
          moderatordb.save().then((data) => {
            const mail = req.body.email;
            sendMail((step = 2), userCred.email, moderatornew)
              .then((result) => console.log(result))
              .catch((error) => {
                console.log(error);
              });
          
        });
        }
        res.send(data)
      }
      
      )

    }
    else{
    res.send(data)
    }
  })
 
});

// Delete Moderator

app.delete("/api/admin/moderator/:id",(req,res)=>{
  console.log(req.params.id)
  moderatorData.findByIdAndDelete(req.params.id).then((data)=>{
    res.send(data)
  })
})
// Update
app.put("/api/update", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  moderatorData.findByIdAndUpdate(
    req.body._id,
    {
      $set: {
        name:req.body.name,
        phone:req.body.phone,
        course:req.body.course,
        designation:req.body.designation,
        email: req.body.email,
      },
    },
    (err, Data) => {
      if (err) {
        res.send("Error While Updating");
      } else {
        res.send(Data);
      }
    }
  );
});

app.get('/api/data/:id',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  moderatorData.findByIdAndUpdate(req.params.id).then((data)=>{
    res.send(data)
  })
})



app.get("/api/courses",(req,res)=>{
  courseData.find().then((data)=>{
    console.log(data)
    res.send(data)
  })
})

// Course Action
app.post("/api/courseaction", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  newarray = req.body
  courseData
    .findOneAndUpdate(
      {},
      {
        $set: {
          course: newarray,
        },
      }
    )
    .then((data) => {
      console.log(data);
      res.send(data);
    });
});

// Batch Action

app.post("/api/batchaction", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  newarray = req.body
  courseData
    .findOneAndUpdate(
      {},
      {
        $set: {
          batch: newarray,
        },
      }
    )
    .then((data) => {
      console.log(data);
      res.send(data);
    });
});

app.get('/*', (req, res)=> {
  res.sendFile(path.join(__dirname + '/dist//frontend/index.html'))})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Your app is running on PORT ${PORT}`);
});
