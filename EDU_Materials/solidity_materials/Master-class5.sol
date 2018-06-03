pragma solidity ^0.4.22; 

contract Own {

  address owner;

  constructor() {
    owner = msg.sender;
  }

  modifier onlyOwner() {   // создали модификатор доступа
    require(msg.sender == owner);
    _;
  }

  function sendNewOwner(address _newOwner) onlyOwner { // создаем функцию переопределения владельца       
    owner = _newOwner; // меняем на адрес нового
  }

}


contract InfoSender is Own { // наследуем контракт доступа 

  mapping (bytes32 => string) data;

  function setData(string _key, string _info) onlyOwner {
    data[keccak256(_key)] = _info; 
  }

  function getData(string _key) constant returns(string) {
    return data[keccak256(_key)];
  }
}