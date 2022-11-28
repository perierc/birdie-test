import * as express from "express";
import db from "../config/db";

export const pingController = express.Router();

pingController.get("/hello", (_, res) => {
  res.status(200).json({
    greetings: "Thank you for spending some time on this test. All the best 🙌",
  });
});

pingController.get("/sql", (_, res) => {
  const statement = "select * from events limit 10";
  db.query(statement, (err: any, results: any) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      res.status(200).json({
        results,
      });
    }
  });
});
