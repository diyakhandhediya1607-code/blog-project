const express = require("express")
const { addblog, getblog, deleteblog, updateblog } = require("../Controller/blogController")
const router = express.Router()

router.post("/addblog", addblog)
router.get("/getblog/:id", getblog)
router.put("/updateblog/:id", updateblog)
router.delete("/deleteblog/:id", deleteblog)
module.exports = router