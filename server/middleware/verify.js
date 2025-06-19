import jwt from 'jsonwebtoken'

const verifyToken = (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({error:"No Token Provided"});
    }
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded) =>{
        if(err){
            return res.status(403).json({error: "Invalid or expired token"})
        }
        req.userId = decoded.userId;
        next();
    })
};

export {verifyToken}