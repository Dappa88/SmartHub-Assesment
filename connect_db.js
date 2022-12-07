import mongoose,{connect}  from "mongoose";
mongoose.set('strictQuery', true)

export const connect_db = async()=>{
    const url = process.env.MONGO_URL
    await connect(url,()=>{
        console.log("database is connected")
    })
}