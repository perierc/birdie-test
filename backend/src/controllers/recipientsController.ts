import db from "../config/db";
import { Request, Response } from "express";

export const getRecipients = (_: Request, res: Response) => {
  const statement = "select distinct care_recipient_id from events";
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
};

export const getRecipientEvents = (req: Request, res: Response) => {
  // limit to 100 events for now, will add pagination later
  const statement = `select id, event_type, timestamp, caregiver_id, payload from events where care_recipient_id = '${req.params.id}' order by timestamp desc limit 100`;
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
};
