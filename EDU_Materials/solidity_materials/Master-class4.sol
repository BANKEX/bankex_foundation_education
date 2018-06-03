pragma solidity ^0.4.22; 


contract SimpleInfo {

  address owner;

  mapping (bytes32 => string) data;

  constructor() {
    owner = msg.sender;
  }

  function sendNewOwner(address _newOwner) { // создаем функцию переопределения владельца  
    require(msg.sender == owner); // проверяем обладателя
    owner = _newOwner; // меняем на адрес нового
  }

  function getData(string _key) returns (string) {
    return data[keccak256(_key)];   
  }

  function setData(string _key, string _info) {
    require(msg.sender == owner);
    data[keccak256(_key)] = _info; 
  }
}


contract SimpleInfo2 {

  address owner;

  mapping (bytes32 => string) data;

  function SimpleInfo2() {
    owner = msg.sender;
  }

  modifier onlyOwner() {   // создали модификатор доступа
    require(msg.sender == owner);
     _;
  }

  function sendNewOwner(address _newOwner) onlyOwner { // создаем функцию переопределения владельца 
    owner = _newOwner; // меняем на адрес нового
  }

  function getData(string _key) returns (string) {      
    return data[keccak256(_key)];    
  }

  function setData(string _key, string _info) onlyOwner {
    require(msg.sender == owner);
    data[keccak256(_key)] = _info; 
  }

}
