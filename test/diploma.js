const Diploma = artifacts.require("Diploma");

contract("Diploma test", async accounts => {
    it("check that the balance increase", async () => {
        // get the first account
        let account = accounts[0];
        // retrieve the deployed contract
        const contract = await Diploma.deployed();
        // get the balance before the operation
        let balanceBefore = await contract.getBalance.call(account);
        // Send 1 gwei
        await contract.sendMoney({from: account, value: 1});
        // Get the balance after the gwei was sent
        let balanceAfter = await contract.getBalance.call(account);
        // Check if the balance after is equal to the balance before plus 1
        assert.equal(
            balanceAfter.toString(),
            parseInt(balanceBefore.toString())+1,
            "Wrong balance value after spending 1 gwei"
        );
    });
});