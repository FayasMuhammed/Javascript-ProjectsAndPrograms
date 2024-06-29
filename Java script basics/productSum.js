var num=153;

var sum=0;

var temp=num;

var numCount=String(num).length;

while(num>0){

    let rem=num%10;

    num=Math.floor(num/10);

    let cube=rem**numCount;

    sum=sum+cube;

}
console.log(sum);

console.log(sum==temp ? [ temp,"armstrong number"] : "not a armstrong number");