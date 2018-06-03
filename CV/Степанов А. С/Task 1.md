# Задача 1
### Исходный код
```sh
pragma solidity ^0.4.11;

//------------------------------------------------------------------------------------------------
// ERC20 Standard Token Implementation, based on ERC Standard:
// https://github.com/ethereum/EIPs/issues/20
// With some inspiration from ConsenSys HumanStandardToken as well
// Copyright 2017 BattleDrome
//------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------
// LICENSE
//
// This file is part of BattleDrome.
// 
// BattleDrome is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// BattleDrome is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with BattleDrome.  If not, see <http://www.gnu.org/licenses/>.
//------------------------------------------------------------------------------------------------

contract ERC20Standard {
	uint public totalSupply;
	
	string public name;
	uint8 public decimals;
	string public symbol;
	string public version;
	
	mapping (address => uint256) balances;
	mapping (address => mapping (address => uint)) allowed;

	//Fix for short address attack against ERC20
	modifier onlyPayloadSize(uint size) {
		assert(msg.data.length == size + 4);
		_;
	} 

	function balanceOf(address _owner) constant returns (uint balance) {
		return balances[_owner];
	}

	function transfer(address _recipient, uint _value) onlyPayloadSize(2*32) {
		require(balances[msg.sender] >= _value && _value > 0);
	    balances[msg.sender] -= _value;
	    balances[_recipient] += _value;
	    Transfer(msg.sender, _recipient, _value);        
    }

	function transferFrom(address _from, address _to, uint _value) {
		require(balances[_from] >= _value && allowed[_from][msg.sender] >= _value && _value > 0);
        balances[_to] += _value;
        balances[_from] -= _value;
        allowed[_from][msg.sender] -= _value;
        Transfer(_from, _to, _value);
    }

	function approve(address _spender, uint _value) {
		allowed[msg.sender][_spender] = _value;
		Approval(msg.sender, _spender, _value);
	}

	function allowance(address _spender, address _owner) constant returns (uint balance) {
		return allowed[_owner][_spender];
	}

	//Event which is triggered to log all transfers to this contract's event log
	event Transfer(
		address indexed _from,
		address indexed _to,
		uint _value
		);
		
	//Event which is triggered whenever an owner approves a new allowance for a spender.
	event Approval(
		address indexed _owner,
		address indexed _spender,
		uint _value
		);

    
}

contract NewToken is ERC20Standard {
	function NewToken() {
		totalSupply = 5000;
		name = "Bnkx Education Coin";
		decimals = 5;
		symbol = "BEC";
		version = "1.0";
		balances[msg.sender] = totalSupply;
	}
}
```
### Адрес контракта: 0x72eedfa073dc26f3aeb51e5d92be3ba183d3237d

### Ссылка: https://rinkeby.etherscan.io/address/0x72eedfa073dc26f3aeb51e5d92be3ba183d3237d

### Код контракта:
```sh
0x6060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100a9578063095ea7b31461013757806318160ddd1461017957806323b872dd146101a2578063313ce5671461020357806354fd4d501461023257806370a08231146102c057806395d89b411461030d578063a9059cbb1461039b578063dd62ed3e146103dd575b600080fd5b34156100b457600080fd5b6100bc610449565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100fc5780820151818401526020810190506100e1565b50505050905090810190601f1680156101295780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561014257600080fd5b610177600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506104e7565b005b341561018457600080fd5b61018c6105d1565b6040518082815260200191505060405180910390f35b34156101ad57600080fd5b610201600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506105d7565b005b341561020e57600080fd5b610216610847565b604051808260ff1660ff16815260200191505060405180910390f35b341561023d57600080fd5b61024561085a565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561028557808201518184015260208101905061026a565b50505050905090810190601f1680156102b25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156102cb57600080fd5b6102f7600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506108f8565b6040518082815260200191505060405180910390f35b341561031857600080fd5b610320610941565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610360578082015181840152602081019050610345565b50505050905090810190601f16801561038d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103a657600080fd5b6103db600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506109df565b005b34156103e857600080fd5b610433600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610b51565b6040518082815260200191505060405180910390f35b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104df5780601f106104b4576101008083540402835291602001916104df565b820191906000526020600020905b8154815290600101906020018083116104c257829003601f168201915b505050505081565b80600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35050565b60005481565b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101580156106a2575080600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b80156106ae5750600081115b15156106b957600080fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555080600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b600260009054906101000a900460ff1681565b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108f05780601f106108c5576101008083540402835291602001916108f0565b820191906000526020600020905b8154815290600101906020018083116108d357829003601f168201915b505050505081565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109d75780601f106109ac576101008083540402835291602001916109d7565b820191906000526020600020905b8154815290600101906020018083116109ba57829003601f168201915b505050505081565b60406004810160003690501415156109f357fe5b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610a425750600082115b1515610a4d57600080fd5b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3505050565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050929150505600a165627a7a723058207f0ec2cbbf58e909c508db78ea22bbf306c1161c367c058db3731e7b6c821d070029
```