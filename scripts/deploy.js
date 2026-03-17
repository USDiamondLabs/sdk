const hre = require("hardhat");

async function main() {
  const USDiamond = await hre.ethers.getContractFactory("USDiamond");
  const token = await USDiamond.deploy();

  await token.waitForDeployment();

  console.log("USDiamond deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
