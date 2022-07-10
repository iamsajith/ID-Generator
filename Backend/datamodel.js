const mongoose = require("mongoose")
const DB = "mongodb+srv://sajithjayaram:mylibraryapp@cluster0.2pltx.mongodb.net/idGenerator?retryWrites=true&w=majority"
mongoose.connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
 console.log("Database Connection Successful")
}).catch((err)=>{
 console.log(err)
})
const schema = mongoose.Schema

const studentSchema = new schema({
 email : String,
 password : String,
},{
 versionKey: false
})

const moderatorSchema = new schema({
 email : String,
 password : String,
},{
 versionKey: false
})

const adminSchema = new schema({
 email : String,
 password : String,
},{
 versionKey: false
})
const studentData = mongoose.model('students',studentSchema)
const moderatorData = mongoose.model('moderators',moderatorSchema)
const adminData = mongoose.model('admins',adminSchema)

module.exports = studentData
module.exports = moderatorData
module.exports = adminData