const express = require('express');
const cors = require('cors');
require ("dotenv").config();
const bodyParser = require('body-parser');
const empRoutes = require('./Routes/empRoutes');
const userRoutes = require('./Routes/userRoutes')
const app = express();


app.use(cors());


app.use(express.json());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));


app.use("/api/employees", empRoutes);
app.use("/api/users",userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
