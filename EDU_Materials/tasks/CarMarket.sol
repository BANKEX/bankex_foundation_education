pragma solidity ^0.4.21;

library SafeMath {

    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a * b;
        assert(a == 0 || c / a == b);
        return c;
    }

    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        // assert(b > 0); // Solidity automatically throws when dividing by 0
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold
        return c;
    }

    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        assert(b <= a);
        return a - b;
    }
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        assert(c >= a);
        return c;
    }

}

contract ICarMarket {
    uint8 constant public MAX_CARS_PER_PERSON = 6;
    uint8 constant internal NULL_CAR = 0;
    uint constant internal DECIMAL_MULTIPLIER = 1e18;
    uint8 constant internal NOT_CAR_OWNER = 0x0;
    uint8 constant internal CAR_OWNER = 0x1;
    bool constant internal IN_STOCK = true;
    bool constant internal OUT_OF_STOCK = false;

    address public carDealer;

    modifier onlyCarDealer() {
        require(carDealer == msg.sender);
        _;
    }

    function buyCar(uint _carID) payable public;
    function addCar(
        uint _price,
        string _manufacturer,
        string _model,
        uint _config,
        uint _petrolConsumptionPerMile,
        bytes32 _signature,
        bool _presence
    ) external returns  (bool);
    function setCarOwnerDiscount(uint _carOwnerID, uint _discount) external returns (bool);
    function getOwnerCars(uint _carOwnerID) external view returns (uint[MAX_CARS_PER_PERSON]);
    function editPresence(uint _carID, bool _presence) external returns (bool);

    event AddCar(address carDealer, uint carID);
    event NewCarOwner(uint carOnwerID, address carOwnerAddress);
    event BuyCar(uint carID, uint carOwnerID);
    event SetDiscount(uint carOwnerID, uint discount);
    event EditPresence(uint carID, bool presence);
}

contract CarsMarket is ICarMarket {
    using SafeMath for uint256;

    uint carID = 1;
    uint carOwnerID = 1;
    mapping (uint => Car) public cars;
    mapping (uint => CarOwner) public carOwners;
    mapping (address => uint) carOwner;
    mapping (address => uint8) isCarOwner;

    constructor () public {
        carDealer = msg.sender;
    }

    struct CarOwner {
        address addr;
        uint discount;
        uint[MAX_CARS_PER_PERSON] carIDs;
    }

    struct Car {
        uint price;
        string manufacturer;
        mapping (bytes32 => uint) configOfModel;
        uint petrolConsumptionPerMile;
        bytes32 signature;
        bool presence;
    }

    function buyCar(uint _carID) payable public {
        require(carDealer != msg.sender);
        require(_carID != NULL_CAR);
        require(_carID < carID);
        Car storage c = cars[_carID];
        require(c.presence == IN_STOCK);
        uint _carPrice = c.price;
        if (isCarOwner[msg.sender] == NOT_CAR_OWNER) {
            require(msg.value >= _carPrice);
            uint _newCarOwnerID = carOwnerID;
            isCarOwner[msg.sender] = CAR_OWNER;
            CarOwner storage _newCarOwner = carOwners[_newCarOwnerID];
            _newCarOwner.addr = msg.sender;
            _newCarOwner.carIDs = [_carID];
            carOwner[msg.sender] = _newCarOwnerID;
            emit NewCarOwner(_newCarOwnerID, msg.sender);
            carOwnerID = carOwnerID.add(0x1);
        } else {
            uint _carOwnerID = carOwner[msg.sender];
            CarOwner storage _carOwner = carOwners[_carOwnerID];
            if (_carOwner.discount > 0)
                _carPrice = _carPrice.sub(_carPrice.mul(_carOwner.discount).div(DECIMAL_MULTIPLIER));
            require(msg.value >= _carPrice);
            require(_carOwner.carIDs[MAX_CARS_PER_PERSON-1] == NULL_CAR);
            for (uint i = 0; i < MAX_CARS_PER_PERSON; i++) {
                if (_carOwner.carIDs[i] != NULL_CAR)
                    continue;
                _carOwner.carIDs[i] = _carID;
                break;
            }
        }
        uint _remainValue = msg.value.sub(_carPrice);
        if (_remainValue > 0)
            msg.sender.transfer(_remainValue);
        emit BuyCar(_carID, _carOwnerID);
    }

    function addCar(
        uint _price,
        string _manufacturer,
        string _model,
        uint _config,
        uint _petrolConsumptionPerMile,
        bytes32 _signature,
        bool _presence
    ) external onlyCarDealer returns  (bool) {
        Car storage c = cars[carID];
        c.price = _price;
        c.manufacturer = _manufacturer;
        c.configOfModel[keccak256(abi.encodePacked(_model))] = _config;
        c.petrolConsumptionPerMile = _petrolConsumptionPerMile;
        c.signature = _signature;
        c.presence = _presence;
        emit AddCar(msg.sender, carID);
        carID = carID.add(0x1);
        return true;
    }

    function setCarOwnerDiscount(uint _carOwnerID, uint _discount) external onlyCarDealer returns (bool) {
        require(_discount >= DECIMAL_MULTIPLIER/100 && _discount <= DECIMAL_MULTIPLIER);
        require(_carOwnerID < carID);
        carOwners[_carOwnerID].discount = _discount;
        emit SetDiscount(_carOwnerID, _discount);
        return true;
    }

    function editPresence(uint _carID, bool _presence) external onlyCarDealer returns (bool) {
        Car storage c = cars[_carID];
        require(c.presence != _presence);
        c.presence = _presence;
        emit EditPresence(_carID, _presence);
        return true;
    }

    function getOwnerCars(uint _carOwnerID) external view returns (uint[MAX_CARS_PER_PERSON]) {
        return carOwners[_carOwnerID].carIDs;
    }
}
