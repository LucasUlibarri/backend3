import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specie: { type: String, required: true },
    age: Number,
},
{ timestamps: true }
);

export const PetModel = mongoose.model('pets', petSchema);