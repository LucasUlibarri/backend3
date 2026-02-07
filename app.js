import express from 'express';
import { connectMongo } from './src/database/mongo.js';
import { environment } from "./src/config/config.js";
import cookieParser from 'cookie-parser';


import userRouter from "./src/routes/users.router.js";
import petsRouter from "./src/routes/pets.router.js";
import mocksRouter from "./src/routes/mocks.router.js";
import adoptionRouter from "./src/routes/adoption.router.js";
import sessionsRouter from "./src/routes/sessions.router.js";

const app = express()
const PORT = process.env.PORT;
connectMongo();


app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => { res.send('Backend 3 - Entrega Final') })

app.use("/api/users", userRouter);
app.use("/api/pets", petsRouter);
app.use("/api/mocks", mocksRouter);
app.use("/api/adoptions", adoptionRouter);
app.use("/api/sessions", sessionsRouter);

app.listen(PORT, () => {
  console.log(`Server corriendo en puerto ${PORT}`);
})