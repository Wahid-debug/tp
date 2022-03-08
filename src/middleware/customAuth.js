const customMiddleware = async(req,res,next)=>{
    try{
        const authCrential = {
            auth_key: "Tpdevrewamp@auth",
            client_service: "Tpdevrewamp@client"
        }
        const authKey = req.headers.auth_key;
        const clientService = req.headers.client_service;
        if(authKey == authCrential.auth_key && clientService == authCrential.client_service){   
            next();   
        }else{
             res.status(400).json({status:false, code:400, message: "Not authorized"})
        }   
    }catch(err){
        console.log(err, "error")
        res.status(500).json({status: 500, code:500, message: "Custom middleware error"});
    }
}


module.exports = {customMiddleware}