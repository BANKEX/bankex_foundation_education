module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    ganache: {
      host: '127.0.0.1',
      port: 8545,
      network_id: 5777,
      gas: 6721975
    },
  },
  migrations_directory: './migrations'
};
