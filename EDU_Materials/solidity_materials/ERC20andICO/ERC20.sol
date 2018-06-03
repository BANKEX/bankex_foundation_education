
pragma solidity ^0.4.22;

// Контракт для авторских прав
contract Ownable {

    address public owner; // Создаём адрес владельца контракта

    // Определяем конструктор контракта, где указываем, что владелец контракта тот, кто его первый раз запустил (ваш кэп)
    constructor() public {
        owner = msg.sender;    
    }

    // Создаём модификатор для разрешения прав доступа
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    // Создаём функцию, которая позволяет сменить владельца контракта
    function transferOwnership(address newOwner) public onlyOwner {
        owner = newOwner;
    }

}

// Собственно сам контракт токена по стандарту ERC20
contract SimpleTokenCoin is Ownable {

  string public constant name      = "Simple Coin Token"; // Название токена
  string public constant symbol    = "SCT";               // Сокращённое название монетки
  uint256 public constant decimals = 18;                  // Кол-во знаков после запятой
    
  uint public totalSupply = 0;                              // Текущее предложение
  mapping(address => uint) balances;                        // Балансы пользователей
  mapping(address => mapping (address => uint256)) allowed; // Разрешения на пользование своими средствами другим людям

    // Чеканим монеточки. Это может сделать только владелец контракта
  function mint(address _to, uint _value) public onlyOwner {
    assert(totalSupply + _value >= totalSupply && balances[_to] + _value >= balances[_to]); // Проверяем на переполнение переменных
    balances[_to] += _value;                                                                // Прибавляем токены к аккаунту  
    totalSupply += _value;                                                                  // Прибавляем это же кол-во к общему предложению
  }
    
    // Функция для проверки балансов
  function balanceOf(address _owner) public constant returns (uint balance) {
    return balances[_owner];
  }
    
    // Функция, с помощью которой ты можешь отправить кому-то средства
  function trasfer(address _to, uint256 _value) public returns (bool success) {
        // Проверяем в начале на наличие таких средств, которые хочешь отправить. Потом на переполнение переменной
    if (balances[msg.sender] >= _value && balances[_to] + _value >= balances[_to]) {
      balances[msg.sender] -= _value;    // Отнимаем баланс отправителя
      balances[_to] += _value;           // Добавялем к балансу, который получает
      Transfer(msg.sender, _to, _value); // Создаём событие трансфера
      return true;
    }
      return false;
    }

    // Функция отправки с другого адреса, если есть к нему доступ
    function transferFrom (address _from, address _to, uint256 _value) public returns(bool success) {
        // Проверяем на наличие средств на адресе, на переполнение и на доступ к средствам на адресе
      if (balances[_from] >= _value && balances[_to] + _value >= balances[_to] && allowed[_from][_to] >= _value) {   
        allowed[_from][_to] -= _value; // Отнимаем доступные нам средства адреса
        balances[_from] -= _value;     // Уменьшаем баланс адреса
        balances[_to] += _value;       // Увеличиваем балан адреса, которому отсылаем
        Transfer(_from, _to, _value);  // Создаём событие передачи от одного адреса к другому _value штук токенов
        return true;
      }
        return false; 
    }

    // Функция, которая даёт право другому адресу пользоваться определённым кол-вом токенов
    function approve(address _sender, uint _value) public returns (bool success) {
      allowed[msg.sender][_sender] = _value;  // Ограничиваем кол-во токенов лицу, которому доверяешь свои средства
      Approval(msg.sender, _sender, _value);  // Создаём событие передачи прав на токены
      return true;        
    }

    // Функция, которая показывает сколько средств осталось доступно адресу A с адреса Б
    function allowance(address _owner, address _sender) public constant returns (uint remaining) {
      return allowed[_owner][_sender];
    }

    event Transfer(address indexed _fron, address _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _sender, uint _value);
}