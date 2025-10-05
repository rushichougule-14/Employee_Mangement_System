const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const userDao = require('../DAO/UserDao')
require("dotenv").config();

const UserService ={
    async register(user)
    {
        const existUser = await userDao.findByEmail(user.email);
        if(existUser)
        {
            throw new Error("Email already Exists!");
        }

        const hashPass = await bcrypt.hash(user.password,10);
        const newUser = {
            fullName:user.fullName,
            email:user.email,
            password:hashPass
        };

        return await userDao.createUser(newUser);
    },

    async login(email,password)
    {
        const user = await userDao.findByEmail(email);
        if(!user)
        {
            throw new Error("Invalid Email or Password !");
        }
        const validUser = await bcrypt.compare(password,user.password)
        if(!validUser)
        {
            throw new Error("Invalid Email or Password !");
        }

        const token = jwt.sign(
            {userId:user.userId,email:user.email,fullName:user.fullName},
            process.env.JWT_SECRET,
            {expiresIn:"15m" }
        );

        return {token};
    }
}

module.exports = UserService;