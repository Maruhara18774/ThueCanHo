const express = require('express');
const router = express.Router();

const controller = require("../controllers/Partner/PartnerController");


router.get("/",controller.get)

module.exports = router;