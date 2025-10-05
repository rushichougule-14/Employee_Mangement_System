const userService = require("../Services/UserService")
const UserController={
    async register(req,res)
    {
        try
        {
            const user = await userService.register(req.body);
            res.status(201).json({message:"User Registered Successfully !",user});
        }
        catch(err)
        {
            res.status(400).json({error:err.message})        
        }   
    },

    async login(req,res)
    {
        try
        {
            const {email,password}=req.body
            const result = await userService.login(email,password);
            res.json(result);
        }
        catch(err)
        {
            res.status(401).json({error:err.message});
        }
    }
}
 
module.exports= UserController;