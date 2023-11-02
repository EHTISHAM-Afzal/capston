import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url)
        .then(() => console.log("mongodb Connencted"))
        .catch((err) => console.error("can not connect to mongo db", err));
}

export default connectDB;