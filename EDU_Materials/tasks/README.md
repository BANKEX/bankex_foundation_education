# Car Market contract
### Task 1: Data structures
1. Create **Car** and **CarOwner** structures.
The first one should includes the following properties:
```
1) price
2) manufacturer
3) configOfModel as mapping (model => number of config)
4) petrolConsumptionPerMile
5) signature
6) presence
```
The second one should contains the following properties:
```
1) addr
2) discount
3) carIDs
```
2. Create next variables:
```
1) carDealer
2) carID (this variable should starts from 1)
3) carOwnerID (this variable should starts from 1)
4) cars mapping (carID => car)
5) carOwners mapping (carOwnerID => car owner)
6) carOwner mapping (owner's address => carOwnerID)
```
**Prompt:** `carIDs` property in `CarOwner` structure should stores only `MAX_CARS_PER_PERSON` unique identifiers.
### Task 2: Library
Add `SafeMath` library to `CarMarket` contract.
### Task 3: Setter function
Create function which will creates new Car object. Call it as `addCar`.
1. Get `c` variable type `Car` declared as a storage pointer.
2. Add all properties to `Car` object.
3. Increment `carID` variable.
### Task 4: Modifier. Require statement.
Create `onlyCarDealer` modifier that will allows to give access only for `carDealer`.
Add this modifier to `addCar` function.
### Task 5: Payable function. Msg.sender, msg.value. Conditional statements. Loop. Transfer method.
Create `payable` function called `buyCar` with one parameter called `_carID`. This function will accept ETH from buyers.

First, we prepare the variables for our function:
1. Let's say that `carID == 0` is a empty index that doesn't contain any car. It will come in handy in the future to get buyer's cars. Create variable `NULL_CAR` with zero value.
2. Create `NOT_CAR_OWNER` variable with zero value.
   And `CAR_OWNER` variable with value `1`.
   Create mapping `isCarOwner` there person address => person state.
   If person has never bought any car his person state will be NOT_CAR_OWNER, else - CAR_OWNER.
3. Create `DECIMAL_MULTIPLIER` variable with value `1e18`. This variable will need us for calculating later.
4. Create `IN_STOCK` and `OUT_OF_STOCK` variables with values `true` and `false` respectively.

Let's start to code our `buyCar` function:
1. The `carDealer` can't buy a car.
2. Parameter `_carID` should be less or equal last `carID`.
**Prompt:** `carID` variable contains future car unique identifier.
3. Parameter `_carID` shouldn't be equals to `NULL_CAR`.
4. Create car instance by `_carID` unique identifier.
5. Car should be `IN_STOCK`.
6. Create local variable called `_carPrice` that will contains the price of selected car.
7. Let's check: if `msg.sender` buy car at first time.
**Prompt:** remember the `isCarOwner` variable and `NOT_CAR_OWNER` person state.

8. Let's start with person who has never bought a car.   
a. Check if send ETH >= `_carPrice`.   
b. Create local variable `_newCarOwnerID` with value `carOwnerID`.  
c. Now person has bought a car. Set CAR_OWNER state.  
d. Create `_newCarOwner` instance of `CarOwner` object with `_newCarOwnerID` unique identifier.  
e. Set `carOwner` properties `addr` and `carIDs`. **Prompt:** `carIDs` should be array with one element.  
f. Add buyer to `carOwner` variable.  
g. Increment `carOwnerID`.  
What about person who has already bought a car:  
a. Create `_carOwnerID` local variable with value of `carOwner` unique identifier.  
b. Create variable `_carOwner` - instance of `CarOwner` with `_carOwnerID` unique identifier.  
c. Check `discount` of buyer. If it's more than zero than calculate new `carPrice` given the discount. **Prompt:** Get `_carPrice` and subtract it from (`_carPrice` multiply by discount and divide by DECIMAL_MULTIPLIER). Discount should equal from `1e16` to `1e18` because solidity doesn't have floating-point numbers.  
d. Check if send ETH >= `_carPrice`.  
e. Check last item of `_carOwner.carIDs` for `NULL_CAR` value. If it's false than person has already bought `MAX_CARS_PER_PERSON`.  
f. Next you should use loop for adding new car ID for `_carOwner`.  

9. Buyer can send more ETH than is the car worth. You should calculate remain value out of conditional statement like `msg.value` without `_carPrice`.  
10. And if remain value more than zero return remain ETH to car buyer.  

### Task 6: Getter function
You have to create `getOwnerCars` function that will returns all cars which `carOwner` has already buy.

### Task 7: Events
Create:
```javascript
 event AddCar(address carDealer, uint carID);
 event NewCarOwner(uint carOnwerID, address carOwnerAddress);
 event BuyCar(uint carID, uint carOwnerID);
```
And arrange it in the right places.

___

### Additional assignment
Create `setCarOwnerDiscount` and `editPresence` functions.
Create Interface `ICarMarket`.
Add here all constant variables modifiers and functions without body.
Inherit `CarMarket` contract from `ICarMarket` interface.

