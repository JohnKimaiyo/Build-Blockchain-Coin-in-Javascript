function Blockchain() {
  this.chain = [];
  this.newTransaction = [];
}

Blockchain.prototype.createNewBlock = function (
  nonce,
  previousBlockhash,
  hash
) {
  const newBlock = {
    index: this.main.length + 1,
    timestamp: Date.now(),
    transactions: this.newTransaction,
    nonce,
    previousBlockHash: previousBlockHash,
  };

  (this.newTransaction = []), this.chain.push(newBlock);
  return newBlock;
};
