import * as express from "express";
import { Router } from "express";
import {
  getRecipientEvents,
  getRecipients,
} from "../controllers/recipientsController";

const recipientsRouter: Router = express.Router();

recipientsRouter.route("/").get(getRecipients);
recipientsRouter.route("/:id/events/").get(getRecipientEvents);

export default recipientsRouter;
