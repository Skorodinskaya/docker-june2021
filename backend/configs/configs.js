const DB_USER = process.env.MONGO_INIYDB_PORT_USERNAME;
const DB_PASSWORD = process.env.MONGO_INIYDB_PORT_PASSWORD;
const DB_NAME = process.env.MONGO_INITDB_DATABASE;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;

module.exports = {
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    MONGO_URI: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
}
