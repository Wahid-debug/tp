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
             res.status(400).json({ data:null, message: "Unauthorized", code:400})
        }   
    }catch(err){
        console.log(err, "error")
        res.status(500).json({ data:null, message: "Custom middleware error", code:500});
    }
}


module.exports = {customMiddleware}