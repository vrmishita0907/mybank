
var selectedRow = null;


// console.log(updateRecord(), 'a')

function Submit() { 

  var detail = myData();

  if (selectedRow === null) {
    insertValue(detail);
  }
  else {
    updateRecord(detail);
    // insertValue(detail);

  }
  resetForm()

  // console.log(selectedRow===null,'plz')





  // function onDelete() {
  //   document.getElementById("Display").deleteRow(1);
  // }
  // console.log(onDelete(), 'hello');

  // myData()


  // updateRecord()


}
// console.log(Submit(),'plzzzzzzzzzzzzz')
// console.log(myData)


let myBank = {
  account: [],
  totalDeposits: 0,
  totalAcounts: 0
};

function updateRecord(detail) {
  selectedRow.cells[0].innerHTML = detail.name1;
  selectedRow.cells[1].innerHTML = detail.Ac;
  selectedRow.cells[2].innerHTML = detail.amount;
  // selectedRow.cells[3].innerHTML = pin;
  // insertValue(detail);

}


function myData() {


  var detail = {} ;
  detail ["name1"] = document.getElementById('name1').value;
  detail ["Ac"] = document.getElementById('Ac').value;
  detail ["pin"] = document.getElementById('pin').value;
  detail ["amount"] = document.getElementById('amount').value;
  // document.getElementById('name2').innerHTML = name;
  // console.log(name1, Ac, pin, amount);
  return detail;
}

function insertValue(data) {
  let row = 1;

  let display = document.getElementById("display").getElementsByTagName("tbody")[0];
  let newRow = display.insertRow(display.length);
  // let delRow = display.deleteRow(row);

  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name1;

  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.Ac;

  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.amount;

  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = '<button type="button" class="btn btn-primary" style="width:50%" onClick="onEdit(this)">Edit</button>';

  let cell5 = newRow.insertCell(4);
  cell5.innerHTML = '<button type="button" class="btn btn-primary" style="width:50%" onClick="onDelete(this)">Delete</button>';



  row++;

  // let newAcc = myBank.account.forEach(myData)
  // document.getElementById("display").innerHTML = newAcc;
  // console.log(newAcc);

}



function Account(name, accountNo, amount, pin) {
  this.name = name;
  this.accountNo = accountNo;
  this.amount = amount;
  this.pin = pin;
}

function createAcc(name, accountNo, amount, pin = 1111) {
  // let name;
  const account = new Account(name, accountNo, amount, pin);
  myBank.account.push(account);
  myBank.totalDeposits = myBank.totalDeposits + amount;
  myBank.totalAcounts = myBank.totalAcounts + 1;


}
createAcc()


// createAcc("Navin", 443355, 1000, 2222);
// createAcc("Sita", 335544, 2000, 3333);
// createAcc("Rita", 225544, 3000, 1111);
// createAcc("gita", 115544, 4000, 4444);


// debugger


function withDrawal(accountN, pinN, amount) {
  let acc, i;
  for (i = 0; i < myBank.account.length; i++) {
    if (myBank.account[i].accountNo === accountN) {
      acc = myBank.account[i];
    }
  }
  if (!acc) {
    console.log("please enter correct account number");
  }
  if (acc) {
    if (acc.pin === pinN) {
      acc.amount = acc.amount - amount;
      myBank.totalDeposits = myBank.totalDeposits - amount;
    } else {
      console.log("Please try again");
    }
  }
}
withDrawal()
// console.log("myBank", myBank);

function resetForm() {

  document.getElementById('name1').value = "";
  document.getElementById('Ac').value = "";
  document.getElementById('pin').value = "";
  document.getElementById('amount').value = "";
  var selectedRow = null;
  // insertValue(detail);


}



function onEdit(td) {

  selectedRow = td.parentElement.parentElement;
  document.getElementById('name1').value = selectedRow.cells[0].innerHTML;;
  document.getElementById('Ac').value = selectedRow.cells[1].innerHTML;
  document.getElementById('amount').value = selectedRow.cells[2].innerHTML;
  // document.getElementById('pin').value = selectedRow.cell[3].innerHTML;

}
// console.log(onEdit(), 'plz')

function onDelete(td) {
  if (confirm('Are you sure to delete this records?'))
    row = td.parentElement.parentElement;
  document.getElementById("display").deleteRow(row.rowIndex);
}
// console.log(onDelete(),'plz')



//  console.log(updateRecord())








    // console.log(name);

