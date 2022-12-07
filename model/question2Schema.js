import mongoose,{Schema,model} from "mongoose";

const question2Schema = new Schema({
    email :{
        type: String,
        required :true,
        unique: true,
        trim: true

    },
    password : {
        type: String,
        required :true,
        trim: true
    },
    Confirmpassword : {
        type: String,
        required :true,
        trim: true
    },
    first_name : {
        type: String,
        required :true
    },
    last_name : {
        type: String,
        required :true
    },
    address : {
        type: String,
        
    }
})

export const question2 = model("question2Schema", question2Schema)
