pragma solidity ^0.4.22; 


contract HelloWorld {    // объявление контракта + Имя

  function getData() view returns (string) {   // имя() описание того, меняет ли состояние и возвращаемое значение
    return "Hello, world!"; // возвращает Hello, world!
  }
}

contract HelloworldNext {

  string ourString = "Hello, world!"; // создание строки ourString и присваение значения по умолчению

  function getData() view returns (string) {// имя() описание, меняет ли она состояние и возвращаемое значение
    return ourString; // возвращает ourString
  }

  function setData(string _input) { // имя(тип данных название)
    ourString = _input; // присваиваем нашей переменной ourString значение входной строки newData
  }
}
