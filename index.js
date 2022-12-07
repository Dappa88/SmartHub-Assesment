import express,{json} from "express"
import dotenv from "dotenv"
import {connect_db} from "./connect_db.js"
import ejs from "ejs"

import {route} from "./routes/index.js" 
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config()
const port = process.env.PORT || 8000


connect_db()
const app = express()
app.use(express.json())
app.set("view engine","ejs")
app.use("/api",route)
const persons = {person :"happy"}
// app.get("/",(req,res)=>{
//     res.render("index")

// })


app.listen(port,()=>{
    console.log(`server is connected on ${port}`)
})