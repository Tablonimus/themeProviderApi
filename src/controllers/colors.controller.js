import Color from "../models/Color.model.js";

export const searchColors = async (req, res) => {
  try {
    const colors = await Color.find();
    res.json(colors);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getColorByName = async (req, res) => {
  try {
    const { name } = req.params;
    const color = await Color.findOne({ name: name });
    res.json(color);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const editColor = async (req, res) => {
  try {
    const { id, name, hex, rgb } = req.body;

    let response = await Color.findByIdAndUpdate(id, { name, hex, rgb });

    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const createColor = async (req, res) => {
  try {
    const { name, hex, rgb } = req.body;

    const newColor = await Color.create({ name, hex, rgb });

    res.json(newColor);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
