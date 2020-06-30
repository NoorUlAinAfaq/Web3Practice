const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/e4d1e32fbc4c4484beb8fbf1bfcbc76a');

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
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "logString",
		"type": "event"
	}
]

const address = '0x4788604892a3ab8b87b9739b1bc28305b17192e9'

const contract = new web3.eth.Contract(abi, address)

contract.getPastEvents(
    'AllEvents',
    {
      fromBlock: 0,
      toBlock: 'latest'
    },
    (err, events) => { console.log(events) }
  )