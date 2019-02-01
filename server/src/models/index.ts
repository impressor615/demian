import * as Promise from "bluebird";
import * as fs from "fs";
import * as _ from "lodash";
import mongoose = require("mongoose");

mongoose.Promise = Promise;
const createModels = (connection) => {
  const files = fs.readdirSync(__dirname);
  files.forEach((file) => {
    if (/\.ts$/.test(file) && file !== "index.ts") {
      const createModel = require(`./${file}`).default;
      createModel(connection);
    }
  });
};

export default (connection) => {
  const models = connection.models;
  if (!_.isEmpty(models)) {
    return models;
  }

  createModels(connection);
  return models;
};
