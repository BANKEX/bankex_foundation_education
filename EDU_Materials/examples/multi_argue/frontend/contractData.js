const CONTRACT1_ABI_ARRAY = [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_argueNum",
                    "type": "uint256"
                },
                {
                    "name": "_approvedAddress",
                    "type": "address"
                }
            ],
            "name": "approvedAddress",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_endTime",
                    "type": "uint256"
                },
                {
                    "name": "_argueType",
                    "type": "uint8"
                },
                {
                    "name": "_argueContract",
                    "type": "address"
                }
            ],
            "name": "createArgueVote",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "argueNum",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "creater",
                    "type": "address"
                }
            ],
            "name": "CreateArgueVote",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "argueNum",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "approvedAddress",
                    "type": "address"
                }
            ],
            "name": "ApproveAddress",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_argueNum",
                    "type": "uint256"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "releaseInterest",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_argueNum",
                    "type": "uint256"
                },
                {
                    "name": "_sender",
                    "type": "address"
                },
                {
                    "name": "_investSum",
                    "type": "uint256"
                }
            ],
            "name": "setInvestSum",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_argueNum",
                    "type": "uint256"
                },
                {
                    "name": "_winner",
                    "type": "uint8"
                }
            ],
            "name": "setWinners",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_argueNum",
                    "type": "uint256"
                },
                {
                    "name": "_vote",
                    "type": "uint8"
                }
            ],
            "name": "vote",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "argueNum",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "voter",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "vote",
                    "type": "uint8"
                }
            ],
            "name": "Vote",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "argueNum",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "winner",
                    "type": "uint8"
                }
            ],
            "name": "SetWinners",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "argueNum",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "reciever",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "ReleaseInterest",
            "type": "event"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_argueNum",
                    "type": "uint256"
                }
            ],
            "name": "getGain",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_argueNum",
                    "type": "uint256"
                },
                {
                    "name": "_voter",
                    "type": "address"
                }
            ],
            "name": "getVote",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "investSum",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "votes",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "voteWin",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
];

const DATA1 = '0x608060405234801561001057600080fd5b5061156b806100206000396000f3006080604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630d7adbc0146100b45780631dadcc45146101035780632dcd4e41146101645780638ffbb9b1146101a5578063928e1ece146101f7578063943e82161461026557806395df45e4146102b7578063bbbf46221461031c578063bc3f931f1461038b578063c1441b09146103f2578063d23254b414610439575b600080fd5b3480156100c057600080fd5b506100e960048036038101908080359060200190929190803590602001909291905050506104a0565b604051808215151515815260200191505060405180910390f35b34801561010f57600080fd5b5061014e60048036038101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061078a565b6040518082815260200191505060405180910390f35b34801561017057600080fd5b5061018f600480360381019080803590602001909291905050506107af565b6040518082815260200191505060405180910390f35b3480156101b157600080fd5b506101dd60048036038101908080359060200190929190803560ff1690602001909291905050506107e3565b604051808215151515815260200191505060405180910390f35b34801561020357600080fd5b5061024f60048036038101908080359060200190929190803560ff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108da565b6040518082815260200191505060405180910390f35b34801561027157600080fd5b5061029d60048036038101908080359060200190929190803560ff169060200190929190505050610b01565b604051808215151515815260200191505060405180910390f35b3480156102c357600080fd5b5061030260048036038101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e07565b604051808215151515815260200191505060405180910390f35b34801561032857600080fd5b5061037160048036038101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f2d565b604051808215151515815260200191505060405180910390f35b34801561039757600080fd5b506103d660048036038101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061105e565b604051808260ff1660ff16815260200191505060405180910390f35b3480156103fe57600080fd5b5061041d60048036038101908080359060200190929190505050611133565b604051808260ff1660ff16815260200191505060405180910390f35b34801561044557600080fd5b5061048460048036038101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611153565b604051808260ff1660ff16815260200191505060405180910390f35b600080600260008581526020019081526020016000205442101515156104c557600080fd5b6008600085815260200190815260200160002060009054906101000a900460ff1660ff166007600086815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1660ff1614151561055657600080fd5b60006105628533611182565b11151561056e57600080fd5b6004600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663c407687633856040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561064757600080fd5b505af115801561065b573d6000803e3d6000fd5b505050506040513d602081101561067157600080fd5b8101908080519060200190929190505050506106e683600c600087815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461149890919063ffffffff16565b600c600086815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550823373ffffffffffffffffffffffffffffffffffffffff16857f0b8d5a44a2545cef7e6d187400188ca406b29ee6ee13303f89458d662eac3d4760405160405180910390a4600191505092915050565b600b602052816000526040600020602052806000526040600020600091509150505481565b60006002600083815260200190815260200160002054421115156107d257600080fd5b6107dc8233611182565b9050919050565b600060026000848152602001908152602001600020544211151561080657600080fd5b6004600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561087357600080fd5b816008600085815260200190815260200160002060006101000a81548160ff021916908360ff1602179055508160ff16837f658d038dfd3a1248782e747e27e13157957a201c5b567ff7ec376ea1f905f80d60405160405180910390a36001905092915050565b6000806000806108f6600160005461149890919063ffffffff16565b9250426001600085815260200190815260200160002081905550866002600085815260200190815260200160002081905550846004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550339150816005600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550856003600085815260200190815260200160002060006101000a81548160ff021916908360ff160217905550826000819055508490508073ffffffffffffffffffffffffffffffffffffffff16639cce4ff4846040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b158015610a7457600080fd5b505af1158015610a88573d6000803e3d6000fd5b505050506040513d6020811015610a9e57600080fd5b8101908080519060200190929190505050508173ffffffffffffffffffffffffffffffffffffffff16837f3f0f16b69bc1f17eeff2fd2759a38c1b3a42ab71480444bc84310c24e9c84d4e60405160405180910390a38293505050509392505050565b600080600260008581526020019081526020016000205442101515610b2557600080fd5b60016003600086815260200190815260200160002060009054906101000a900460ff1660ff161415610bc257600115156006600086815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515141515610bc157600080fd5b5b600060ff166007600086815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1660ff16141515610c3457600080fd5b600260ff168360ff161480610c4f5750600160ff168360ff16145b1515610c5a57600080fd5b600b600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600081111515610cbc57600080fd5b600160ff168360ff161415610d0d57610cf181600960008781526020019081526020016000205461149890919063ffffffff16565b6009600086815260200190815260200160002081905550610d4b565b610d3381600a60008781526020019081526020016000205461149890919063ffffffff16565b600a6000868152602001908152602001600020819055505b826007600086815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360ff1602179055508260ff163373ffffffffffffffffffffffffffffffffffffffff16857fe4cb5fdde90708dcd00ddb58b9b33a631db90db5fc195227ff5c7657700115b460405160405180910390a4600191505092915050565b60006005600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e7657600080fd5b60016006600085815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16837fe412586c0d1a0dbe4ea2dc6f4da5c45aeb8c9ffc1147a5421fb2febfd3b189a760405160405180910390a36001905092915050565b60006004600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610f9c57600080fd5b610fff82600b600087815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461149890919063ffffffff16565b600b600086815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600190509392505050565b60006004600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156110cd57600080fd5b6007600084815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60086020528060005260406000206000915054906101000a900460ff1681565b60076020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b60006008600084815260200190815260200160002060009054906101000a900460ff1660ff166007600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1660ff1614151561121557600080fd5b600160ff166008600085815260200190815260200160002060009054906101000a900460ff1660ff16141561136d57611366600c600085815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611358600960008781526020019081526020016000205461134a6112eb600a60008a815260200190815260200160002054600960008b81526020019081526020016000205461149890919063ffffffff16565b600b60008a815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114b690919063ffffffff16565b6114f190919063ffffffff16565b61152690919063ffffffff16565b9050611492565b61148f600c600085815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611481600a600087815260200190815260200160002054611473611414600a60008a815260200190815260200160002054600960008b81526020019081526020016000205461149890919063ffffffff16565b600b60008a815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114b690919063ffffffff16565b6114f190919063ffffffff16565b61152690919063ffffffff16565b90505b92915050565b60008082840190508381101515156114ac57fe5b8091505092915050565b60008060008414156114cb57600091506114ea565b82840290508284828115156114dc57fe5b041415156114e657fe5b8091505b5092915050565b60008082848115156114ff57fe5b049050828481151561150d57fe5b06818402018414151561151c57fe5b8091505092915050565b600082821115151561153457fe5b8183039050929150505600a165627a7a72305820f9173c68e86f558cb875fa62f0bd3fda805061d858801435b0ca1e377b9c7ee90029';


const CONTRACT1_ADDRESS = '0xcbdc7188f747c2ebe94a582f9dfe9a89b36f28e9';

const CONTRACT2_ABI_ARRAY = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_reciever",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "pay",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_argueNum",
				"type": "uint256"
			}
		],
		"name": "setArgueNum",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_winner",
				"type": "uint8"
			}
		],
		"name": "setWinners",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "argueNum",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "multiArgueContractAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

const CONTRACT2_ADDRESS = '0xc492c7c93693bba0f0ff3dbb00ffc3d648b94bef';
