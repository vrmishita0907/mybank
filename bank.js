var selectedRow = null;

let myBank = {
  accounts: [],
  totalDeposits: 0,
  totalAcounts: 0
};

function Account(name1, acNumber, amount, pin, row) {
  this.name1 = name1;
  this.acNumber = acNumber;
  this.amount = amount;
  this.pin = pin;
  this.row = row;
}

function createAcc(name1, acNumber, amount, pin = 1111, row) {
  // let name1;
  const accounts = new Account(name1, acNumber, amount, pin, row);
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
    if (myBank.accounts[i].acNumber === accountN) {
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
console.log("myBank", myBank);

function myData() {
  var detail = {};
  // let name1, acNumber, pin, amount;
  detail["name1"] = document.getElementById('name1').value;
  detail["acNumber"] = document.getElementById('acNumber').value;
  detail["pin"] = document.getElementById('pin').value;
  detail["amount"] = document.getElementById('amount').value;
  return detail;
  // let myArr = {
  //    Row: row,
  //    custName : name1,
  //    custAcnumber : acNumber,
  //    custAmount : amount
  // }
  // row = document.getElementById('hiddenId').value;
  // document.getElementById('name2').innerHTML = name1;
  // console.log(name1, acNumber, pin, amount);
  // return ;
  // insertValue()
  // console.log('rr', insertValue())
}

function insertValue() {
  let myTable = '';
  myBank.accounts.forEach((el, i) => {
    myTable = myTable + "<tr>"
    myTable = myTable + `<td>${el.name1}</td>`
    myTable = myTable + `<td>${el.acNumber}</td>`
    myTable = myTable + `<td>${el.amount}</td>`
    // myTable = myTable + `<td>${myTable.row}</td>`
    myTable = myTable + `<td><button type="button" class="btn btn-primary" style="width:50%" onClick="onEdit(this,${i})">Edit</button></td>`;
    myTable = myTable + `<td><button type="button" class="btn btn-primary" style="width:50%" onClick="onDelete(this, ${i})">Delete</button></td>`;
    myTable = myTable + "</tr>";
    document.getElementById("display").innerHTML = myTable;
  });
  // myData()
  // searchData()
}
// console.log('insert',)

function resetForm() {
  document.getElementById('name1').value = "";
  document.getElementById('acNumber').value = "";
  document.getElementById('pin').value = "";
  document.getElementById('amount').value = "";
  selectedRow = null;
  // insertValue(detail);

}
var updateIndex = null;
function onEdit(td, i) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById('name1').value = selectedRow.cells[0].innerHTML;;
  document.getElementById('acNumber').value = selectedRow.cells[1].innerHTML;
  document.getElementById('amount').value = selectedRow.cells[2].innerHTML;
  // document.getElementById('hiddenId').value = "hidden"
  // document.getElementById('pin').value = selectedRow.cell[3].innerHTML;
  updateIndex = {
    ind: i,
    name1: selectedRow.cells[0].innerHTML,
    acNumber: selectedRow.cells[1].innerHTML,
    amount: selectedRow.cells[2].innerHTML
  };
}
// console.log(onEdit(), 'plz')

function updateRecord(detail, upIndex) {
  selectedRow.cells[0].innerHTML = detail.name1;
  selectedRow.cells[1].innerHTML = detail.acNumber;
  selectedRow.cells[2].innerHTML = detail.amount;
  // console.log(
  //   detail.name1,
  //   detail.acNumber,
  //   detail.amount
  // )
  myBank.accounts.forEach((el, index) => {
    if (index === upIndex.ind) {
      // console.log(el.i === upIndex.i)
      console.log(updateIndex)

      myBank.accounts[index] = {
        name1: document.getElementById('name1').value,
        acNumber: document.getElementById('acNumber').value,
        pin: document.getElementById('pin').value,
        amount: document.getElementById('amount').value
      };
      console.log(index);
    }
    // document.getElementById("update").innerHTML = "submit"
    updateIndex = null;
    selectedRow = null;
    console.log(myBank.accounts, "inside")
  });
}
console.log("updateRecord", myBank.accounts)

function onDelete(td, i) {
  console.log("delete", i)
  if (confirm('Are you sure to delete this records?')) {
    // myBank.accounts = myBank.accounts.filter((row) => row = row.rowIndex)
    td.parentElement.parentElement.remove();
    // document.getElementById("display").deleteRow(row.rowIndex);
    let deleteArr = myBank.accounts.filter((elem, index) => index !== i)
    console.log('delete', deleteArr)
    myBank.accounts = deleteArr;
  }
  resetForm()
}
// console.log("delete", myBank)

function searchData() {

  let input, myTable, personName;
  input = document.getElementById("myInput").value;
  // console.log('input', input)
  personName = myBank.accounts.filter((elem) => elem.name1.includes(input))
  // console.log('search', personName )
  // return personName;
  // return myBank.accounts.filter((el) => el.name1 == personName)
  // console.log('personName', personName)








  myTable = personName;
  document.getElementById("display").innerHTML = myTable;
  console.log('search', personName);
  // insertValue()
  resetForm();
  // console.log(myTable)
}
//  var txt = document.getElementById("myInput").value;
//  var search = myBank.accounts.filter(txt);
// console.log("search",search)
//  if( search !== -1){
//   alert("yes")
//  }
// else{
//   alert("no")
// }

//  const result = myBank.accounts.find((name1) => name1 === name1)
//  console.log('search', myBank.accounts)
// var input, filter, table, tr, td, i, txtValue;
// input = document.getElementById("myInput");
// filter = input.value.toUpperCase();
// table = document.getElementById("display");
// tr = table.getElementsByTagName("tr");
// for (i = 0; i < tr.length; i++) {
//   td = tr[i].getElementsByTagName("td")[0];
//   if (td) {
//     txtValue = td.textContent || td.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       tr[i].style.display = "";
//     } else {
//       tr[i].style.display = "none";
//     }
//   }
// }
// resetForm()

// console.log('search',txt)



function Submit() {
  console.log(myBank.accounts);
  // Sorting()
  var detail = myData();
  if (selectedRow === null || updateIndex === null) {
    myBank.accounts.push(detail);
    insertValue(detail);
  }
  else {
    updateRecord(detail, updateIndex);
    selectedRow = null;
    console.log(myBank.accounts, "hi")
    // insertValue(detail);
  }
  resetForm()
  console.log('myBank', myBank)
  // console.log(selectedRow===null,'plz')
  // function onDelete() {
  //   document.getElementById("Display").deleteRow(1);
  // }
  // console.log(onDelete(), 'hello');
  // myData()
  // updateRecord()
}

var sortingUp = true;
function Sorting(td) {
  // console.log('sort',)
  sortingUp = !sortingUp
  myBank.accounts.sort(function (i, j) {
    if (i[td].toLowerCase() < j[td].toLowerCase())
      return -1;
    if (i[td].toLowerCase() > j[td].toLowerCase())
      return 1;
    return 0;
  });
  if (sortingUp) {
    myBank.accounts.reverse()
  }
  insertValue();
  // console.log("sort" ,table)
  console.log('hello', myBank.accounts)
}


// console.log(myBank);
  // document.getElementById('hiddenId').value
  // let getIndex = findWithAttr(myBank.accounts, 'row', detail.row);
  // if (getIndex > -1) {
  //   myBank.accounts[getIndex].name1 = detail.name1;
  //   myBank.accounts[getIndex].acNumber = detail.acNumber;
  //   myBank.accounts[getIndex].amount = detail.amount;
  //   myBank.accounts[getIndex].pin = detail.pin;
  // }

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
// function findWithAttr(array, attr, value) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i][attr] == value) {
//       return i;
//     }
//   }
//   return -1;
// }





// let row = 1;
// function insertValue(detail) {
//   let display = document.getElementById("display");
//   let newRow = display.insertRow(display.length);
//   // let delRow = display.deleteRow(row);
//   let cell1 = newRow.insertCell(0);
//   cell1.innerHTML = detail.name1;
//   let cell2 = newRow.insertCell(1);
//   cell2.innerHTML = detail.acNumber;
//   let cell3 = newRow.insertCell(2);
//   cell3.innerHTML = detail.amount;
//   let cell4 = newRow.insertCell(3);
//   cell4.innerHTML = row;
//   let cell5 = newRow.insertCell(4);
//   cell5.innerHTML = '<button type="button" class="btn btn-primary" style="width:50%" onClick="onEdit(this)">Edit</button>';
//   let cell6 = newRow.insertCell(5);
//   cell6.innerHTML = `<button type="button" class="btn btn-primary" style="width:50%" onClick="onDelete(this, ${row})">Delete</button>`;
// let cell7 = newRow.insertCell(6)
//myBank.accounts.push({name1:detail.name1,acNumber:detail.acNumber,amount:detail.amount})
// let newAcc = myBank.accounts.forEach(myData)
// document.getElementById("display").innerHTML = newAcc;
//console.log('myBank', myBank);
// let sort = myBank.accounts.sort(function(i,j)
// {
//  if(i.name1.toLowerCase() < j.name1.toLowerCase() )
//       return -1;
//  if(i.name1.toLowerCase() > j.name1.toLowerCase() )
//       return 1;
//  return 0;
// });
// console.log("sort",sort)
// var table, rows, switching, i, x, y, shouldSwitch;
// table = document.getElementById("display");
// switching = true;
// while (switching) {
//   switching = false;
//   rows = table.rows;
//   for (i = 1; i < (rows.length - 1); i++) {
//     shouldSwitch = false;
//     x = rows[i].getElementsByTagName("td")[0];
//     y = rows[i + 1].getElementsByTagName("td")[0];
//     if (x.name1.toLowerCase() > y.name1.toLowerCase()) {
//       shouldSwitch = true;
//       break;
//     }
//   }
//   if (shouldSwitch) {
//     rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//     switching = true;
//   }
// }
// createAcc(detail.name1, detail.acNumber, detail.amount, '', row)
// Sorting(detail.name1,detail.acNumber,detail.amount,'',row)
// myBank.accounts.sort(function(){
//   if(a > b) return 1;
//   if(a < b) return -1;
//   return 0;
// });
// console.log("sort")
//   row++;
// }




// console.log(onDelete(),'plz'
//  console.log(updateRecord())










// console.log(updateRecord(), 'a')
// console.log(Submit(),'plzzzzzzzzzzzzz')
// console.log(myData)

