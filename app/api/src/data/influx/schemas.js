const Influx = require("influx");

module.exports.naturalGas = {
  measurement: 'prices',
    fields: {
      price: Influx.FieldType.FLOAT,
    },
    tags: []
};