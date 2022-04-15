const mongoose = require('mongoose')

const {Schema} = mongoose
const postSchema = new Schema({
	email: {title: String	},
	description: {type: String, required: true},
	photo: {type: String},
	username: {type: String, required: true},
	categories: {	type: Array, required: false}	
}, {timestamps: true})

module.exports = mongoose.model('Post', postSchema)