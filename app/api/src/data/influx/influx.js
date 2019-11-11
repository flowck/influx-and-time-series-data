/**
 * Influx DB connection file
 */

// Dependencies
const Influx = require("influx");

// Config
const { INFLUX_HOST } = process.env;
const { naturalGas } = require("./schemas");
const DATABASE_NAME = "timeseriesdata";

// Create a new connection instance
const influx = new Influx.InfluxDB({
  database: DATABASE_NAME,
  host: INFLUX_HOST || "localhost",
  schema: [naturalGas]
});

// Verify for database existance and or create a new one
async function main() {
  try {
    const databases = await influx.getDatabaseNames();
    console.log("Influx >> Connected to Influx server");

    const hasDatabase = databases.includes(DATABASE_NAME);
    if (!hasDatabase) {
      await influx.createDatabase(DATABASE_NAME);
      console.log("Influx >> Database created");
    }
  } catch (error) {
    throw error;
  }
}

main();

// Export an influx connection instance
module.exports.influx = influx;
