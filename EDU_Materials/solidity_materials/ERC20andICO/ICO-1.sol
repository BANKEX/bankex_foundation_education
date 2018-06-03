pragma solidity ^0.4.18;


contract Sale {

    address owner;  // Владелец контракта

    SimpleCoinToken public token = new SimpleCoinToken();

    uint start = 1511604000; // время начала продажи токенов в unix формате ( секунды от 1 января 1970 )

    uint interval = 31; // количество дней - длительность нашего ICO

    uint kof = 60*60*24; //  проеобразуем дни в секунды

    constructor() {
      owner = msg.sender;
    }

    function() external payable { // модификатор payable, который говорит о том, что наша функция принимает деньги
      require(now > start && now < start + kof*interval); // проверяем, что функция вызвана в промежуток между стартом и окончанием 
      owner.transfer(msg.value); // пересылаем содержимое на счет создателя
      token.mint(msg.sender, msg.value); //  создаем токены на аккаунте
    }


}