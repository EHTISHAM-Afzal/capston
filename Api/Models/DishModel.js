import Joi from "joi";
import { Schema } from "mongoose";
import * as mongoose from "mongoose";

const DishSchema = new Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 15 },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    catagory: { type: Schema.Types.ObjectId, ref: "Catagory", required: true },
});

export const Dish = mongoose.model("Dish", DishSchema);

export const validateDish = (dish) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(15).required(),
        price: Joi.number().required(),
        description: Joi.string().required(),
        image: Joi.string().required(),
        catagory: Joi.string().required(),
    });
    return schema.validate(dish);
};
