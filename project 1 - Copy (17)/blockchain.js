function Blockchain() {
  this.chain = [];
  this.newTransaction = [];
}

Blockchain.prototype.createNewBlock = function (nonce, previousBlockHah, hash) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.newTransaction,
    nonce,
    previousBlockhash: previousBlockHash,
  };

  (this.newTransaction = []), this.chain.push(newBlock);
  return newBlock;
};
