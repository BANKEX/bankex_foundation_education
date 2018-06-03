
var MultiArgue = web3.eth.contract(CONTRACT1_ABI_ARRAY);
var MultiArgueInstance = MultiArgue.at(CONTRACT1_ADDRESS);

var SimpleArgue = web3.eth.contract(CONTRACT2_ABI_ARRAY);
var SimpleArgueInstance = SimpleArgue.at(CONTRACT2_ADDRESS);

function createArgue(prvtKey, endTime, argueType, simpleArgueAddress) {
    let account = addAccount(prvtKey);
    MultiArgueInstance.createArgueVote(Number(endTime), Number(argueType), simpleArgueAddress, {from: account}, (err, txHash) => {
        console.log(txHash);
    });
}
