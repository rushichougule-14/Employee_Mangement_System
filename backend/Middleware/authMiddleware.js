const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET ||"defaultSecret";

function authToken(req,res,next)
{
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token)
    {
        return res.status(401).json({error :"Access denied.Token is Missing"});

    }
    jwt.verify(token,JWT_SECRET,(err,decoded)=>{
        if(err)
        {
           return res.status(403).json({error:"Invalid or expired token"});
           
        }
         req.user = decoded;
         next();
    })

}

module.exports = authToken;