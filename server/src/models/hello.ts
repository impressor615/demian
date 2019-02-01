import * as mongoose from "mongoose";

const { Schema } = mongoose;
const schema = new Schema({
  title: {
    required: true,
    type: String,
  },
});

export default (connection) => {
  connection.model("Hello", schema);
};
