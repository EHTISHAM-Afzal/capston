import * as mongoose from "mongoose"
import joi from "joi"

const CatagorySchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, unique: true },
});

export const Catagory = mongoose.model("Catagory", CatagorySchema);

export const validateCatagory = (catagory) => {
    const schema = joi.object({
        name: joi.string().min(3).required()
    })
    return schema.validate(catagory)
}