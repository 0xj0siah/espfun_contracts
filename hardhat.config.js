require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    version: "0.8.30",
    settings: {
      optimizer: {
        enabled: true,
        runs: 400
      }
    }
  },
  networks: {
    hardhat: {
    },
    monad: {
      url: "https://testnet-rpc.monad.xyz",
      chainId: 10143
    }
  }
};
