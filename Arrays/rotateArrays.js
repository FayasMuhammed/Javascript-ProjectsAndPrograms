

var arr=[10,20,30,40]

k=3

for(let i=0;i<k;i++){

    var poped_elements=arr.pop()
    arr.unshift(poped_elements)

}

console.log(arr);