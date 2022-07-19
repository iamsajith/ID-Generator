const mongoose = require("mongoose")
const DB = process.env.MONGODB_URI
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
 console.log("Database Connection Successful")
}).catch((err) => {
 console.log(err)
})
const schema = mongoose.Schema

const studentSchema = new schema({
 email: String,
 password: String,
 pin: Number,
 name: String,
 email: String,
 phone: String,
 course:String,
 batch: String,
 image: String,
 qrcode:String,
 startDate: String,
 endDate: String

}, {
 versionKey: false
})

const moderatorSchema = new schema({
 email: String,
 password: String,
 pin: Number,
}, {
 versionKey: false
})

const adminSchema = new schema({
 email: String,
 password: String,
 pin: Number,
}, {
 versionKey: false
})
const studentData = new mongoose.model('student', studentSchema, 'students')
const moderatorData = new mongoose.model('moderators', moderatorSchema)
const adminData = new mongoose.model('admins', adminSchema)

module.exports = { studentData, moderatorData, adminData }