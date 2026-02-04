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
<br>

Now `npm install`
<br>
then Create file by running `New-item .env`
<br>

In `.env` write:
<br>
SEPOLIA_RPC_URL=NoSpacingNoquotes
<br>
PRIVATE_KEY=NoSpacingNoQuotes
<br>

Ensure that, At the top of the file `hardhat.config.js` there was:
<br>
`require("dotenv").config();` is compulsory otherwise it's give you error
<br>
And after solidity version in `hardhat.config.js` there was:
<br>
```JavaScript
<br>
networks: {
<br>
    sepolia: {
    <br>
      url: process.env.SEPOLIA_RPC_URL,
      <br>
      accounts: [process.env.PRIVATE_KEY],
      <br>
    },
    <br>
  },
  ```
  <br>
  `SEPOLIA_RPC_URL` and `PRIVATE_KEY` values as it is like written in `.env`
  <br>

Now you run:
<br>
`npx hardhat compile`
<br>
if succussfully compiled run:
<br>
`npx hardhat test`
<br>
if he passed
<br>
`npx hardhat run scripts/deploy.js --network sepolia`
<br>
