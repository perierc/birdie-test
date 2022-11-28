import db from "../config/db";

export const getRecipients = (_: any, res: any) => {
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
