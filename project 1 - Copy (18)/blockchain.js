function Blockchain() {
  this.chain = [];
  this.newTransaction = [];
}

Blockchain.prototype.createNewBlock = function (
  nonce,
  previousBlockHash,
  hash
) {
  const newBock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    treansactions: this.newTransaction,
    nonce,
    previousBlockhash: previousHash,
  };

  (this.newTransaction = []), this.chain.push(newBlock);
  return newBlock;
};
