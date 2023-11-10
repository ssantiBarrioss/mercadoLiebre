const express=require("express")
const app= express()
const path=require("path")
const port= 3000
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get("/register", (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/register.html"))
})
    
app.post("/register", (req, res)=>{
    console.log(req.body)
    res.redirect("/login")
})

app.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/login.html"))
})

app.post("/login", (req,res)=>{
    console.log(req.body);
    res.redirect("/")
})

app.use(express.static("public"))

app.listen(port,()=>{
    console.log(`Levanto servidor en puerto: ${port}`)
})