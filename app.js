import express from 'express';
import { connectMongo } from './src/database/mongo.js';
import cookieParser from 'cookie-parser';

import userRouter from "./src/routes/users.router.js";
import petsRouter from "./src/routes/pets.router.js";
import mocksRouter from "./src/routes/mocks.router.js";
import adoptionRouter from "./src/routes/adoption.router.js";

import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

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

const swaggerDocument = YAML.load('./src/docs/swagger.yaml');
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server corriendo en puerto ${PORT}`);
})