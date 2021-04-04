const express = require('express');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const mssql = require('mssql');

// Fixed start for Admin
const adminRoute = require("./routes/AdminRoute");
app.use("/admin", adminRoute)
// Fixed start for Partner
const partnerRoute = require("./routes/PartnerRoute");
app.use("/partner", partnerRoute)
// Fixed start for Customer
const customerRoute = require("./routes/CustomerRoute");
app.use("/customer", customerRoute)

app.listen(PORT, (req, res) => {
    console.log("Running at " + PORT);
})
app.get("/",(req,res)=>{
    res.send("Hello world!")
})