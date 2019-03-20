const express = require("express")
const router = express.Router()
const Myaccounts = require("../controller/Myaccounts")

router.get("/", Myaccounts.index)
router.get("/create", Myaccounts.create)
router.post("/processCreate", Myaccounts.store)
router.get("/edit/:id", Myaccounts.edit)
router.put("/processModify/:id", Myaccounts.update)
router.delete("/processDelete/:id", Myaccounts.destroy)
module.exports = router
