require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan rifle spice provide gesture open force gas'; 
let testAccounts = [
"0x44ec563cfeb2687129cdb3aae9e2d9e8f2ea81af90d8780270c1550572f077df",
"0x15f12ecbdfd454c4194683bdc92aab5681e58711d0b5ddefb1ca68ecb1550e91",
"0xac4692694bc67f0db494f608ab556b6ee60494d1e75260cc3198ba8dd4ac3c59",
"0x7ea09d3bbda6199e5d9fbd88390faa1ee990f24b7d8092bdfab244627512f9f5",
"0x4ad5e53f7db9bc87db34a9ed4fdb35eaeff1d8544f65e82030c54284dfaffa57",
"0xb440938424542005ec4002c88d85015220949e380d7a3dfbcaac7cc7d81cc52b",
"0xd89a121a8fa712df2c6de8eacab7d3cb9a36ceaeb71764631f8d35cb4fb98528",
"0xdb958954584a13bf31aa3aedc4c00a98196f45ede3e975f12f7ac1a93ef7311e",
"0xb354aa0bed80d475eaea09558fe7b7c2ba7dc5d8934b12866b95303fb7e3e472",
"0xfe1af570ff283c162194b9576d362e3de1387b6058759527942d72b4ce49a251"
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

