# EMPLOYEE MANAGEMENT SYSTEM

A Full Stack Employee Management System designed to manage employee records efficiently.  
It supports user authentication, employee CRUD operations, and department-wise organization.
Built using Angular-17 (Frontend), Node.js-(20) + Express (Backend), and MySQL (Database).

# PROJECT OVERVIEW

The Employee Management System is a web application that allows HR teams and Admin users to:
- Add, view, update, and delete employee records.
- Assign employees to departments.
- Manage user access with secure authentication.
- View department-wise employee listings.
- Search employees by name or department.

# TECHNICAL STACK 

| **Frontend** | Angular 17, TypeScript, HTML, CSS | User Interface |
| **Backend**  | Node.js, Express.js | RESTful API and Business Logic |
| **Database** | MySQL | Relational Data Storage |
| **Security** | JWT (JSON Web Token) | User Authentication (Auth & Security JWT, bcrypt    Authentication & password hashing) |
| **Tools** | VS Code, Postman, Git, npm | Development and Testing |


# Folder Structure
├── backend/
│ ├── controllers/ # Handles API logic
│ ├── routes/ # Express routes
│ ├── models/ # Database schema / queries
│ ├── db/ # Database scripts
│ ├── .env # Environment variables (not pushed to Git)
│ ├── server.js # Application entry point
│ └── package.json # Node dependencies
│
├── frontend/
│ ├── src/
│ │ ├── app/
│ │ │ ├── components/ # Angular components
│ │ │ ├── services/ # API integration
│ │ │ ├── models/ # TypeScript models
│ │ │ └── guards/ # Route protection
│ ├── angular.json # Angular config
│ └── package.json # Angular dependencies
│
└── README.md

# Application Setup 

    # Prerequisites
    Node.js v18+ (Node 20 recommended)
    npm (comes with Node)
    MySQL server (local or remote)
    Angular CLI (npm i -g @angular/cli)

    (if requires)

    a) npm i express mysql2 dotenv cors bcryptjs jsonwebtoken



1) git clone https://github.com/rushichougule-14/Employee_Mangement_System.git

2) For Backend -
    -> create a backend folder
    -> opne cmd -> npm install (All dependecies were installed)
    -> Hit the node server.js cmd (On Console will see the server is running);

3) For Database -
    -> CREATE a EmployeeDb
    -> Use EMployeeDb;
    -> Create the two tables which will require to the applications
        a) USER TABLE

            CREATE TABLE users (
            userId INT AUTO_INCREMENT PRIMARY KEY,
            fullName VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL);

        b) Employees TABLE

            CREATE TABLE employees (
            empId INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            position VARCHAR(50),
            department VARCHAR(50),
            isActive TINYINT(1) NOT NULL DEFAULT 1);

    # Insert Sample Data in Users
    INSERT INTO users (fullName, email, password)
    VALUES ('Admin User', 'admin@example.com', 'admin123');

    # Insert Sample Data in Employees
    INSERT INTO employees (name, email, position, department, isActive) VALUES
    ('Aarav Patil', 'aarav.sharma@company.com', 'Technical Manager', 'IT', 1),
    ('Priya Mehta', 'priya.mehta@company.com', 'Recruiter', 'HR', 1),
    ('Rohan Patel', 'rohan.patel@company.com', 'Finance Analyst', 'Finance', 1),

4) FRONTEND
    -> create a frontend folder
    -> git clone the code from repo
    -> open cmd and locate on frontend inside will see the src then install the dependencies.
    -> npm install (it will install the dependencies require for the Angular 17)
    -> ng serve will start the appilcation
    -> Frontend runs on → http://localhost:420

# API ENDPOINTS

Method	                    Endpoint	         Description

# Employee 
GET	  --->                  /api/employees	     Fetch all employees
POST  --->	               /api/employees	     Add new employee
PUT  ---->	               /api/employees/:id	 Update employee
DELETE ---->	           /api/employees/:id	 Delete employee

# Users
POST  ---->	               /api/users/register	  Register new user
POST  ----> 	            /api/users/login	  Login (JWT Auth) 



# Industrial Best Practices Followed

 * MVC Architecture → Separation of controller, routes, and models
 * Environment Variables → Using .env for sensitive info
 * JWT Authentication → Secure login and session handling
 * Password hashing (bcrypt) and JWT authentication
 * API Versioning Ready → Easily extendable endpoints
 * Validation Layer → Ensures clean and safe user input
 * Error Handling Middleware → Consistent error responses
 * Modular Angular Services → Centralized API integration
 * Responsive UI Design → Material or Bootstrap for consistent layout
 * Reusable Components → Header, Table, and Form components

# ENTIRE SETUP

# Clone the repo
git clone https://github.com/rushichougule-14/Employee_Mangement_System.git

# Setup Backend
cd employee-management/backend
npm install
npm start

# Setup Frontend
cd ../frontend
npm install
ng serve


#Loom Video Link
https://www.loom.com/share/b727818c1912488dbcf54f350a7bbfdf?sid=fcd82792-e9f9-4edd-ad21-c997cae792db


RUSHIKESH CHOUGULE
rushi.chougule5241@gmail.com
9552160880