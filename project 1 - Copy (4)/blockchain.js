function Blockchain(){
    this.chain=[];
    this.newTransaction=[];
}


Blockchain.prototype.createBlock = function (
    nonce,
    previousBlockmain,
    hash
 ) {
const newBlock ={
    index:this.chain.length + 1,
    timestamp:Date.now(),
    transactions:this.newTransaction,
    nonce,
    previousBlockHash:prevousBlockHash,
};

(this.newTransaction = []),this.chain.push(newBlock);
return newBlock;

};