var CarMarket = artifacts.require("./CarMarket.sol");

module.exports = function(deployer) {
  deployer.deploy(CarMarket);
};