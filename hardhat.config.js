require("@nomiclabs/hardhat-waffle");
const { MAINNET_ENDPOINT, MUMBAI_ENDPOINT } = require('./config');

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: MUMBAI_ENDPOINT,
      accounts: []
    },
    mainnet: {
      url: MAINNET_ENDPOINT,
      accounts: []
    }
  },
  solidity: "0.8.4",
};
