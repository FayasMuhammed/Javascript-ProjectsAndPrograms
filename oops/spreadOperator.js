

var colors=["red","green","blue","yellow"]

var copyColor=[...colors,"cyan","purpple"]//(...) this is called a spread operator. it is used to create a shallow copy of an array

// copyColor.pop()

// console.log(colors);

// console.log(copyColor);


var user={name:"Fayas",email:"f@gmail.com",password:"qwerty@123",is_active:true}

var copyUser={...user}

copyUser.is_active=false

console.log(user);

console.table(copyUser);


var product={id:1,name:"samsung",price:12000,isAvailable:false}

var copyProduct={...product,isAvailable:true}

console.log(copyProduct);


// find largest word from a string

// to find the second largest elements in a tuple

// to find sum of elements in a tuple