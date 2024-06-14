import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  displayName: {
    type: String,
  },
  imageURL: {
    type: String,
  },
});

export default mongoose.model("Image", imageSchema);
