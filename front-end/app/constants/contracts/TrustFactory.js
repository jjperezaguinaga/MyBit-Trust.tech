export const ADDRESS = '0xc9bd64872245bc8a0e2d78bf7c95ea1046e9ab2f';
export const ABI = [
{
"constant": false,
"inputs": [
{
"name": "_beneficiary",
"type": "address"
},
{
"name": "_revokeable",
"type": "bool"
},
{
"name": "_blocksUntilExpiration",
"type": "uint256"
}
],
"name": "deployTrust",
"outputs": [],
"payable": true,
"stateMutability": "payable",
"type": "function"
},
{
"anonymous": false,
"inputs": [
{
"indexed": true,
"name": "_trustor",
"type": "address"
},
{
"indexed": true,
"name": "_beneficiary",
"type": "address"
},
{
"indexed": false,
"name": "_trustAddress",
"type": "address"
},
{
"indexed": false,
"name": "_amount",
"type": "uint256"
}
],
"name": "LogNewTrust",
"type": "event"
}
]
