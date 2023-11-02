import express from "express";
import morgan from 'morgan';
import DishRoutes from './Routes/Dish.js'
import catagoriesRouter from './Routes/catagories.js';
import connectDB from './MongoDB/Connect.js';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

await config({ path: `${__dirname}/../.env` });


const app = express();
app.use(express.json({ limit: "25mb" }));
app.use(morgan("dev"));
app.use("/api/dishes", DishRoutes);
app.use("/api/catagory", catagoriesRouter);



const StartServer = async () => {
    try {
        // eslint-disable-next-line no-undef
        connectDB(process.env.MONGODB_URL);
        app.listen("3002", () => {
            console.log("app is runnig on local host 3002");
        });
    } catch (error) {
        console.log(error);
    }
}
StartServer();


// how i can deploy this application in vercell with working api routes to make fetch request my api api route and they will excute thate api code