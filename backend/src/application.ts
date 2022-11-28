import * as express from "express";
import recipientsRouter from "./routes/recipientsRouter";

const app = express();

app.use("/api/recipients", recipientsRouter);

export default app;
