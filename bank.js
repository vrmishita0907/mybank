
var selectedRow = null;


// console.log(updateRecord(), 'a')

function Submit() {

  // Sorting()
  var detail = myData();
  if (selectedRow === null) {
    insertValue(detail);
  }
  else {
    updateRecord(detail);
    selectedRow = null;
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
  console.log('myBank',myBank)
}
// console.log(Submit(),'plzzzzzzzzzzzzz')
// console.log(myData)

let myBank = {
  accounts: [],
  totalDeposits: 0,
  totalAcounts: 0
};

function updateRecord(detail) {
  selectedRow.cells[0].innerHTML = detail.name1;
  selectedRow.cells[1].innerHTML = detail.accountNum;
  selectedRow.cells[2].innerHTML = detail.amount;
  // document.getElementById('hiddenId').value
  let getIndex = findWithAttr(myBank.accounts, 'row', detail.row);
  if(getIndex > -1){
    myBank.accounts[getIndex].name1 = detail.name1;
    myBank.accounts[getIndex].accountNo = detail.accountNum;
    myBank.accounts[getIndex].amount = detail.amount;
    myBank.accounts[getIndex].pin = detail.pin;
  } 



// function onDelete(td) {
//   if (confirm('Are you sure to delete this records?'))
//     row = td.parentElement.parentElement;
//   document.getElementById("display").deleteRow(row.rowIndex);
// 
  // selectedRow.cells[3].innerHTML = pin;
  // onDelete()
  // if (confirm('Are you sure to delete this records?')){
  //   row = td.parentElement.parentElement;
  //   document.getElementById("display").deleteRow(row.rowIndex);
  // }
  // console.log('row', row)
  // console.log(myBank);
}

function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i ++) {
        if(array[i][attr] == value) {
            return i;
        }
    }
    return -1;
}

function myData() {
  var detail = {} ;
  detail ["name1"] = document.getElementById('name1').value;
  detail ["accountNum"] = document.getElementById('accountNum').value;
  detail ["pin"] = document.getElementById('pin').value;
  detail ["amount"] = document.getElementById('amount').value;
  detail ["row"] = document.getElementById('hiddenId').value;
  // document.getElementById('name2').innerHTML = name1;
  // console.log(name1, accountNum, pin, amount);
  return detail;
}


// function insertValue(){
//   let myTable = '';
//   myBank.accounts.forEach((el) => {
//     myTable = myTable + "<tr>"
//     myTable = myTable + `<td>${myTable.name1}</td>`
//     myTable = myTable + `<td>${myTable.accountNum}</td>`
//     myTable = myTable + `<td>${myTable.amount}</td>`
//     myTable = myTable + `<td>${myTable.row}</td>`
//     myTable = myTable + `<td>${myTable.row}</td>`
//     myTable = myTable + `<td>${myTable.row}</td>`
  
    
//     myTable = myTable </tr>
//   })
// }


let row = 1;
function insertValue(detail) {
  let display = document.getElementById("display");
  let newRow = display.insertRow(display.length);
  // let delRow = display.deleteRow(row);
  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = detail.name1;
  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = detail.accountNum;
  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = detail.amount;
  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = row;
  let cell5 = newRow.insertCell(4);
  cell5.innerHTML = '<button type="button" class="btn btn-primary" style="width:50%" onClick="onEdit(this)">Edit</button>';
  let cell6 = newRow.insertCell(5);
  cell6.innerHTML = `<button type="button" class="btn btn-primary" style="width:50%" onClick="onDelete(this, ${row})">Delete</button>`;
  // let cell7 = newRow.insertCell(6)
  //myBank.accounts.push({name1:detail.name1,accountNum:detail.accountNum,amount:detail.amount})
  // let newAcc = myBank.accounts.forEach(myData)
  // document.getElementById("display").innerHTML = newAcc;
  //console.log('myBank', myBank);
  // Sorting()
  // let sort = myBank.accounts.sort(function(i,j)
  // {
  //  if(i.name1.toLowerCase() < j.name1.toLowerCase() )
  //       return -1;
  //  if(i.name1.toLowerCase() > j.name1.toLowerCase() )
  //       return 1;
  //  return 0;
  // });

  // console.log("sort", sort)
  createAcc(detail.name1,detail.accountNum,detail.amount,'',row)
  // myBank.accounts.sort(function(){
  //   if(a > b) return 1;
  //   if(a < b) return -1;
  //   return 0;
  // });
  // console.log("sort")
  row++;
}



function Account(name1, accountNo, amount, pin, row) {
  this.name1 = name1;
  this.accountNo = accountNo;
  this.amount = amount;
  this.pin = pin;
  this.row = row;
}

function createAcc(name1, accountNo, amount, pin = 1111, row) {
  // let name1;
  const accounts = new Account(name1, accountNo, amount, pin, row);
  myBank.accounts.push(accounts);
  myBank.totalDeposits = myBank.totalDeposits + parseInt(amount);
  myBank.totalAcounts = myBank.totalAcounts + 1;
  // console.log('myBank', myBank);
}
// createAcc()
// createAcc("Navin", 443355, 1000, 2222);
// createAcc("Sita", 335544, 2000, 3333);
// createAcc("Rita", 225544, 3000, 1111);
// createAcc("gita", 115544, 4000, 4444);
// debugger
function withDrawal(accountN, pinN, amount) {
  let acc, i;
  for (i = 0; i < myBank.accounts.length; i++) {
    if (myBank.accounts[i].accountNo === accountN) {
      acc = myBank.accounts[i];
    }
  }
  if (!acc) {
    console.log("please enter correct accounts number");
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
  document.getElementById('accountNum').value = "";
  document.getElementById('pin').value = "";
  document.getElementById('amount').value = "";
  var selectedRow = null;
  // insertValue(detail);

}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById('name1').value = selectedRow.cells[0].innerHTML;;
  document.getElementById('accountNum').value = selectedRow.cells[1].innerHTML;
  document.getElementById('amount').value = selectedRow.cells[2].innerHTML;
  document.getElementById('hiddenId').value = selectedRow.cells[3].innerHTML;
  // document.getElementById('pin').value = selectedRow.cell[3].innerHTML;

}
// console.log(onEdit(), 'plz')

function onDelete(td, Row) {
  console.log("delete",myBank)
  if (confirm('Are you sure to delete this records?')){
  // myBank.accounts = myBank.accounts.filter((row) => row = row.rowIndex)
    row = td.parentElement.parentElement;
  document.getElementById("display").deleteRow(row.rowIndex);
  myBank.accounts = myBank.accounts.filter((elem) => elem.row !== Row)
  myBank.accounts = myBank.accounts;
  }
  resetForm()

}

function searchData() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("display");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}




// console.log(onDelete(),'plz'
//  console.log(updateRecord())
   console.log(myBank);


  function Sorting(){
   let sort = myBank.accounts.sort(function(i,j)
   {
    if(i.name1.toLowerCase() < j.name1.toLowerCase() )
         return -1;
    if(i.name1.toLowerCase() > j.name1.toLowerCase() )
         return 1;
    return 0;
   });
   
   console.log("sort", sort)
    insertValue()
  }
console.log('hello')








   