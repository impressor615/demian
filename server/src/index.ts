// tslint:disable:no-console
import * as dotenv from "dotenv";
import "source-map-support/register";

import App from "./app";
import Database from "./Database";

dotenv.config();
const PORT: number = Number(process.env.PORT) || 3000;
const app = new App().app;
const db = new Database({
  host: process.env.DB_HOST,
  name: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
});

db.connect();
app
  .listen(PORT, () => console.log(`Express server listening at ${PORT}`))
  .on("error", (err) => console.error(err));
