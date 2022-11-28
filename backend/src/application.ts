import * as express from "express";
import * as cors from "cors";
import recipientsRouter from "./routes/recipientsRouter";
import { Application } from "express";

const app: Application = express();

app.use(cors());

app.use("/api/recipients", recipientsRouter);

export default app;
