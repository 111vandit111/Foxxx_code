//https://eth-ropsten.alchemyapi.io/v2/XqdHuuUATALuDfpUK-qaaO8gwyuNoc_Z

require('@nomiclabs/hardhat-waffle');

module.exports={
  solidity: '0.8.0',
  networks : {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/XqdHuuUATALuDfpUK-qaaO8gwyuNoc_Z',
      accounts:['fa18c1efd0faa05c7b7a4e1f5b6f24a17237543141ff672d9eb434d9fe845bd6']
    }
  }
}