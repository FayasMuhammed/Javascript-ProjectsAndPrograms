
var Amount=1000000;

var i=10.5;

var Tenure=120;

var r=i/12/100;

var EMI = Amount * r * (1 + r)**Tenure / ((1 + r)**Tenure - 1);

console.log(EMI);