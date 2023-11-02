import express from "express";
import { Dish, validateDish } from "../Models/DishModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
    await Dish.find().populate("catagory")
        .then((response) => res.send(response))
        .catch((err) =>
            res.status(400).send({ message: "Oops cant find the Dish", error: err })
        );
});

router.get("/:name", async (req, res) => {
    await Dish.find({ name: req.params.name })
        .then((response) => response.length == 0 ? res.status(400).send("Cannot find Dish") : res.send(response))
        .catch((err) =>
            res
                .status(400)
                .send({ message: "Oops cant find the Dish", error: err.message })
        );
});

router.post("/", async (req, res) => {
    const { error } = validateDish(req.body);
    if (error) return res.status(400).send(error.message);
    await Dish.create(req.body)
        .then((response) => res.send(response))
        .catch((err) =>
            res
                .status(400)
                .send({ message: "Oops cant save the Dish", error: err.message }))
});

router.put("/:name", async (req, res) => {
    await Dish.findOneAndUpdate({ name: req.params.name }, req.body, { new: true })
        .then((response) =>
            response === null ? res.status(400).send("Cannot find the Dish") :
                res.send({
                    message: "Dish updated the new data is ",
                    response: response,
                })
        )
        .catch((err) =>
            res
                .status(400)
                .send({ message: "Oops cant update the Dish", error: err.message })
        );
});

router.delete("/:name", async (req, res) => {
    await Dish.findOneAndDelete({ name: req.params.name })
        .then((response) => res.send(response))
        .catch((err) =>
            res
                .status(400)
                .send({ message: "Oops cant delete the Dish", error: err.message })
        );
});

export default router;