require('dotenv').config();
require('babel-register');
require('babel-polyfill');

const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: '*', // Match any network id
      gasPrice: 0x01,
    },
    coverage: {
      host: 'localhost',
      network_id: '*',
      port: 8555, // <-- If you change this, also set the port option in .solcover.js.
      gas: 0xfffffffffff, // <-- Use this high gas value
      gasPrice: 0x01 // <-- Use this low gas price
    },
    kovan: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, 'https://kovan.infura.io/' + process.env.INFURA_API_KEY, 1);
      },
      network_id: 42,
      gas: 5561260
    },
    rinkeby: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, 'https://rinkeby.infura.io/' + process.env.INFURA_API_KEY);
      },
      network_id: 4,
      gas: 4700000
    },
    ropsten: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, 'https://ropsten.infura.io/' + process.env.INFURA_API_KEY);
      },
      network_id: 2,
      gas: 5561260
    },
    sokol: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, 'https://sokol.poa.network');
      },
      gasPrice: 1000000000,
      network_id: 77
    },
    poa: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, 'https://core.poa.network');
      },
      gasPrice: 1000000000,
      network_id: 99
    }
  }
};
