const WingsTracker = artifacts.require("WingsTracker");

module.exports = async function(deployer) {
    await deployer.deploy(WingsTracker);
};