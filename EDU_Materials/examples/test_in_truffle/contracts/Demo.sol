pragma solidity ^0.4.22; 

contract Demo {

  address public owner;    
    
  constructor() {
    owner = msg.sender;  
  }    
  
  mapping(bytes32=>string) table;
  
  modifier onlyOwner() {
    assert(owner == msg.sender);  
    _;  
  }
  
  function changeOwner(address _newOwner) onlyOwner returns(bool) {
    owner = _newOwner;
    return true;
  }
    
  function getValue(string _key) view returns(string) {
    return table[keccak256(_key)]; 
  }
  
  function setValue(string _key, string _value) onlyOwner returns(bool) {
    table[keccak256(_key)] = _value;
    return true;
  }
}