var num=153
var n=0

while(num!=0){
    var rem=num%10
    num=Math.floor(num/10)
    n=n+rem

}
console.log(n)