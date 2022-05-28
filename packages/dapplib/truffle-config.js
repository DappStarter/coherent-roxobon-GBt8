require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remind evil journey kitchen orange talent'; 
let testAccounts = [
"0xa9cfaf42106c0ec624e3ab5bf510742ac523eb1f60b278a72e6ba445561fba95",
"0x98baa6dcd5e2746c6524cc6ffcc5ad052f37536a721508de80d68a6658b4a84a",
"0x61bb6dbdd0cfa282345d14af72e301c572e3c1ff71c207b1c13512a2d4a89b7f",
"0xa0a22fb3f625a35d90e539902889f5fb0491924e60ed24fa156bbe399c611b01",
"0x33891b7112f1e569d96756e39e4c0503c44a4f2b5d39b6f3c521a0829a21ae83",
"0x53b39a0925ec40f8dde6de5fd43c0d30b26377869bd945764164bb9003a8d504",
"0xd3a36ccb775d4847dce365eb810fc087c873cf0ad6eb1ad947a8ab0a06699076",
"0x70a41e3f0192e11684bb46d00e07e13fe4b374417985204daa1bcbbac946729c",
"0xc99d575ab13ca0b4e8933cc61d6793ce25af16e2f98998f2bbc1500182841ba1",
"0xef545f90ad7975f369af6a34dd95a6646792861081f833efa940c698a2c823aa"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

