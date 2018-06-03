pragma solidity ^0.4.22; 

contract One {
  
  uint256 constant internal ONE = 1;
  
  function getOne() external view returns(uint256) {
    return(ONE);
  }
  
}

contract Two {
    
    address internal oneContractAddress;
    
    function setOneContractAddress_(address _contract) public returns(bool) {
      oneContractAddress = _contract;
      return true;
    }
    
    function getDataFromOneContract() public view returns(uint256) {
      require(oneContractAddress == 0);
      One myContract = One(oneContractAddress);
      return(myContract.getOne());
    }
}