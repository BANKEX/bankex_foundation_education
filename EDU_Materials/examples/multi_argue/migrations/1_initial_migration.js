var Migrations = artifacts.require("./Migrations.sol");
var MultiArgue = artifacts.require("./MultiArgue.sol");
var SimpleArgue = artifacts.require("./SimpleArgue.sol");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(MultiArgue);
  await deployer.deploy(SimpleArgue);
};