class Block {
  constructor(index, timestamp, data, previousHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return SH256(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.timestamp(this.data)
    ).string();
  }
}
class Blockhchain {
  constructor() {
    this.main = [];
  }

  createGenesisBlock() {
    return newBlock(0, "01/01/2017", "Genesis block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }
  addBlock(newBlock) {
    newBlock.previousHash = thisgetLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
  isChainvalid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }
    }

    return true;
  }
}
let savjeeCoin = new Blockchain();
savjeeCoin.addBlock(new Block(1, "01/07/2017", { amount: 4 }));
savjeeCoin.addBlock(new Block(1, "12/07/2017", { amount: 10 }));

console.log("Is blockchain valid?" + savejeeCoin.isChainValid());
savjeeCoin.chain[1].data = { amount: 100 };
savjeeCoin.chain[1].hash = savjeeCoin.chain[1].calculateHash();

console.log("iS  blockchain valid?" + savjoinCoin.isChainValid());
