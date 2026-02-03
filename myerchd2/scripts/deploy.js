const hre = require("hardhat");

async function main() {
    const [owner] = await hre.ethers.getSigners();

    const Token = await
        hre.ethers.getContractFactory("MyToken");
    const token = await Token.deploy(owner.address);

    await token.waitForDeployment();

    console.log("Token deployed to:", await token.getAddress());

}

    main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });