import express from "express";
import cors from "cors";
import 'dotenv/config'
import { router } from "./routes/index.js";

const app = express();
const PORT=process.env.PORT||3008;

const jsonBodyMiddleware = express.json();

app.use(jsonBodyMiddleware);
app.use(cors({origin: process.env.CLIENT_URL, credentials: true}));
app.use(router)

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log('Server is running on localhost:3007');
  });