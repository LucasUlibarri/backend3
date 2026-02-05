import express from 'express';
import mocksRouter from "./routes/mocks.router.js";
import petsRouter from "./routes/pets.router.js";
import userRouter from "./routes/users.router.js";
import { connectMongo } from './database/mongo.js';
import { environment } from "./config/config.js";

const app = express()

app.use(express.json())

connectMongo();

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Backend 3 - Entrega Final')
})

app.use("/api/users", userRouter);
app.use("/api/pets", petsRouter);
app.use("/api/mocks", mocksRouter);

app.listen(8080, () => {
  console.log(`Server corriendo en puerto ${environment.PORT}`);
})