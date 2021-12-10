const express = require("express")

const artisRoutes = require("./artis") //untuk mengimport folder route yang artis

// creates a new router instance
const router = express.Router()

//ping untuk memeriksa server jalan apa ngga
router.get("/ping", (req,res) => {
    const ready = {
        status: "server is ready"
    }
    res.status(200).send(ready)
})

router.use("/artis", artisRoutes) //untuk menggantikan route yg tadi, dan masuk kedalam fungsi yg diatas

module.exports = router