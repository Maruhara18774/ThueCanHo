const express = require('express');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const mssql = require('mssql');
const config = {

    server: process.env.SQL_SERVER,
    database: process.env.SQL_DATABASE,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    port: 1400,
    options: {
        encrypt: true,
        enableArithAbort: true
    }

}
app.listen(PORT, (req, res) => {
    console.log("Running at " + PORT);
    var connectSql = new mssql.ConnectionPool(config);
    connectSql.connect(function(err){
        if(err) throw err;
        var request = new mssql.Request(connectSql);
        request.query("SELECT * FROM BOOK",function(err,recordList){
            if(err) throw err;
            else console.log(recordList);
            connectSql.close();
        })
    })


    console.log("End")
})
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