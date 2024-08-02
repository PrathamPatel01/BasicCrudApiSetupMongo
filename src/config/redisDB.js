import redis from "redis";
import { config } from "./config.js";

let redisClient = async () => {
  try {
    console.log("Connecting to redis!");
    redisClient = redis.createClient({
      url: config.get("redisConnection"),
    });

    redisClient.on("error", (error) => {
      throw new Error(error.message);
    });

    await redisClient.connect().then(() => {
      console.log("redis connected successfully!");
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
redisClient();
export default redisClient;
