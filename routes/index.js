var express = require("express")

var router =express.Router()
router.use("/", require("./html"))
router.use("/burgers", require("./burgers"))
 
module.exports = router