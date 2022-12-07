import {question2Controller} from "../controller/question2Controller.js"
import {getrequest} from "../controller/question2Controller.js"
import express,{Router} from "express"

export const question2Route = Router()



question2Route.post("/question2register",question2Controller.register)

question2Route.post("/question2login",question2Controller.login)

question2Route.get("/sendpage",
    
    getrequest.sendpage

)
