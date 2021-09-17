const hre = require("hardhat");

async function main() {
  const Hubble = await hre.ethers.getContractFactory("HubbleToken");
  const hubble = await Hubble.deploy(100000)

  await hubble.deployed()

  const name = await hubble.name()
  const symbol = await hubble.symbol()
  const totalSupply = await hubble.totalSupply()


  console.log("Contract deployed at: ", hubble.address)
  console.log("Token name: ", name)
  console.log("Token symbol: ", symbol)
  console.log("Token total supply: ", hre.ethers.utils.formatEther(totalSupply))  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
