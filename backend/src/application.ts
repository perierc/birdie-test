import * as express from "express";
import recipientsRouter from "./routes/recipientsRouter";
import { Application } from "express";

const app: Application = express();

app.use("/api/recipients", recipientsRouter);

export default app;
