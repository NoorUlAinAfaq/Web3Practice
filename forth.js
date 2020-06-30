var Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3')
const web3 = new Web3('http://127.0.0.1:7545');

const account1 = "0x9e76522Ec7C285d077af539EE0BC8d36B7f6720d";
const account2 = "0x4a99214f477A2e3E47fb300151E5cce0AA199Ce7";

const privateKey1 = "9b82ab2cba376de4609de852f4ef0d43829ee2578337249ec7fbd5d07f739bff";
const privateKey2 = "1b7211325b0e7593510c3ccc9419169a1d4d5a857c15f0cc6ececae4e312316e";

const privateKey1Buffer = Buffer.from(privateKey1, 'hex');
const privateKey2Buffer = Buffer.from(privateKey2, 'hex');

console.log("Buffer 1 = ",privateKey1Buffer);
console.log("Buffer 2 = ",privateKey2Buffer);

web3.eth.getTransactionCount(account1, (err, txCount)=>{

    const txObject = {
        nonce:    web3.utils.toHex(txCount),
        to:       account2,
        value:    web3.utils.toHex(web3.utils.toWei('3', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }

    const transaction1 = new Tx(txObject);
    transaction1.sign(privateKey1Buffer);

    const serializedTx = transaction1.serialize();
    const raw = '0x' + serializedTx.toString('hex');

    console.log("transaction = ",transaction1);
    console.log("serializedTx = ",serializedTx);
    console.log("raw = ",raw);

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log('txHash:', txHash)
    });

});
