import * as express from "express";
import { getRecipients } from "../controllers/recipientsController";

const recipientsRouter = express.Router();

recipientsRouter.route("/").get(getRecipients);

export default recipientsRouter;
