function Blockchain() {
  this.main = [];
  this.newTransaction = [];
}

Blockchain.prototype.createNewBlock = function (
  nonce,
  previousBlockHash,
  hash
) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.newTransaction,
    nonce,
    prevousBlockhash: previousBlockHash,
  };

  (this.newTransaction = []), this.chain.push(newBlock);
  return newBlock;
};
