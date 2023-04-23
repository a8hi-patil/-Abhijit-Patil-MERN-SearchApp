const express = require("express");
const fetchData = require('../controller/fetchData.js')
const router = express.Router()

router.post("/getData",fetchData )

module.exports = router
  