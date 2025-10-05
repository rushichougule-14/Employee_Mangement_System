const EmpDao = require("../DAO/EmpDao");

const empService = {
    //Get all the Employee
    async getAllEmployee()
    {
        return await EmpDao.getAllEmployee();

    },
    //Get the EmployeeBy Empid
    async getEmpById(empid)
    {
        const employee =  await EmpDao.getEmpById(empid);
        if(employee.length === 0) {throw new Error("Employee Not Found !");}
        return employee;

    },
    async createEmployee(emp)
    {
        if(!emp.name || !emp.email)
        {
            throw new Error("Name and Email are required!");

        }
         
        return await EmpDao.createEmployee(emp);
         
    },  

    async updateEmployee(emp,empid)
    {
        const empUpdate = await EmpDao.getEmpById(empid);
        if(!empUpdate || empUpdate.length === 0)
        {
            throw new Error("Employee Not Found!");

        }
        return await EmpDao.updateEmp(emp,empid);
    },

    async DeleteEmployee(empid)
    {
        const emp = await EmpDao.getEmpById(empid);
        if(!emp || emp.length === 0)
        {
            throw new Error("Employee Not Found!");

        }
        return await EmpDao.DeleteEmp(empid);
    },
};

module.exports = empService;