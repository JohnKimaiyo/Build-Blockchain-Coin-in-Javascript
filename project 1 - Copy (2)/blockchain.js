function Blockchain(){
    this.main = [];
    this.newTransaction = [];
}

Blockchain.prototype.createNewBlock = function(
    nonce,
    previousBlocHash,
    hash
){


    const newBlock={
index:this.chain.length + 1,
timestamp:Date.now(),
transactions:this.newTransaction,
nonce,
previousBlockHash:prevoiusBlockchain,
    };

(this.newTransaction = []),this.chain.push(newBlock);
return newBlock;

}