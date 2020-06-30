var Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/e4d1e32fbc4c4484beb8fbf1bfcbc76a');

const senderAccount = "0x69d96053Ec00Fa5413AAd33A19f9380CC7F75456";
const receiverAccount = "0x0D889F72b3FeD2bE2b7481b5B852d3DeB2bA578F";

const privateKeySender = "9075e9453da37172164db2cf643e3b659adf16c804946096a7de9c9f19d62c66";
const privateKeyReceiver = "765721D4FF7072A690670588DC753E63A8CB9940B8FD7515DAD6F6BCC5B278D4";

const privateKeySBuffer = Buffer.from(privateKeySender, 'hex');
const privateKeyRBuffer = Buffer.from(privateKeyReceiver, 'hex');

console.log("Buffer 1 = ",privateKeySBuffer);
console.log("Buffer 2 = ",privateKeyRBuffer);

web3.eth.getTransactionCount(senderAccount, (err, txCount)=>{

    
    const abi = [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "number",
                    "type": "uint256"
                }
            ],
            "name": "double",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getdouble",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]

    const contractAddress = "0x862a8e5abf0f3c3543d95974c51227df04d83740";
    const contract = new web3.eth.Contract(abi, contractAddress)
   
    const txObject = {
        nonce:    web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(800000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        to: contractAddress,
        data: contract.methods.double(4).encodeABI()
      }

    const transaction1 = new Tx(txObject, {chain: 'ropsten'});
    transaction1.sign(privateKeySBuffer);

    const serializedTx = transaction1.serialize();
    const raw = '0x' + serializedTx.toString('hex');

    console.log("transaction = ",transaction1);
    console.log("serializedTx = ",serializedTx);
    console.log("raw = ",raw);

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log('txHash:', txHash)
    });
    contract.methods.getdouble().call(function(err,result)
    {
        console.log("double", result)
    })
});


