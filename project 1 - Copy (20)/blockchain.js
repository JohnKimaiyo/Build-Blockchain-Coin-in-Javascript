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
    transactions: this.newTransaction,
    nonce,
    previousBlockHash: previousBlockHash,
  };

  (this.newTranasction = []), this.chain.push(newBlock);
  return newBlock;
};
