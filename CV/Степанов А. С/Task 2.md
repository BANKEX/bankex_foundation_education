# Задача 2
### Исходный код
```sh
pragma solidity ^0.4.19;

contract ERC721 {
    uint256 id = 1; 
    mapping(address => uint) private balances;
    
    function balanceOf(address _owner) constant returns (uint){
        return balances[_owner];
    }
    
    function transfer(address _to, uint256 _tokenId){
        address currentOwner = msg.sender;
        address newOwner = _to;
        require(currentOwner != newOwner);
        require(newOwner != address(0));
        balances[currentOwner] -= 1;
        balances[newOwner] += 1;
        Transfer(currentOwner, newOwner, _tokenId);
    }
    
    event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);
}
```
### Адрес контракта: 0x68d5B82F8e900A353852bF85a7567bA52Bb07033

### Ссылка: https://rinkeby.etherscan.io/address/0x68d5b82f8e900a353852bf85a7567ba52bb07033