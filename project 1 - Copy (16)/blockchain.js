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
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.newTransaction,
    nonce,
    previousBlockHash: previousHash,
  };

  (this.newTransaction = []), this.chainpush(newBlock);
  return newBlock;
};
