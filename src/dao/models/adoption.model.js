import mongoose from "mongoose";

const adoptionSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true},
    pet: {type: mongoose.Schema.Types.ObjectId, ref: 'pets', required: true},
    createdAt: { type: Date, default: Date.now }
},
{ timestamps: true }
);

export const AdoptionModel = mongoose.model('adoptions', adoptionSchema);