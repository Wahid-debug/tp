const express = require('express');
const app = express();
const port = process.env.PORT || 5000
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const userRouter = require("./src/routes/userRouter")
app.get("/", (req,res)=>{
    res.send("Tp project")
})

app.use("/api", userRouter)

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})