import * as express from "express";

import sendError from "@/lib/sendError";
import getModels from "@/models";

const { Hello } = getModels();
export default (router: express.Router): void => {
  router.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello World");
  });

  router.post("/create", async (req, res) => {
    const { title } = req.body;
    if (!title) {
      sendError({ res, language: req.language });
      return;
    }

    const newHello = await Hello.create({ title });
    res.json({ _id: newHello._id.toString() });
  });
};
