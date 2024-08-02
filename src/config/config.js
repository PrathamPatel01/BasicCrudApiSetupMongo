import { config as envConfig } from "dotenv";
envConfig();

const _config = {
  port: process.env.PORT,
  mongooseConnection: process.env.MONGOOSE_CONNECTION,
  env: process.env.NODE_ENV,
  redisConnection: process.env.REDIS_CONNECTION,
};

export const config = {
  get: (key) => {
    if (!_config[key]) {
      console.error(`Unable to get ${key} value`);
      process.exit();
    }
    return _config[key];
  },
};
