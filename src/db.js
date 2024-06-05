import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tablonimus:1234@cluster0.io9stii.mongodb.net/colordb?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("conexion a mongo exitosa");
    return "Conexión a MongoDB exitosa.";
  } catch (error) {
    console.log(error);
    return error;
  }
};
