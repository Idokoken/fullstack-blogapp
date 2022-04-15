const mongoose = require('mongoose')

const {Schema} = mongoose
const userSchema = new Schema({
	email: {type: String, required: true},
	username: {type: String, required: true},
	password: {type: String, required: true},
	 profilePix: {type: String}	
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)