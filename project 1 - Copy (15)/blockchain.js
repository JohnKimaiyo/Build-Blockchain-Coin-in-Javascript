function Blockchain(){
    this.chain = [];
    this.newTransaction =[];
}

Blockchain.prototype.createNewBlock = function(
    nonce,
    previousBlockHash,
    hash
){
    const newBlock = {
        index:this.chain.length + 1,
        timeestamp:Date.now(),
        transactions:this.newTransaction,
        nonce,
        previousBlochash:previousBlockHash,
    };
    (this.newTransaction=()),this.chain.push(newBlock);
    return newBlock;
};