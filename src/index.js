import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Mongodb connection error", error);
    process.exit(1);
  });
