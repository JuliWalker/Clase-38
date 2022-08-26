import mongoose from "mongoose";

export const carritosSchema = new mongoose.Schema({
    productos: [
        {
            producto: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "products"
            },
            cantidad: {
                type: Number,
                required: true,
                default: 1
            }
        }
    ],
});

