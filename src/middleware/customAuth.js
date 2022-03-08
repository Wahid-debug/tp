const customMiddlewareAuthKey = async(req,res,next)=>{
    try{
        const customHeader = req.headers.auth_key;
        if(!customHeader){
            res.status(400).json({status:false, message: "Custom header auth key not provided"})
        }
        const auth = customHeader.replace({auth_key: "Tpdevrewamp@auth"});
        if(!auth){
            res.status(400).json({status: false, message: "Custom auth Header not auhtorize"})
        }
        next();
    }catch(err){
        console.log(err, "error")
        res.status(500).json({status: 500, message: "Custom middleware error"});
    }
}

const customMiddlewareClineService = async(req,res,next)=>{
    try{
        const customHeader = req.headers.client_service;
        if(!customHeader){
            res.status(400).json({status:false, message: "Custom header client service not provided"})
        }
        const auth = customHeader.replace({client_service: "Tpdevrewamp@client"});
        if(!auth){
            res.status(400).json({status: false, message: "Custom client service header not auhtorize"})
        }
        next();
    }catch(err){
        console.log(err, "error")
        res.status(500).json({status: 500, message: "Custom middleware error"});
    }
}

module.exports = {customMiddlewareAuthKey, customMiddlewareClineService}