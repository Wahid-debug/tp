const Jwt = require('jsonwebtoken');

const signUp = async(req,res)=> {
    try{
        const generateToken = await Jwt.sign({payload: "checking jwt"}, "secrettkeyjwt", {expiresIn: "2m"})
        res.status(200).json({status:true, data: generateToken, message: "Public api success"});
    }catch(err){
        console.log(err)
        res.status(500).json({status: false, message: "Something went wrong"})
    }
}

const login = async(req,res)=> {
    try{
        res.status(200).json({status:true,  message: "Private api success"});
    }catch(err){
        console.log(err)
        res.status(500).json({status: false, message: "Something went wrong"})
    }
}



module.exports = {signUp, login};