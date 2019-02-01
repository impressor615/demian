// tslint:disable:no-console
import mongoose = require("mongoose");

import createModels from "@/models";

class Database {
  private host: string;
  private port: number;
  private name: string;

  constructor({ host, port, name }) {
    this.host = host;
    this.port = port;
    this.name = name;
  }

  public connect() {
    mongoose.connect(
      `mongodb://${this.host}:${this.port}/${this.name}`,
      this.getOptions(),
    );

    const { connection } = mongoose;
    connection.once("open", () => console.log(`succeed to connect to ${this.name} in mongoDB`));
    createModels(connection);

    return connection;
  }

  private getOptions() {
    return {
      useNewUrlParser: true,
    };
  }
}

export default Database;
