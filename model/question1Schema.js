import mongoose,{Schema,model} from "mongoose";

const question1Schema = new Schema({
    email : {
        type : String,
        required:true
    },
    password : {
        type : String,
        required:true
    },
    Confirmpassword:{
        type : String
        
    }
})

export const question1 = model("question1",question1Schema)