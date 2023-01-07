import { ethers } from "hardhat"
import { DeployFunction } from "hardhat-deploy/dist/types"

const deployFunction: DeployFunction = async ({ getNamedAccounts, deployments }) => {
    const { log } = deployments
    const { deployer } = await getNamedAccounts()
    const myTokenFactory = await ethers.getContractFactory("MyToken")
    let initialSupply = "10000000000000000000000" // 10000 * 1e18

    log(`Deploying token with account ${deployer}`)
    const myToken = await myTokenFactory.deploy("OpenZeppelin Token", "OZT", initialSupply)
    await myToken.deployed()
    log(`Token deployed to: ${myToken.address}`)
    log("----------------------------------------------------")
}

export default deployFunction
deployFunction.tags = [`all`, `token`]
