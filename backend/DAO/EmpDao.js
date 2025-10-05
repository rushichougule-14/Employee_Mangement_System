const pool = require("../Config/db");

const EmpDao = {
    //Get All the Employee
    async getAllEmployee()
    {
        const [result] = await pool.query("Select empId,email,name,position,department from employees where isActive = 1");
        return result;
    },

    // Get Employee by Empid
    async getEmpById(empid)
    {
        const [result] = await pool.query("Select empId,email,name,position,department from employees where empid = ? and isActive = 1",[empid]);
        return result;
    },

    // Creating the New Employee
    async createEmployee(employee)
    {
        const [result] = await pool.query("Insert into employees (name,email,position,department,isActive)VALUES (?,?,?,?,1)",[employee.name,employee.email,employee.position,employee.department]);
        return {empId:result.empId,...employee};

    },

    //Updating the Employee Details
    async updateEmp(emp,empid)
    {
        const [result] = await pool.query("UPDATE employees SET name = ?, email = ?, position = ?, department = ? WHERE empId = ? AND isActive = 1",[emp.name,emp.email,emp.position,emp.department,empid]);
       console.log("Update Result:", result);
       result.affectedRows > 0
    },

    async  DeleteEmp(empid)
    {
        const [result] = await pool.query("Update employees set isActive = 0 where empId = ?",[empid]);
        result.affectedRows > 0
    }

};

module.exports = EmpDao;
