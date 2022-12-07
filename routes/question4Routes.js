import {question4Controller} from "../controller/question4Controller.js"

import express,{Router} from "express"

export const question4Route = Router()

question4Route.post("/adduser",question4Controller.Adduser)

question4Route.get("/getuser",question4Controller.Getuser)

question4Route.put("/updateuser/:638f5a9a1fe3a811d456e7bb",question4Controller.Updateuser)

question4Route.delete("/deleteuser/:",question4Controller.Deleteuser)

