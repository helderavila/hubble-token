async function main() {
  const Hubble = await hre.ethers.getContractFactory("HubbleToken");
  const hubble = await Hubble.deploy(100000)
  await hubble.deployed()

  console.log("Contract deployed at: ", hubble.address)
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error)
  process.exit(1)
})