
import colorsRoutes from "./colors.routes.js";

import { Router } from "express"
const app = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
app.get("/", (req, res) => {
  res.send("GET de prueba / sola con deploy");
});


app.use("/colors", colorsRoutes);

export default app

