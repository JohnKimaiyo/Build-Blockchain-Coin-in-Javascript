function Blockchain() {
  this.chain = [];
  this.newTransaction = [];
}

Blockchain.prototype.creteBlock = function (nonce, previousBlockHash, hash) {
  const newBlock = {
    index: (this.chain.length = 1),
    timestamp: Date.now(),
    tranactions: this.newTransaction,
    nonce,
    previousBlochash: previousBlockHash,
  };

  (this.newTransaction = []), this.chain.push(newBlock);
  return newBlock;
};
