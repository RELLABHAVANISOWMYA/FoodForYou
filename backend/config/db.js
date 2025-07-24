import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('Place Your MongoDB Connection String URI
').then(()=>console.log("DB Connected"))
}

