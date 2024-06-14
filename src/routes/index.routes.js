import colorsRoutes from "./colors.routes.js";
import imagesRoutes from "./images.routes.js";

import { Router } from "express";
const app = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
app.get("/", (req, res) => {
  res.send("GET de prueba / sola con deploy");
});

app.use("/colors", colorsRoutes);
app.use("/images", imagesRoutes);

export default app;
