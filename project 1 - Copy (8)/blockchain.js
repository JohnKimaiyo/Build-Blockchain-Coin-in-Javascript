function Blockchain() {
  this.chain = [];
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
    transactions: thisnewTransaction,
    nonce,
    previousBlockhash: previousBlockHash,
  };

  (this.newTransaction = []), this.chain.push(newBlock);
  return newBlock;
};
