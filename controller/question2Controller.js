import {question2} from "../model/question2Schema.js"
import {__dirname} from "../index.js"
import { application } from "express"
let display_person


// import ejs from "ejs"


export const question2Controller = {
    register : async(req,res)=>{
        try {
            const {email, password, Confirmpassword, first_name, last_name, address} = req.body
            const register = await question2.findOne({email:email})
            if(!(email || password || Confirmpassword || first_name || last_name))
               return res.status(400).json({msg:"please fill up the rest"})
            if((!email.includes("@")) || (!email.includes(".com")))
               return res.status(400).json({msg:"email is incorrect"})

            if((first_name || last_name).match(/^[0-9]+$/))
               return res.status(400).json({msg:"your name must not contain numbers"})
            if((password.length<10))
               return res.status(400).json({msg:"your password is not long enough"})
            if(!(password.match(/[A-Z]/)))
               return res.status(400).json({msg:"your password must contain uppercase"})
            if(password !== Confirmpassword)
               return res.status(400).json({msg:`password doesn't match`})
            if(register)
                return res.status(400).json({msg:`user already registered`})
            const user = new question2({email, password, Confirmpassword, first_name, last_name, address})

            user.save()

            return res.status(200).json({msg:"user registered succesfully"})
            
        
        } catch (error) {
            return res.status(400).json({msg:error.message})
        }
        

    },
    login : async(req,res)=>{
        try {
            const {email,password} = req.body
            const person = await question2.findOne({email})
            display_person = person
            if(!person)
               return res.status(404).json({msg:"user not found"})
            if(password !== person["password"])
               return res.status(404).json({msg:`password not correct`})
            
            
            return display_person 
            // return res.render("index",{display_person})
            

            
        } catch (error) {
            return res.status(404).json({msg:error.message})
        }
        

    }
    
   
}
// tried something i wanted it to be exactly the same email from the login that will be sent to the frontend but let me confess sha u need to login first(send the login request before the time in the set interval runs out or server will crash on postman) before u send
let display_persons =setInterval (()=>{
    if(typeof display_persons["email"]=== undefined){
        display_persons()
    }
    else{
        return display_person["email"]

    }
    
},3.154*10e7)


export const getrequest = {
    sendpage : async(req,res)=>{
        try {
            
            const display = await question2.findOne({display_persons})
             
            
            
            res.render("index",{display})

        } catch (error) {
            res.status(400).json({msg:error.message})
        }
        
        
        
    }
}
// let display_person = async()=>{
//     await question2Controller["login"]


// }
// display_person()

