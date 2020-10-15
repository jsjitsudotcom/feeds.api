module.exports = {
  development: {
    username: "postgres",
    password: "root",
    database: "postgres",
    host: "127.0.0.1",
    dialect: "postgres",
    port: 5432,
    seederStorage: "sequelize",
    operatorsAliases: false
  },
  test: {
    username: "postgres",
    password: "root",
    database: "postgres",
    host: "127.0.0.1",
    dialect: "postgres",
    port: 5432,
    seederStorage: "sequelize",
    operatorsAliases: false,
    logging: false
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
    port: process.env.DATABASE_PORT,
    seederStorage: "sequelize",
    operatorsAliases: false,
    logging: false
  }
};
