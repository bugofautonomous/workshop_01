require("@nomicfoundation/hardhat-toolbox");
require('@nomicfoundation/hardhat-verify')

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
const INFURA_API_KEY = "8037bf9abc5546439cda4545b7f190d3";
const ETHERSCAN_API_KEY = 'ZAD6C7SJ2AQR9I9HS9SBHNPWAZG4RRGVA8';

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY = "73fea24632cf622796db184499653d4bb871a82f8c91aa5616b7f0f3c7e22052";

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: 'ZAD6C7SJ2AQR9I9HS9SBHNPWAZG4RRGVA8'
    
  }
};
