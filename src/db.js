import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost/cgsapp")
        console.log("Conectado a la Base de Datos")
    } catch (error) {
        console.log(error);        
    }
}