const User = require('../model/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const signInWithGoogleUser = async (req,res) => {
	//const { token } = req.body;

	try{
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


	}catch(error){
		res.status(500).send({error : true, message : error.message})

	}

	

}

const signUpWithGoogleUser = async (req,res) => {
	//const { token } = req.body;

	console.log('token',req.body);

	try{
		User.findOne({ email: req.body.email })
		.lean()
		.exec((error,user) => {
		if(error) res.status(403).send({error : true, message : error.message})
		if (!user) {

			user =  new User({
			      email: req.body.email,
			      picture: req.body.picture,
			      name: req.body.name,
			      googleId: req.body.googleId
			 });

			user.save();
			res.status(200).send({error: false, message : "Sign In successfully" });
		}else{
			res.status(409).send({error : true, message : "Account already existed"})
		}



	})

	}catch(error){
		res.status(500).send({error : true, message : error.message})

	}

	

}


const signUpUser = async (req,res) => {
	//const { token } = req.body;

	console.log('token',req.body);

	try{
		User.findOne({ email: req.body.email })
		.lean()
		.exec((error,user) => {
		if(error) res.status(403).send({error : true, message : error.message})
		if (!user) {
			const saltRound = 10;
			bcrypt.genSalt(saltRound,(err,salt) => {
				if(err) throw err;
				bcrypt.hash(req.body.password,salt,(erroHash,hash) => {
					if (erroHash) throw erroHash;
					user =  new User({
						name: req.body.name,
					      email: req.body.email,
					      picture: '',
					      password: hash
					      
					 });

					user
						.save()
						.then(() => {
							res.status(200).send({error: false, message : "Sign In successfully" });
						})
						.catch(err => res.status(500).send({error : true, message : err.message}))
				})
			})


			
			
		}else{
			res.status(409).send({error : true, message : "Email already existed",body: 'email'})
		}



	})

	}catch(error){
		res.status(500).send({error : true, message : error.message})

	}

	

}


const signInUser = async (req,res) => {
	const { email, password } = req.body;
	  try {
	    //Match user
	    User.findOne({ email: email }, (err, user) => {

	      if (err) res.status(403).send({error : true, message : error.message})

	      //if user is not found
	      if (!user) return res.status(404).send({error : true, message : "email does not exist",body: 'email'})
	      bcrypt.compare(password, user.password, (err, isMatch) => {
	        if (err) throw err;
	        //if the password is not match
	        if (isMatch === false) return res.status(404).send({error : true, message : "password Incorrect", body: 'password'})

	        //return into the client side user
	        return res.status(200).send({error: false,token: createToken(user.id),message: 'logged in successfully'})
	      });
	    });
	  } catch (error) {
	    return res.status(500).send({error : true,message: error.message})
	  }

}


const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: '30d',
  });
}

const getUserInfo = async (req,res) => {
	const {id} = req.params;
	
	try{
		
		User.findById(id)
		.lean()
		.exec((error,user) => {
			if(error) res.status(403).send({error : true, message : error.message})
			if (user) {
				console.log("user : ",user)
				res.status(200).send({error: false,user : user});
			}else{
				res.status(404).send({error : true, message : "User not found"})
			}


		})

	}catch(error){
		res.status(500).send({error : true, message : error.message})
	}
}


const getAllUser = async (req,res) => {
	const {currentId} = req.params;
	try{
		User.find({ _id: { $ne: currentId } }, (err, users) => {
		  if (err) {
		    res.status(403).send({error : true, message : error.message})
		  } else {
		    console.log(users);
		    res.status(200).send({error: false,users : users});
		  }
		});
		}catch(error){
			res.status(500).send({error : true, message : error.message})

		}
	}



module.exports = {signUpWithGoogleUser,signInWithGoogleUser,getUserInfo,signUpUser,signInUser,getAllUser}