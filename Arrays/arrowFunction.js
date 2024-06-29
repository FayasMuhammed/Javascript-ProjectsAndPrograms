
// var num=(num1,num2)=>num1+num2

// console.log(num(1,2));

// var square=(num)=>num**2

// console.log(square(3));

// var cube=(num)=>num**3

// console.log(cube(3));

// var isOdd=(num)=>num%2!=0

// console.log(isOdd(3));

// var isEven=(num)=>num%2==0

// console.log(isEven(8));

// var isPositive=(num)=>num>0

// console.log(isPositive(2));

// var smartSub=(num1,num2)=>num1>num2?num1-num2:num2-num1

// console.log(smartSub(10,5));
// console.log(smartSub(5,10));


// var arr=[10,11,13,14,15]

// var square=arr.map(num=>num**2)

// console.log(square);

// var cubes=arr.map(num=>num**3)

// console.log(cubes);

// var result=arr.map(num=>num<12?num-1:num>12?num+1:num)

// console.log((result));

// var arr=[10,11,12,13,14,15,16,17,18,19]

// var odds=arr.filter(num=>num%2!=0)
// var evens=arr.filter(num=>num%2==0)

// console.log(odds);
// console.log(evens);

// words=["asd","asdfg","wertyuiop"]

// text=words[0]

// var s_word=words.filter(word=>text.length<word?word:s_word)
// console.log(s_word);


// var arr=["prgrams","project","profile","proffesion"]

// var UP=arr.map(w=>w.toUpperCase())

// console.log(UP);

// var Len=arr.map(word=>word.length)

// console.log(Len);

// var pro=arr.filter(word=>word.startsWith("pro"))

// console.log(pro);


// var arr=[1,2,3,4,5,6,7,8,9,]

// var total=arr.reduce((n1,n2)=>n1+n2)

// var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)

// var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)

// console.log(total);
// console.log(max);
// console.log(min);


// var arr=["programs","project","profile","proffesion","work"]

// // var Longest=arr.reduce((w1,w2)=>w1.length>w2.length?w1:w2)

// // console.log(Longest);

// var shortest=arr.reduce((w1,w2)=>w1.length<w2.length?w1:w2)

// console.log(shortest);


// var arr=[6,4,7,3,2,9,8,1000,10,12]

// arr.sort((o1,o2)=>o1-o2)

// console.log(arr);

// arr.sort((o1,o2)=>o2-o1)

// console.log(arr);


var arr=["programs","project","profile","proffesion","work"]

arr.sort((w1,w2)=>w2.length-w1.length)

console.log(arr);