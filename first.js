console.log(Web3);

//const rpcURL = "HTTP://127.0.0.1:7545";
const rpcURL = "https://ropsten.infura.io/v3/e4d1e32fbc4c4484beb8fbf1bfcbc76a";
let web3 = new Web3(rpcURL);
//ganache account address
//let address ="0x3bc84d49aEA467bDFa69Af69aEE19A361a56f107";
// ropsten account address
let address ="0x69d96053Ec00Fa5413AAd33A19f9380CC7F75456";
web3.eth.getBalance(address, (err, wei) => {
    balance = web3.utils.fromWei(wei, 'ether')
    console.log("wei ",wei);
    console.log("balance ",balance);
  })