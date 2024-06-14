import Image from "../models/Image.model.js";

export const searchImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getImageByName = async (req, res) => {
  try {
    const { name } = req.params;
    const image = await Image.findOne({ name: name });
    res.json(image);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const editImage = async (req, res) => {
  try {
    const { id, name, displayName, imageURL } = req.body;

    let response = await Image.findByIdAndUpdate(id, {
      name,
      displayName,
      imageURL,
    });

    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const createImage = async (req, res) => {
  try {
    const { name, displayName, imageURL } = req.body;

    const newImage = await Image.create({ name, displayName, imageURL });

    res.json(newImage);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
