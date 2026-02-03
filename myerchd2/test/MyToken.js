const {expect} = require("chai");

describe("MyToken", function () {
    it("Should mint initial supply to owner", async function() {
        const [owner] = await ethers.getSigners();

        const Token = await
    ethers.getContractFactory("MyToken");
        const token = await Token.deploy(owner.address);
        await token.waitForDeployment();

        const balance = await
    token.balanceOf(owner.address);
        console.log("Owner balance:", balance.toString());

        expect(balance).to.be.gt(0);
    });
});