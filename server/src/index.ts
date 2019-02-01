// tslint:disable:no-console
import * as dotenv from "dotenv";
import * as path from "path";
import "source-map-support/register";

import App from "./app";
import Database from "./Database";

const CONFIG_PATH = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env";
dotenv.config({ path: path.resolve(process.cwd(), CONFIG_PATH)});
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
