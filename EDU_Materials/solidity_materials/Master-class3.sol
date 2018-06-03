pragma solidity ^0.4.22; 

// возникает проблема того, что кто-то может изменить значения в нашем контракте. 
// Мы хотим, чтобы только мы или нужные нам люди могли это делать.
// давайте это решим:

contract MyInfo {

  mapping (bytes32 => string) data;

  address owner; // тип переменной адрес, создаем переменную обладатель

  function MyInfo() {
    owner = msg.sender; // присваиваем обладателю адрес создателя контракта, через структуру msg    
  }

  function setData(string _key, string _info) {
    require(msg.sender == owner); // если условие не выполняется, то вылетаем из функции
    data[keccak256(_key)] = _info;
  }

  function getData(string _key) constant returns(string) {
    return data[keccak256(_key)];
  }
}
