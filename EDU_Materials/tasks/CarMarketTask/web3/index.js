if (typeof web3 !== 'undefined')
    web3 = new Web3(web3.currentProvider);
else
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const instance = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

function getCarDiller() {
    instance.methods.carDealer().call({from: web3.eth.accounts[2]}, (err, doc) => {
        console.log(err, doc);
        document.getElementById('car-owner').innerText = doc;
    });
}
// instance.events.BuyCar({
//     fromBlock: 0
// }, function(error, event){ console.log(error, event); })
//     .on('data', function(event){
//         console.log(event); // same results as the optional callback above
//     })
//     .on('changed', function(event){
//         console.log(changed)
//         // remove event from local database
//     })
//     .on('error', console.error);

async function addCar() {

    const car = {
        price: document.getElementById('price').value,
        manufacturer: document.getElementById('manufacturer').value,
        model: document.getElementById('model').value,
        config: document.getElementById('config').value,
        petrolConsumptionPerMile: document.getElementById('petrolConsumptionPerMile').value,
        signature: web3.utils.keccak256(web3.utils.stringToHex(document.getElementById('signature').value)),
        presence: $('input[name=presence]:checked', '#config').val()
    };

    instance.methods.addCar(
        car.price,
        car.manufacturer,
        car.model,
        car.config,
        car.petrolConsumptionPerMile,
        car.signature,
        car.presence
    ).send({from: (await web3.eth.getAccounts())[0], gas: 99999999999, gasPrice: 9999})
        .on('transactionHash', function(hash){
            alert(`Tx Hash: ${hash}`);
        })
        .on('receipt', function(receipt){
            console.log(receipt);
            alert(`Car Dealer: ${receipt.events.AddCar.returnValues.carDealer}`);
            alert(`Car ID: ${receipt.events.AddCar.returnValues.carID}`);
        })
        // .on('confirmation', function(confirmationNumber, receipt){
        //     console.log(confirmationNumber, receipt)
        // })
        .on('error', console.error);
}

async function buyCar() {
    const carID = document.getElementById('car-id').value;
    const value = document.getElementById('price-to-buy').value

    instance.methods.buyCar(carID).send({from: (await web3.eth.getAccounts())[8], value: value, gas: 99999999999, gasPrice: 9999})
    .on('transactionHash', function(hash){
        alert(`TX Hash: ${hash}`);
    })
    .on('receipt', function(receipt){
        console.log(receipt);
        alert(`Car ID: ${receipt.events.BuyCar.returnValues.carID}`);
        alert(`Car owner ID: ${receipt.events.BuyCar.returnValues.carOwnerID}`);
        if (receipt.events.NewCarOwner) {
            alert(`Car owner ID: ${receipt.events.NewCarOwner.returnValues.carOwnerID}`);
            alert(`Car owner address: ${receipt.events.NewCarOwner.returnValues.carOwnerAddress}`);
        }

    })
    // .on('confirmation', function(confirmationNumber, receipt){
    //     console.log(confirmationNumber, receipt)
    // })
    .on('error', console.error);
}

/**
 *  Should create random ethereum private key
 *  @return {string} ethereum private key
 */
function createNewAccount() {
    let params = {
        keyBytes: 32,
        ivBytes: 16
    };
    let dk = keythereum.create(params);

    return "0x" + dk.privateKey.reduce((memo, i) => {
        return memo + ('0' + i.toString(16)).slice(-2);
    }, '');
}

/**
 *  Should create address from private key
 *  @param {string} prvtKey ethereum privateKey
 *  @return {string} ethereum address
 */
function getAddress(prvtKey) {
    let privateKey = "";
    for(i = 2; i < prvtKey.length; i++) {
        privateKey += prvtKey[i];
    }
    return keythereum.privateKeyToAddress(privateKey);
}

/**
 *  Allows to get balance in Wei
 *  @param {string} address ethereum address
 *  @return {number} account balance in Wei
 */
function getBalance(address) {
    return web3.eth.getBalance(address).toNumber();
}

function signAndSendRawTx(nonce, data, from, callback) {
    const txParam = {
        // nonce: web3.eth.getTransactionCount(getAddress(from)),
        nonce: nonce,
        to: CONTRACT_ADDRESS,
        from: getAddress(from),
        data: data,
        gasPrice: 0x3b9bca00,
        // gasLimit: 4000000,
        gas: 210000
    };

    const tx = new ethereumjs.Tx(txParam);
    const privateKeyBuffer = ethereumjs.Buffer.Buffer.from(from.substring(2), 'hex');
    tx.sign(privateKeyBuffer);
    const serializedTx = tx.serialize();

    web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), (err, transactionHash) => {
        if (err) {
            console.log(err);
            callback(err, null);
            return;
        }
        callback(err, transactionHash);
    });
}

console.log(createNewAccount())