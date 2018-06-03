pragma solidity ^0.4.22;


contract SimpleInfoCard {

  string name;
  string email;
  uint age;

  function getName() view returns(string) {
    return name;
  }

  function setName(string _input) {
    name = _input;
  }

  function getEmail() view returns(string) {
    return email;
  }

  function setEmail(string _input) {
    email = _input;
  }

  function getAge() view returns(uint) {
    return age;
  }

  function setAge(uint _input) {
    age = _input;
  }
}

// Каждый раз при добавлени новых данных - требуется новый контракт => создавать новый контракт =>  плохая идея
// Поэтому решили создать специальный массив, который позволяет по идентификатору (ключу) добавлять новые переменные
// Ну и вот демонстрация

contract SimpleInfo2 {

  mapping (bytes32 => string) data;  // массив data, в котором  по ключу тип bytes32 существует строка 
    
  function setData(string _key, string _info) { 
    data[keccak256(_key)] = _info; // присваиваем по ключу значение 
  }
    
  function getData(string _key) constant returns(string) {
    return data[keccak256(_key)]; // возвращаем по ключу значение
  }
}