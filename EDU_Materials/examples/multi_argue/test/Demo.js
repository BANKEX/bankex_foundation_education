const MultiArgue = artifacts.require("./contracts/MultiArgue.sol");
const SimpleArgue = artifacts.require("./contracts/SimpleArgue.sol");

contract('MultiArgue', (accounts) => {

    //initial params for testing

    beforeEach(async function() {
        multi_argue = await MultiArgue.new({from: accounts[0]});
        simple_argue = await SimpleArgue.new(multi_argue.address, {from: accounts[1]});
    });

    it("should createArgueVote", async function() {
        console.log(simple_argue.address);
        await multi_argue.createArgueVote(Date.now(), 0, simple_argue.address);
        // assert();
    })
})
