import {question4} from "../model/question4Schema.js"
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken"
const jwt = jsonwebtoken

export const question4Controller = {
    Adduser : async(req,res)=>{
        try {
            const {email, password, Confirmpassword, first_name, last_name, address} = req.body
            
            if (!(email || password ||Confirmpassword || first_name || last_name || address))
                return res.status(400).json({msg:"please fill in the blanks"})

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
            const register = await question4.findOne({email:email})

            if(register)
                return res.status(400).json({msg:`user already registered`})
            const hash_password =  await bcrypt.hash(password,12)
           


            const newuser = new question4({email,password:hash_password,Confirmpassword,first_name, last_name, address})
            await newuser.save()
            return res.status(200).json({msg:"user have been save succesfully"})

            
        } catch (error) {
            return res.status(400).json({msg:error.message})

        }
    },
    Getuser:async(req,res)=>{
        try {
            const {email, password, Confirmpassword, first_name, last_name, address} = req.body
            const user = await question4.find()
            if (! user)
               return res.status(400).json({msg:"no user on the server"})
            return res.status(200).json({msg:user})
        } catch (error) {
            return res.status(400).json({msg:error.message})
            
        }


    },
    Updateuser:async(req,res)=>{
        try {
            const id = req.params.id
            const user = await question4.findById(id)
            const {email, password, Confirmpassword, first_name, last_name, address} = req.body
            const new_article = await question4.findByIdAndUpdate(id,{email, password, Confirmpassword, first_name, last_name, address})
            return res.status(200).json({msg:"user updated succesfully"})
        } catch (error) {
            return res.status(400).json({msg:error.message})
        }
    },
    Deleteuser:async (req, res)=>{
        try {
         const id = req.params.id
     
         const user = await question4.findOne({id})
     
         if(!user) 
             return res.status(400).json({msg: "user does not exist!"})
     
         const new_user = await question4.findByIdAndDelete(id) 

         if(!new_user)
             return res.status(200).json({msg: "article deleted successfully!"})
         
        } catch (error) {
         return res.status(400).json({msg: error.message})
        }
}
}