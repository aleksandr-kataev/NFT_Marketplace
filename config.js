const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    MUMBAI_ENDPOINT: process.env.MUMBAI_ENDPOINT,
    MAINNET_ENDPOINT: process.env.MAINNET_ENDPOINT
}
