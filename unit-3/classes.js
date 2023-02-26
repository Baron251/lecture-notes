/* 
    ? Classes
    - Introduced in 2015
    - A function that helps/allows us to create a specific object(s)
    - We use classes to define a category/set of objects (objects that have similar details but unique values to those details.)
    Base Structure:
    class NameOfClass {
        constructor(parameter) {
            this.key = parameter
        }
        methodName() {
            ... code block to run/execute 
        }
    }
*/

// Ex: Create an item class to define things sold in a store
// 1    2
class Item {
    //    3             4
    constructor(name, desc, price) {
      //5   6      7
      this.name = name;
      this.description = desc;
      this.price = price;
    }
  }
  
  /* 
      1. Class keyword that denotes(tells JS) what "type" of function we are building.
      2. Class name. Note that class names are done in Pascal Casing to help determine what type of function we are referencing later in our code.
      3. Constructor keyword. This is activated when we instantiate(create) a new object. Builds what sort of keys and values will be associated with our new object.
      4. The parameters of our constructed object. Establishes the values of our new object.
      5. This keyword - refers to "this" specific object being created. 
      6.The name of a key to our new object. (In this ex, an Item object will have 3 keys: name, description, and price.)
      7. The value for those keys (referenced by the parameters).
  */
  
  // Ex: Create a class called NewObject & Instantiate/Create an object off the class
  class NewObject {
    constructor() {
      this.name;
      this.desc;
    }
  }
  
  let one = new NewObject();
  // console.log(one);
  one.name = "sample";
  // console.log(one);
  
  // Instantiate/Create an object off of class Item w/ and w/o values:
  
  let itemZero = new Item();
  console.log(itemZero); // returns an object with the Item keys that hold undefined values
  
  let itemOne = new Item("beans", "canned", 0.99);
  console.log(itemOne);
  // Change thing in itemOne
  itemOne.name = "spinach";
  console.log(itemOne);
  
  // TypeError: Class constructor Item cannot be invoked without 'new'
  // let brokenItem = Item();
  // console.log(brokenItem);
  
  // ? Factory Functions
  // Using a function to handle the object creation
  
  let iType = "tomato soup";
  let iDesc = "canned";
  let iCost = 1.29;
  
  // Build a function to process items
  function processItem(itemName, desc, cost) {
    return new Item(itemName, desc, cost);
  }
  
  let useFunction = processItem(iType, iDesc, iCost);
  console.log(useFunction);

  // * Methods
  // Generating/creating our own methods for use with our objects

  class DeptInventory {
    constructor(dept) {
      this.department = dept;
      this.item = []; // makes a default value for this key.
     }

    //    1           2
    addToInventory(newItem) {
      // 3        4
      this.item.push(newItem);
      console.log("An item was added!");
      console.table(this.items);
    }
  }

  // 5
  let dryGoods = new DeptInventory("Dry Goods")
  let itemTwo = new Item("corn", "canned", 0.79)

  // 6
  dryGoods.addToInventory(itemTwo);
  dryGoods.addToInventory(itemOne);
  console.log(dryGoods);

  /* 
  1. Establishing a name for our method.
  2. This method requires a parameter
  3. "This" keyword is referencing "Dry Goods" object and adding to it's array of items.
  4. Using an array method to push to the items array
  5. Generating/creating a new dept object named dryGoods. Also creating a new item.
  6. Using dot notation to target our method within our dryGoods object and passing items to it.
  */


  // * Factory Methods
  

  class Expense {
    // static keyword, create/build a new expense
    // only reachable within the class itself - not global
    static addUpchargeForProfit(wholesale) {
      // calculate the wholesale charge and store in a variable
      let upcharge = wholesale + wholesale * 0.25;
      // return (so it's accessible) the new expense
      return new Expense(wholesale, upcharge);
    }

    // basic constructor of key value pairs
    constructor(w, u,) {
      this.purhcased_price = w;
      this.sell_at = u;
    }

    // addTax method
    addTax(x) {
      // set x value to percentage variable
      let percentage = x;
      // set the value of sell_at to a variable
      let saleCost = this.sell_at;

      // Write and set the taxed cost
      this.plus_sales_tax = (saleCost + saleCost * percentage).toFixed(2);
    }
  }

  let itemToSell = Expense.addUpchargeForProfit(1);
  console.log(itemToSell)

  let anotherItemToSell = Expense.addUpchargeForProfit(2);
  console.log(anotherItemToSell)

  // * Class Inheritance
  // With each object we create, those methods are included to those specific objects, basically the children inherit from the parent class.

  // anotherItem has the "addTax" method due to inheritance
  anotherItemToSell.addTax(0.06);
  console.log(anotherItemToSell)

  // anotherItemToSell.addUpchargeForProfit(3); TypeError: anotherItemToSell.addUpchargeForProfit is not a function

  // Note: that anything that is static will not be inherited into those new objects. For our itemToSell and anotherItem, we won't have access to the addUpchargeForProfit method.
