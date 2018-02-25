pragma solidity ^0.4.11;

import "./ERC20Standard.sol";

contract CreateToken is ERC20Standard {
	function CreateToken() {
		totalSupply = 10000;
		name = "slime token";
		decimals = 1;
		symbol = "SLM";
		version = "1.0";
		balances[msg.sender] = totalSupply;
	}
}