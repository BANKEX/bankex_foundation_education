const CarMarket = artifacts.require("./CarMarket.sol");

const web3 = global.web3;

const tbn = v => web3.toBigNumber(v);
const fbn = v => v.toString();
const tw = v => web3.toBigNumber(v).mul(1e18);
const fw = v => web3._extend.utils.fromWei(v).toString();

const cars = [
    {
        price: tw('23'),
        manufacturer: 'BMW',
        model: 'x5',
        config: 5,
        petrolConsumptionPerMile: 9,
        signature: 0x24243231342314313423213,
        presence: true
    },
    {
        price: tw('12'),
        manufacturer: 'FIAT',
        model: 'a3',
        config: 2,
        petrolConsumptionPerMile: 3,
        signature: 0x2345342344313423213,
        presence: true
    },
    {
        price: tw('30'),
        manufacturer: 'Bentley',
        model: '98',
        config: 10,
        petrolConsumptionPerMile: 12,
        signature: 0x354675432434523234,
        presence: true
    },
];

const gasPrice = tw('3e-7');

contract('CarMarket', (accounts) => {
    const carDealer = accounts[1];

    const buyers = {
        account2: accounts[2],
        account3: accounts[3],
        account4: accounts[4],
        account5: accounts[5],
        account6: accounts[6],
        account7: accounts[7],
        account8: accounts[8]
    };

    beforeEach(async function () {
        carMarket = await CarMarket.new({from: carDealer});
    });

    describe('MAIN TEST', () => {
        it("should add new car to Market", async function () {
            let firstCar = cars[0];
            await carMarket.addCar(
                firstCar.price,
                firstCar.manufacturer,
                firstCar.model,
                firstCar.config,
                firstCar.petrolConsumptionPerMile,
                firstCar.signature,
                firstCar.presence,
                {from: carDealer}
            );
            let createdCar = await carMarket.cars(1);
            console.log(`
    Car price: ${fw(createdCar[0])}
    Car manufacturer: ${createdCar[1]}
    Car petrolConsumption: ${createdCar[2].toNumber()}
    Car signature: ${createdCar[3]}
    Car presence: ${createdCar[4]}
            `);
            assert(
                createdCar[0].eq(firstCar.price),
                firstCar.manufacturer == createdCar[1],
                createdCar[2].eq(firstCar.petrolConsumptionPerMile),
                createdCar[3] == firstCar.signature,
                firstCar.presence == createdCar[4]
            );
        });

        it("should buy car", async function () {
            let firstCar = cars[0];
            let tx = await carMarket.addCar(
                firstCar.price,
                firstCar.manufacturer,
                firstCar.model,
                firstCar.config,
                firstCar.petrolConsumptionPerMile,
                firstCar.signature,
                firstCar.presence,
                {from: carDealer}
            );

            await carMarket.buyCar(tx.logs[0].args.carID, {value: firstCar.price, from: buyers.account2});
            let carOwnerID = await carMarket.carOwner(buyers.account2, {from: buyers.account2});
            let carOwner = await  carMarket.carOwners(carOwnerID, {from: buyers.account2});
            console.log(
                'Buyer address: ' + carOwner[0],
                // 'Buyer\'s cars: ' + carOwner[1]
            );
            assert(
                carOwner[0] == buyers.account2
            );
        });
    });

    describe('CALC TEST', () => {

    });

    describe('OVERDRAFT TEST', () => {

    });

    describe('NEGATIVE TEST', () => {

    });
});