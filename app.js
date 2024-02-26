import express from "express"
import connect from "./schemas/index.js"
import userrouter from "./routes/user.router.js"
connect()
let app = express()
const port = 3000;
app.use("/user",[userrouter])


app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

app.listen(3000, ()=> {
    console.log(port, "연결")
})