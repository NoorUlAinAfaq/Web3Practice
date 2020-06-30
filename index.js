const Web3 = require("web3");
console.log(Web3);

const rpcURL = "HTTP://127.0.0.1:7545";
let web3 = new Web3(rpcURL);
console.log(web3);
let balance;
const address = "0x9e76522Ec7C285d077af539EE0BC8d36B7f6720d";
web3.eth.getBalance(address, (err, wei) => {
    balance = web3.utils.fromWei(wei, 'ether')
    console.log("wei ",wei);
    console.log("balance ",balance);
  })
  