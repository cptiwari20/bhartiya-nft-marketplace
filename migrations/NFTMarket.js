const NftMarket = artifacts.require("NFTMarket");

module.exports = function (deployer) {
    const contractName = "NFTMarket"
    deployer.deploy(NftMarket)
    
    
    // .then(() => {
    //     const artifact = artifacts.require(`${contractName}.sol`);
    //     console.log(artifact)
    //     const metaDataFile = `${__dirname}/public/contracts/${contractName}.json`;
    //     const metaData = require(metaDataFile);
    //     metaData.networks[deployer.network_id] = {};
    //     metaData.networks[deployer.network_id].address = artifact.address;
    //     fs.writeFileSync(metaDataFile, JSON.stringify(metaData, null, 4));
    // })

};