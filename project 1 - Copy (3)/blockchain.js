function Blockchain() {
  this.main = [];
  this.newTransaction = [];
}

Blockchain.prototype.createNewBLock = function (
  nonce,
  previousBlockHash,
  hash
) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    tranaction: this.newTransaction,
    nonce,
    previousBlockHash: previousBlockchain,
  };
  (this.newTransaction = []), this.chain.push(newBlock);
  return newBlock;
};
