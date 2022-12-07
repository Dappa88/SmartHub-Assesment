import {question1} from "../model/question1Schema.js"

export const question1Controller = {
    checkpassword :(req,res)=>{
        try {
            
            const {email,password,Confirmpassword} = req.body
            
            if((!email.includes("@")) || (!email.includes(".com")))
               return res.status(400).json({msg:"email is incorrect"})
            if((password.length<10))
               return res.status(400).json({msg:"your password is not long enough"})
            if(!(password.match(/[A-Z]/)))
               return res.status(400).json({msg:"your password must contain uppercase"})

            
            if(password !== Confirmpassword)
               return res.status(400).json({msg :"password not the same" })
               
            return res.status(201).json({msg :"account created succesfully" })
        } catch (error) {
            return res.status(400).json({msg:error.message})
            
        }
        

    }
    
   
}