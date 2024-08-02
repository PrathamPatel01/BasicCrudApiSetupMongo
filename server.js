import { config } from "./src/config/config.js";
import connectDB from "./src/config/db.js";
import app from "./src/app.js";


const startServer = async () => {
  await connectDB();
  const port = config.get("port") || 8081;
  app.listen(port, () => {
    console.log(`server is running on => http://localhost:${port}`);
  });
};

startServer();
