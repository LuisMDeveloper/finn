require('dotenv').config();
let config = module.exports = {};

config.server = {
    port: process.env.PORT || 8000
};