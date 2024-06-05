import mongoose from "mongoose";

const colorSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  hex: {
    type: String,
  },
  rgb: {
    type: String,
  },
});

export default mongoose.model("Color", colorSchema);
