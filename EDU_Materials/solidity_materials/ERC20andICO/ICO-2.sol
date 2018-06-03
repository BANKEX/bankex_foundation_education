
pragma solidity ^0.4.18;


contract Sale {

    address owner;  // Владелец контракта
    address ethacc;
    uint hardcap;

    SimpleTokenCoin public token = new SimpleTokenCoin();

    uint start = 1511601091; // время начала продажи токенов в unix формате ( секунды от 1 января 1970 )
    uint interval = 31; // количество дней - длительность нашего ICO

    constructor() {
        owner = msg.sender;
    }

    modifier goodSale() {
        require(now > start && now < start + interval * 1 days); // проверяем, что функция вызвана в промежуток между стартом и окончанием 
        _;

    }

    modifier belowhardcap() {
        require(ethacc.balance <= hardcap); // смотрим, когда баланс на нужном аккаунте станет hardcap и потом выкидываем
        _;
    }

    function makeTokens() belowhardcap goodSale payable {
        owner.transfer(msg.value); // пересылаем содержимое на счет создателя
        token.mint(msg.sender, msg.value); //  создаем токены на аккаунте владельца
    }


    function() external payable { // модификатор payable, который говорит о том, что наша функция принимает деньги
        makeTokens();
    }


}

contract Ownable {
    
    address owner;
    
    function Ownable() {
      owner = msg.sender;
    }

    modifier onlyOwner() {
      require(msg.sender == owner);
      _;
    }

    function transferOwnership(address newOwner) onlyOwner {
      owner = newOwner;
    }
    
}

 contract  SimpleTokenCoin  is Ownable  {
    string public constant name = "Simple Coin Token";
    string public constant symbol = "SCT";
    uint32 public constant decimals = 18;
    uint public totalSupply = 0; // Basic amount of money
    mapping (address => uint) balances; // list of balances of our token
    mapping (address => mapping(address => uint)) allowed; // list if accounts who are allowed to make operation with account 
    
    function mint(address _to, uint _value) onlyOwner {
      assert(totalSupply + _value >= totalSupply && balances[_to] + _value >= balances[_to]); //assert do the same as require but for internal errors
      balances[_to] += _value; 
      totalSupply += _value;
    }
    
    function balanceOf(address _owner) constant returns (uint balance) {
      return balances[_owner];
    }

    function transfer(address _to, uint _value) returns (bool success) {
      if(balances[msg.sender] >= _value && balances[_to] + _value >= balances[_to]) { // check that accouts have that money and there aren't any problems with negative balances on both sides
        balances[msg.sender] -= _value; 
        balances[_to] += _value;
        Transfer(msg.sender, _to, _value);
        return true;
      } 
        return false;
    }
    
    function transferFrom(address _from, address _to, uint _value) returns (bool success) {
      if( allowed[_from][msg.sender] >= _value && balances[_from] >= _value && balances[_to] + _value >= balances[_to]) {
          allowed[_from][msg.sender] -= _value;
          balances[_from] -= _value; 
          balances[_to] += _value;
          Transfer(_from, _to, _value);
          return true;
        } 
        return false;
    }
    
    function approve(address _spender, uint _value) returns (bool success) {
      allowed[msg.sender][_spender] = _value;
      Approval(msg.sender, _spender, _value);
      return true;
    }
    
    function allowance(address _owner, address _spender) constant returns (uint remaining) {
        return allowed[_owner][_spender];
    }
    
    event Transfer(address indexed _from, address indexed _to, uint _value);
    event Approval(address indexed _owner, address indexed _spender, uint _value);
    // ERC20 TOKEN 
}