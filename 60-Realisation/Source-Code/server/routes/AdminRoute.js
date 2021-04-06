const express = require('express');
const router = express.Router();

const controller = require("../controllers/Admin/AdminController")


router.get("/",controller.get)

module.exports = router;