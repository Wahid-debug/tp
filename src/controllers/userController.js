const Jwt = require('jsonwebtoken');
const {jwt_secret} = require('../../config/config');
const signUp = async(req,res)=> {
    try{
        const generateToken = await Jwt.sign({payload: "checking jwt"},jwt_secret, {expiresIn: "2m"})
        res.status(200).json({ data: {token:generateToken}, message: "Public api success", code: 200,});
    }catch(err){
        console.log(err)
        res.status(500).json({ data: null, message: "Something went wrong", code:500})
    }
}

const login = async(req,res)=> {
    try{
        res.status(200).json({ data:null,  message: "Private api success", code:200});
    }catch(err){
        console.log(err)
        res.status(500).json({ data:null, message: "Something went wrong", code:500,})
    }
}



module.exports = {signUp, login};