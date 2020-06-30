console.log(Web3);

//const rpcURL = "HTTP://127.0.0.1:7545";
const rpcURL = "https://ropsten.infura.io/v3/e4d1e32fbc4c4484beb8fbf1bfcbc76a";
let web3 = new Web3(rpcURL);
//ganache account address
//let address ="0x3bc84d49aEA467bDFa69Af69aEE19A361a56f107";
// ropsten account address
let address ="0x5337ceb203893929c2b155a8c864a566e417177c";
 let abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "number",
				"type": "uint256"
			}
		],
		"name": "double",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
]

const contract =  new web3.eth.Contract(abi,address);
console.log(contract);

contract.methods.double(4).call(function(err,result)
{
    console.log("result",result);
});