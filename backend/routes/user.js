const express = require('express')
const User = require('../models/userModel')
const Post = require('../models/postModel')
const bcrypt = require('bcryptjs');

const userRouter = express()

userRouter.get('/:id', async(req, res) => {
	try{
		let user = await User.findById(req.params.id)
		const {password, ...others} = user._doc
		res.status(200).json(others)
	}catch(err){
		res.status(500).json(err)
	}
})

userRouter.put('/:id', async(req, res) => {
	if(req.body.userId === req.params.id) {
		if(req.body.password) {
			const salt = await bcrypt.genSalt(10);
req.body.password = await bcrypt.hash(req.body.password, salt);
		}
		try{
			const updateUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body }, {new: true})
			res.status(200).json(updateUser)
		}catch(err) {
			res.status(500).json()
		}
	} else{
		res.status(401).json('you can only update your account')
	}
})
//delete call
userRouter.delete('/:id', async(req, res) => {
	if(req.body.userId === req.params.id) {
		try{
			let user = await User.findById(req.params.id)
			try{
				await Post.deleteMany({username: user.username})
			await User.findByIdAndDelete(req.params.id)
			res.status(200).json('user deleted')
		}catch(err) {
			res.status(500).json(err)
		}
		} catch(err) {
			res.status(401).json('user not found')
		}
	} else{
		res.status(401).json('you can only delete your account')
	}
})


/*userRouter.route('/:id')
 .get(async(req, res, next) => {
 	try{
 		let user = await User.findById(req.params.id)
 		req.user = user
 		next()
 	} catch(err) {
 		res.status(500).json(err)
 	} 	 	
 })
 .get((req, res) => {
 	 let user = req.user
 	 res.status(200).json(user)
 })
 .put(async(req, res) => {
 	   try{
 	   	
const salt = await bcrypt.genSalt(10);
var hashedPassword = bcrypt.hash(req.body.password, salt);

 	   	let user = req.user
 	   	user.email = req.body.email
 	   	user.username = req.body.username
 	   	user.password = hashedPassword
 	   	const updatedUser = await user.save()
 	    res.status(200).json(updatedUser)
 	    console.log(updatedUser)
 	   } catch(err){
 	   	res.status(500).json(err)
 	   }
 })
 .delete((req, res) => {
 	let user = req.user
 	user.remove()
 })
*/

module.exports = userRouter