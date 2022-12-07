import {question3Controller} from "../controller/question3Controller.js"
import express,{Router} from "express"
export const question3Route = Router()

question3Route.post("/addarticles",question3Controller.Addnew)

question3Route.get("/getarticles",question3Controller.Getall)

question3Route.put("/updatearticles/:638f54e2a2dae4791bb68074",question3Controller.Updateone)

question3Route.delete("/deletearticles/:638f54e2a2dae4791bb68074",question3Controller.Deleteone)

// remeber to add their id later
