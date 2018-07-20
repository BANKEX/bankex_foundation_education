const ethUtil = require("ethereumjs-util");
const env = process.env;

// don't load .env file in prod
if (env.NODE_ENV !== 'production') {
    require('dotenv').load();
}



module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*", // Match any network id,
            gas: 4600000
        },
        ganache: {
            host: '127.0.0.1',
            port:8545,
            network_id: 5777,
            gas: 6721975
        },
        kovan: {
            host: 'localhost',
            port: 8545,
            network_id: 42,
            gas: 4700000,
            gasPrice: 20000000000
        },
        rinkeby: {
            provider: function() {
                let WalletProvider = require("truffle-wallet-provider");
                let wallet = require('ethereumjs-wallet').fromPrivateKey(Buffer.from(env.ETH_KEY, 'hex'));
                return new WalletProvider(wallet, "https://rinkeby.infura.io/" + env.INFURA_TOKEN)
            },
            network_id: 4
        },
        rinkeby_localhost: {
            host: "localhost", // Connect to geth on the specified
            port: 8545,
            network_id: 4,
            gas: 4612388,
            gasPrice: 20000000000,
            from: "0xf17f52151EbEF6C7334FAD080c5704D77216b732"
        },
        geth_dev: {
            host: "localhost", // Connect to geth on the specified
            port: 8545,
            network_id: 5777,
            gas: 4700000,
            gasPrice: 20000000000
        },
        solc: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        },
        migrations_directory: './migrations'
    }
};
