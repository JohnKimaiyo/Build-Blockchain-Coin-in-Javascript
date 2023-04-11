const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, "0INA90SDNF90N", "90ANSD9F009N");

console.log(bitcoin);
