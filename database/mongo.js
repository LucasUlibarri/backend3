import mongoose from "mongoose";
import { environment } from "../config/config.js";

export async function connectMongo() {
  try {
    await mongoose.connect(environment.DB_URL);
    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Error conectando a MongoDB", error.message);
  }
}