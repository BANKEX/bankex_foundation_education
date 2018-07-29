const CONTRACT_ABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "carDealer",
        "outputs": [
            {
                "name": "",
                "type": "address"
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
                "type": "address"
            }
        ],
        "name": "carOwner",
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
                "type": "address"
            }
        ],
        "name": "isCarOwner",
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
                "name": "_carOwnerID",
                "type": "uint256"
            }
        ],
        "name": "getOwnerCars",
        "outputs": [
            {
                "name": "",
                "type": "uint256[6]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_carOwnerID",
                "type": "uint256"
            },
            {
                "name": "_discount",
                "type": "uint256"
            }
        ],
        "name": "setCarOwnerDiscount",
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
                "name": "_price",
                "type": "uint256"
            },
            {
                "name": "_manufacturer",
                "type": "string"
            },
            {
                "name": "_model",
                "type": "string"
            },
            {
                "name": "_config",
                "type": "uint256"
            },
            {
                "name": "_petrolConsumptionPerMile",
                "type": "uint256"
            },
            {
                "name": "_signature",
                "type": "bytes32"
            },
            {
                "name": "_presence",
                "type": "bool"
            }
        ],
        "name": "addCar",
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
        "constant": false,
        "inputs": [],
        "name": "releaseETH",
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
                "name": "_carID",
                "type": "uint256"
            }
        ],
        "name": "buyCar",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_carID",
                "type": "uint256"
            },
            {
                "name": "_presence",
                "type": "bool"
            }
        ],
        "name": "editPresence",
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
        "constant": true,
        "inputs": [],
        "name": "MAX_CARS_PER_PERSON",
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
        "name": "carOwners",
        "outputs": [
            {
                "name": "addr",
                "type": "address"
            },
            {
                "name": "discount",
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
            }
        ],
        "name": "cars",
        "outputs": [
            {
                "name": "price",
                "type": "uint256"
            },
            {
                "name": "manufacturer",
                "type": "string"
            },
            {
                "name": "petrolConsumptionPerMile",
                "type": "uint256"
            },
            {
                "name": "signature",
                "type": "bytes32"
            },
            {
                "name": "presence",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "carDealer",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "carID",
                "type": "uint256"
            }
        ],
        "name": "AddCar",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "carOnwerID",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "carOwnerAddress",
                "type": "address"
            }
        ],
        "name": "NewCarOwner",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "carID",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "carOwnerID",
                "type": "uint256"
            }
        ],
        "name": "BuyCar",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "carOwnerID",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "discount",
                "type": "uint256"
            }
        ],
        "name": "SetDiscount",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "carID",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "presence",
                "type": "bool"
            }
        ],
        "name": "EditPresence",
        "type": "event"
    }
];

const CONTRACT_ADDRESS = '0x159e7af9b7eb3b7f27ed93055b3bf7db07d12bd5';