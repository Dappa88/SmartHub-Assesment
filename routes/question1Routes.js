import {question1Controller} from "../controller/question1Controller.js"
import express,{Router} from "express"

export const question1Route = Router()

question1Route.post("/question1",question1Controller.checkpassword)

