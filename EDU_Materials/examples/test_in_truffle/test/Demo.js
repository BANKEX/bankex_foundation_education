const Demo = artifacts.require("./contracts/Demo.sol");

contract('Demo', (accounts) => {

    //initial params for testing

    beforeEach(async function() {
        d = await Demo.new( {from: accounts[0]});
    });

    it("should == owner  to acconts [0]", async function() {
        assert.equal((await d.owner()), accounts[0]);
    })

    it("should allow change owner", async function() {
        await d.changeOwner(accounts[1], {from: accounts[0]});
        assert.equal((await d.owner()), accounts[1]);
    })

    it("should allow owner to set value by key and return it", async function() {
        await d.setValue("1", "demo");
        assert.equal("demo", (await d.getValue("1")));
    })

})
