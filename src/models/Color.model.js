import mongoose from "mongoose";

const colorSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  hex: {
    type: String,
  },
  displayName: {
    type: String,
  },
  category: {
    type: String,
  },
});

export default mongoose.model("Color", colorSchema);
