//const { getEmpById } = require("../DAO/EmpDao");
const empService = require("../Services/EmpService");

const EmpController = {
    async getAllEmp(req, res)
    {
        try
        {
            const emp = await empService.getAllEmployee();
              res.status(200).json(emp); 
        }
        catch(err)
        {
            res.status(500).json({error:err.message});
        }
    },

    async getEmpById(req,res)
    {
        try
        {
            const emp = await empService.getEmpById(req.params.empId);
            res.status(200).json(emp);
        }
        catch(err)
        {
            res.status(400).json({Error:err.message});
        }
    },

    async createEmployee(req,res)
    {
        try
        {
            const employee = await empService.createEmployee(req.body);
            res.status(201).json("Employee Added Successfully ");
        }
        catch(err)
        {
            res.status(400).json({error:err});
        }
    },

    async UpdateEmployee(req,res)
    {
        try
        {
            const emp = await empService.updateEmployee(req.body,req.params.empId)
            res.status(200).json({message:"Employee Updated Successfully",updateId:req.params.empId});

        }
        catch(err)
        {
            res.status(400).json({error:err.message});
        }
    },

    async DeleteEmp(req,res)
    {
        try
        {
            const emp = await empService.DeleteEmployee(req.params.empId)
            res.status(200).json({message:"Employee Deleted Successfully ",
                deletedId: req.params.empId});
        }
        catch(err)
        {
            res.status(400).json({error:err.message});
        }
    }
}

module.exports = EmpController;
