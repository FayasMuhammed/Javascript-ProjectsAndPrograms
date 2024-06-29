

var expenses=[100,300,200]

// console.log(expenses[2]);

// for(i=0;i<expenses.length;i++){
//     console.log(expenses[i]);
// }

for(exp of expenses){
    // console.log(exp);
}

expenses[0]=1000
console.log(expenses);