# sar-ubt-ERC-20-hardhat.S

# ERC-20 Contract (Hardhat Project)
<hr>
The goal of this project is to practice:
- ERC20 token development
- Openzeppelin imports
- Deployment on Etherscan testnets
- Writing clean and secure contracts

<hr>

## Features
- Standard ERC20 implementation
- Ownership control using 'Ownable'
- Minting available only for the owner
- Fully compitable with Metamask & Etherscan

<hr>

## Tech Stack
- Solidity `^0.8.x`
- Hardhat
- Openzeppelin Contracts
- Node.js + npm

<hr>

## Compile, testing and deployment with hardhat
- copy the github repo and clone into VSCode

Now `npm install`
then Create file by running `New-item .env`

In `.env` write:
SEPOLIA_RPC_URL=NoSpacingNoquotes
PRIVATE_KEY=NoSpacingNoQuotes

Ensure that, At the top of the file `hardhat.config.js` there was:
`require("dotenv").config();` is compulsory otherwise it's give you error
And after solidity version in `hardhat.config.js` there was:
`networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },`
  `SEPOLIA_RPC_URL` and `PRIVATE_KEY` values as it is like written in `.env`

Now you run:
`npx hardhat compile`
if succussfully compiled run:
`npx hardhat test`
if he passed
`npx hardhat run scripts/deploy.js --network sepolia`
