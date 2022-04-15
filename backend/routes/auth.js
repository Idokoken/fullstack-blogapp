const express = require('express')
const User = require('../models/userModel')
const bcrypt = require('bcryptjs');

const auth = express.Router()

auth.get('/register', (req, res) => {
	res.json({msg: 'register'})	
})

auth.post('/register', async(req, res) => {
	const {email, username, password} = req.body
	try{
		const salt = await bcrypt.genSaltSync(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		
		let newUser = new User({email, username, password: hashedPassword})
		let user = await newUser.save()
		res.status(200).json(user)
		console.log(user)
	}catch(err) {
		res.status(500).json(err)
		console.log(err)
	}
})


auth.route('/login')
 .get((req, res) => {
 	 res.json({msg: 'login'})
 })
 .post( async(req, res) => {
 	const {email, password} = req.body
 	try{
 		const user = await User.findOne({email})
 		!user && res.status(400).json('invalid cridentials')
 		
 		const validated = await bcrypt.compare(password, user.password)
 !validated && res.status(400).json('invalid cridentials')
 //const {password, ...others} = user._doc
 res.status(200).json(user)
 	} catch(err){
 		res.status(500).json({error: err})
 	}
 })




module.exports = auth