const express = require("express");
const router = express.Router();
// const pool = require("../Config/db");  // assuming your db file is db.js
const authToken = require("../Middleware/authMiddleware");
const EmpController = require("../Controllers/EmpController");


router.get("/",authToken,EmpController.getAllEmp);
router.get("/:empId",authToken,EmpController.getEmpById);
router.post("/",authToken,EmpController.createEmployee);
router.put("/:empId",authToken,EmpController.UpdateEmployee);
router.delete("/:empId",authToken,EmpController.DeleteEmp);

module.exports = router