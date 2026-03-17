const { expect } = require("chai");

describe("USDiamond", function () {
  it("Should deploy and mint initial supply", async function () {
    const USDiamond = await ethers.getContractFactory("USDiamond");
    const token = await USDiamond.deploy();

    const totalSupply = await token.totalSupply();
    expect(totalSupply).to.not.equal(0);
  });
});
