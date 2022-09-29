const router = require('express').Router();

router.use('/', (req, res)=>res.send("Hallo dari backend"))
router.use("/contact", require("./contact-us"));

module.exports=router