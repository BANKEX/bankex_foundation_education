pragma solidity ^0.4.23;

contract IMultiArgue {
    function createArgueVote(uint256 _endTime, uint8 _argueType, address _argueContract) public returns(uint256);
    function approvedAddress(uint256 _argueNum, address _approvedAddress) public returns(bool);
    function setInvestSum(uint256 _argueNum, address _sender, uint256 _investSum) public returns(bool);
    function vote(uint256 _argueNum, uint8 _vote) public returns(bool);
    function getVote(uint256 _argueNum, address _voter) public view returns(uint8);
    function getGain(uint256 _argueNum) public view returns(uint256);
    function setWinners(uint256 _argueNum, uint8 _winner) public returns(bool);
    function releaseInterest(uint256 _argueNum, uint256 _value) public returns(bool);
    
    event CreateArgueVote(uint256 indexed argueNum, address indexed creater);
    event ApproveAddress(uint256 indexed argueNum, address indexed approvedAddress);
    event Vote(uint256 indexed argueNum, address indexed voter, uint8 indexed vote);
    event SetWinners(uint256 indexed argueNum, uint8 indexed winner);
    event ReleaseInterest(uint256 indexed argueNum, address indexed reciever, uint256 indexed value);
}

contract ISimpleArgue {
    function setArgueNum(uint256 _argueNum) public returns(bool);
    function setWinners(uint8 _winner) public returns(bool);
    function pay(address _reciever, uint256 _value) public returns(bool);
}

contract SimpleArgue is ISimpleArgue {
    address owner;
    address public multiArgueContractAddress;
    uint256 public argueNum;
    
    constructor(address _multiArgueContractAddress) {
        owner = msg.sender;
        multiArgueContractAddress = _multiArgueContractAddress;
    }
    
    function () payable {
        IMultiArgue multiArgue_contract = IMultiArgue(multiArgueContractAddress);
        require(multiArgue_contract.getVote(argueNum, msg.sender) == 0);
        multiArgue_contract.setInvestSum(argueNum, msg.sender, msg.value);
    }
    
    function setArgueNum(uint256 _argueNum) public returns(bool) {
        require(msg.sender == multiArgueContractAddress);
        argueNum = _argueNum;
        return true;
    }
    
    function setWinners(uint8 _winner) public returns(bool) {
        require(msg.sender == owner);
        IMultiArgue multiArgue_contract = IMultiArgue(multiArgueContractAddress);
        multiArgue_contract.setWinners(argueNum, _winner);
        return true;
    }
    
    function pay(address _reciever, uint256 _value) public returns(bool) {
        require(msg.sender == multiArgueContractAddress);
        _reciever.transfer(_value);
        return true;
    }
}