const User = require('../model/user')
const jwt = require('jsonwebtoken');


const signInWithGoogleUser = async (req,res) => {
	//const { token } = req.body;

	console.log('token',req.body);

	User.findOne({ email: req.body.email },(error,user) => {
		if(error) res.status(403).send({error : true, message : error.message})
		if (user) {
			console.log("user : ",user)
			res.status(200).send({error: false, message : "Sign In successfully" ,token:  createToken(user.id)});
		}else{
			res.status(404).send({error : true, message : "User not found"})
		}



	});

}

const signUpWithGoogleUser = async (req,res) => {
	//const { token } = req.body;

	console.log('token',req.body);

	User.findOne({ email: req.body.email })
		.lean()
		.exec((error,user) => {
		if(error) res.status(403).send({error : true, message : error.message})
		if (!user) {

			user =  new User({
			      email: req.body.email,
			      avatar: req.body.picture,
			      name: req.body.name,
			      googleId: req.body.googleId
			 });

			user.save();
			res.status(200).send({error: false, message : "Sign In successfully" });
		}else{
			res.status(409).send({error : true, message : "Account already existed"})
		}



	})

}

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: '30d',
  });
}


module.exports = {signUpWithGoogleUser,signInWithGoogleUser}