const { ethers } = require("hardhat");
require("dotenv").config({path: ".env"});

const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
    // Address of the whitelist contract that deployed in the previous module
    const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
    // URL from where we can extract the metadata for a Chicken NFT
    const metadataURL = METADATA_URL;
    /*
        A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
        so chickenContract here is a factory for instances of our Chicken contract.
    */
    const chickenContract = await ethers.getContractFactory("Chicken");

    // deploy the contract
    const deployedChickenContract = await chickenContract.deploy(
        metadataURL,
        whitelistContract
    );

    // print the address of the deployed contract
    console.log(
        "Chicken Contract Address:",
        deployedChickenContract.address
    );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });