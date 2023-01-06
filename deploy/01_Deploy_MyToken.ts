import { ethers } from "hardhat"
import { DeployFunction } from "hardhat-deploy/dist/types"

const deployFunction: DeployFunction = async ({ deployments }) => {
    const { log } = deployments
    const openZeppelinImplementationTokenContractFactory = await ethers.getContractFactory(
        "MyToken"
    )
    let initialSupply = "10000000000000000000000" // 10000 * 1e18

    log("Deploying token...")
    const openZeppelinImplementationToken =
        await openZeppelinImplementationTokenContractFactory.deploy(
            "OpenZeppelin Token",
            "OZT",
            initialSupply
        )
    await openZeppelinImplementationToken.deployed()
    log(`Token deployed to: ${openZeppelinImplementationToken.address}`)
    log("----------------------------------------------------")
}

export default deployFunction
deployFunction.tags = [`all`, `token`]
