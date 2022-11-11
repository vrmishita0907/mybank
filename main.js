// const myHeading = document.querySelector("h3");
// myHeading.textContent = "Hello world!";

// const myElement = document.getElementById("demo").style.color = "blue";



// function result(){
// let a = 100;
// if(a>33){
//   console.log('Pass')
// } else {
//     console.log('Fail')
// }

// console.log(a);
// if(a>75){
//   console.log('Pass')
// } else {
//     console.log('Fail')
// }
// };
// console.log(a);

// result();





let arr = [1,2,3,4,5,6,7,8,9,10];

function arr1() {
 
 let value = arr.map((elem) => elem*2)
 console.log(value);
}







// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function arr1(asd) {
//   let value = asd.map((elem) => elem * elem);
//   return value;
// }
// console.log(arr1(arr));

// function odd(num) {
//   let val = num.filter((elem) => elem % 2);
//   return val;
// }
// console.log(odd(arr));
// function even(num) {
//   let val = num.filter((elem) => elem % 2 === 0);
//   return val;
// }
// console.log(even(arr));

// let earnings = 0;
// let myShop = {
//   samosa: {
//     quantity: 20,
//     price: 10
//   },
//   kachori: {
//     quantity: 15,
//     price: 5
//   }
// };

// function buyAnItem(item, quantity) {
//   if (item === "samosa") {
//     myShop.samosa.quantity = myShop.samosa.quantity - quantity;
//     console.log(earnings);
//     earnings = earnings + myShop.samosa.price * quantity;
//   }
//   if (item === "kachori") {
//     myShop.kachori.quantity = myShop.kachori.quantity - quantity;
//     earnings = earnings + myShop.kachori.price * quantity;
//   }
// }

// buyAnItem("samosa", 2);
// buyAnItem("samosa", 2);
// buyAnItem("kachori", 2);
// console.log(myShop);
// console.log(earnings);

// function addAnItem(itemName, quantity, price) {
//   myShop[itemName] = { quantity: quantity, price: price };
// }
// addAnItem("lassi", 20, 25);

// buyAnItem("samosa", 2);
// console.log(myShop);

// function Account(name, num, num2) {
//   this.name = name;
//   this.accountNo = num;
//   this.amount = num2;
// }

// // Create a Person object
// const myFather = new Account("Joh", 9943242, 9999);
// const newAccount = new Account("navin", 879, 0);
// console.log(newAccount);

let myBank = {
  account: [],
  totalDeposits: 0,
  totalAcounts: 0
};
function Account(name, accountNo, amount) {
  this.name = name;
  this.accountNo = accountNo;
  this.amount = amount;
}

// const newClient = new Account("Ram", 553322, 9000);
// const newAccount = new Account("Shyam", 223344, 10000);
// const newAcc = new Account("Radha", 332244, 5000);
// console.log(newClient, newAccount, newAcc);

function createAcc(name, accountNo) {
  const account = new Account(name, accountNo);
  myBank.account.push(account);
}
console.log(createAcc("navin", 443355));
// console.log(Account());

let myBank = {
  account: [],
  totalDeposits: 0,
  totalAcounts: 0
};
function Account(name, accountNo, amount, pin) {
  this.name = name;
  this.accountNo = accountNo;
  this.amount = amount;
  this.pin = pin;
}
// let result;

//   if (accountNo === myBank.account.includes(accountNo)) {
//     console.log("error");
//   } else {
//     // alert ("Please Enter Your Correct A/c No.")
//   }
//   if (pin === myBank.account.pin) {
//     result = "Enter Amount";
//   } else {
//     result = "Enter Correct Pin";
//   }
//   if (amount === myBank.account.amount) {
//   }

// console.log(withDrawal())

function createAcc(name, accountNo, amount, pin) {
  const account = new Account(name, accountNo, amount, pin);
  myBank.account.push(account);

  myBank.totalDeposits = myBank.totalDeposits + amount;
  myBank.totalAcounts = myBank.totalAcounts + 1;
}
createAcc("Navin", 443355, 1000, 2222);
createAcc("Sita", 335544, 2000, 3333);
createAcc("Rita", 225544, 3000, 1111);
createAcc("gita", 115544, 4000, 4444);

// console.log(myBank);
// debugger;

// const newClient = new Account("Ram", 553322, 9000);
// const newAccount = new Account("Shyam", 223344, 10000);
// const newAcc = new Account("Radha", 332244, 5000);
// console.log(newClient, newAccount, newAcc)
function withDrawal(accountN, pinN, amount) {
  // console.log(accountNo)
  // console.log(pin)
  let acc, i;
  for (i = 0; i < myBank.account.length; i++) {
    if (myBank.account[i].accountNo === accountN) {
      acc = myBank.account[i];
      // console.log(acc);
    }
  }
  if (!acc) {
    console.log("please enter correct account number");
  }
  if (acc) {
    if (acc.pin === pinN) {
      // console.log("gsx");
      acc.amount = acc.amount - amount;
      // console.log(acc);
      myBank.totalDeposits = myBank.totalDeposits - amount;
      // console.log("hello");
    } else {
      console.log("Please try again");
    }
  }
}

withDrawal(443355, 2222, 1100);
console.log("myBank", myBank);
// console.log(1111)
// console.log(443355);




















