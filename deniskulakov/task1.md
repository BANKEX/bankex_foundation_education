# Task 1. DKS token

## Created smart contract in Rinkeby:
https://rinkeby.etherscan.io/address/0x5d02b9f7f8ea7d9f0cea61d7d9a12086f97bb461

## Contract source code:
```
pragma solidity ^0.4.17;

import '../node_modules/zeppelin-solidity/contracts/token/StandardToken.sol';

contract DksToken is StandardToken {
    string public name = "DksToken";
    string public symbol = "DKS";
    uint8 public decimals = 2;
    uint public INITIAL_SUPPLY = 5000;

    function DksToken() public {
        totalSupply = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}
```
## DKS token transfer to 0xc011bf81E3F88931cf331856E45FaB6B6450E54C:
https://rinkeby.etherscan.io/tx/0x0fee5d3bdb753cfef47d01ab8392de49d0ae47b2e8cf8b4df8cecb265c48c556
