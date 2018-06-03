pragma solidity ^0.4.22; 

contract Visability {
  
  uint256 constant internal ONE = 1;
  uint256 constant internal TWO = 2;
  uint256 constant internal THREE = 3;
  uint256 constant internal FOUR = 3;
  
  function getConstantOne() public view returns(uint256) {
    return ONE;
  }
  
  function getConstantTwo_() internal view returns(uint256) {
    return TWO;
  }
  
  function getConstantThree_() private view returns(uint256) {
    return THREE;
  }
  
  function getConstantFour() external view returns(uint256) {
    return FOUR; 
  }
  
  /**
  * @dev good example
  */
  function getTwoAndThree() public view returns(uint256, uint256) {
    return(getConstantTwo_(), getConstantThree_());
  }
  
  /**
  * @dev bad example
  */
  function getOneBad() public view returns(uint256) {
      return(getConstantOne());
  }
 
//   /**
//   * @dev didn't work at all
//   */
//   function getFour() view public returns(uint256) {
//       return(getConstantFour());
//   }

}