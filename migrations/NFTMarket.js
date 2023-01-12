const NftMarket = artifacts.require("NFTMarket");

module.exports = function (deployer) {
  deployer.deploy(NftMarket);
};