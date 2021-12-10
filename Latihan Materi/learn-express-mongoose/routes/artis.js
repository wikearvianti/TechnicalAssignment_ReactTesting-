const express = require("express")
const res = require("express/lib/response")

// creates a new router instance
const router = express.Router()

// //create new `artis`
// router.post("/artis", )
// //get all `artis`
// router.get("/artis", )
// //get `artis` y id
// router.get("/artis/:id", )
// //update `artis`
// router.put("/artis/:id", )
// //delete `artis`
// router.delete("/artis/:id", )

//karena ini sudah didalam folder artis, jadinya /artis tidak perlu, cukup menggunakan "/" saja

// //create new `artis`
router.post("/", ()=>{} )
// router.get("/artis", )
router.get("/", ()=>{
    res.send({msg: "get all artis"})
})
//get `artis` y id
router.get("/:id", ()=>{})
//update `artis`
router.put("/:id", ()=>{})
// //delete `artis`
router.delete("/:id", ()=>{})

module.exports = router