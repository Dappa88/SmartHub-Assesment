import mongoose,{Schema,model} from "mongoose";

const question3Schema = new Schema({
    title :{
        type: String,
        required :true,
        unique: true,
        trim: true

    },
    content : {
        type: String,
        required :true,
        trim: true
    },
    AuthorName : {
        type: String,
        required :true,
        trim: true
    },
    address : {
        type: String,
        required :true
    },
    phone_number : {
        type: Number,
        required :true
    },
    article_about : {
        type: String,
        
    }
})

export const question3 = model("question3Schema", question3Schema)