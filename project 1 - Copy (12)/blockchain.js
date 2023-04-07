function Blockchain() {
  this.chain = [];
  this.newTransaction = [];
}

Blockchain.prototype.createBlock = function (nonce, previousBlockHash, hash) {
  const newBock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.newTransaction,
    nonce,
    previousBlockHash: previousBlockHash,
  };

  (this.newTransaction = []), this.chain.push(newBlock);
  return newBlock;
};
