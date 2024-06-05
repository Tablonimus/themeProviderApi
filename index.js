// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░▄▄▄░░░░░░░░░
// ░░░░░░░░░░░░░░▄▄▄▄▄▄▄▄░░░░░░█████▄░░░░░░
// ░░░░░░░░░▄▄█████████████▀░░▄░░▀████▄░░░░
// ░░░░░░▄▄███▀▀░░▄▄▄▄▄▄░░▀░░████▄░▀████░░░
// ░░░░▄███▀░▄▄██████▀▀███░░▄█▀▀░▀▀▄░▀███▄░
// ░░░▄██▀░▄███▀▀▀███▄▄██░░▄██░░░░░█▄░▀███░
// ░░███░▄██████████████▀░░███▄░░░▄██▄░████
// ░███░▄████░█████░▀██▀░░█████████▀▀▀░░░░░
// ▄██░░██████▀▀███████░░▀▀▀▀▀░░░░░░░░░░░░░
// ███░██████░░░░█████░░░░░░░░░▄▄▄▄░░██░░░░
// ██░░██████▄░░▄█████▄▄▄█████▀▀███░░██░░░░
// ███░███▄░▀█████▀▀███████████████░░██░░░░
// ███░▀██████▀████▄▄█████▄▄███▀███░▄██░░░░
// ░██▄░██████▄▄██████▀▀▀█████▄▄██░░██▀░░░░
// ░▀██▄░▀█▀▀████████░░░░░███████░░██▀░░░░░
// ░░▀██▄░▀███████████▄░▄▄█████▀░▄██▀░░░░░░
// ░░░░▀██▄░░▀███▄▄▄████████▀▀░▄███▀░░░░░░░
// ░░░░░░▀███▄░░▀▀▀▀▀▀▀▀▀▀░░▄▄███▀░░░░░░░░░
// ░░░░░░░░▀▀████▄▄▄▄▄▄▄▄█████▀░░░░░░░░░░░░
// ░░░░░░░░░░░░░▀▀▀▀▀▀▀▀▀▀░░░░░░░░░░░░░░░░░
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// ░░░░░░░█████████████████████████░░░░░░░░
// ░░░░░░░█────█───█────█────█────█░░░░░░░░
// ░░░░░░░█─██─██─████──███──█─██─█░░░░░░░░
// ░░░░░░░█────██─███──███──██────█░░░░░░░░
// ░░░░░░░█─█████─██──███──███─██─█░░░░░░░░
// ░░░░░░░█─████───█────█────█─██─█░░░░░░░░
// ░░░░░░░█████████████████████████░░░░░░░░
import { connectDB } from "./src/db.js";
import app from "./src/app.js";

await connectDB().then(
  app.listen("3000", () => {
    console.log("Server on port", 3000);
  })
);