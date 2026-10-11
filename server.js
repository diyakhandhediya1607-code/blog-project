const express = require("express")
const app = express()
const {connectDb} = require("./src/Db/db")
const { env } = require("./src/Config/env")
app.use(express.json())
const blogRoutes = require("./src/Routes/blogRoutes")
connectDb()

app.use("/api/blog", blogRoutes)
app.listen(env.PORT, ()=>{
    console.log("Server is working", env.PORT);
})