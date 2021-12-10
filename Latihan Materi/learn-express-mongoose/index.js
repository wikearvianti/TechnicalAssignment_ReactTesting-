const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const router = require("./routes/index")
const app = express()
const port = process.env.PORT || 3000


app.use(router)

app.listen(port, () =>{
    console.log("server is listening on port", port)
})