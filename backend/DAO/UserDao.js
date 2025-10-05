const pool = require("../Config/db");
const UserDao ={
    async createUser(user)
    {
        const [result] = await pool.query(
            "Insert into users(fullName,email,password) VALUES (?,?,?)",[user.fullName,user.email,user.password]
        );
        return {id:result.insertId,...user};
    },
    
    async findByEmail(email) {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
  },
}

module.exports = UserDao;