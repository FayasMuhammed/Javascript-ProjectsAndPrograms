

var text="pneumonoultramicroscopicsilicovolcanoconiosis"

var vowels="aeiou"

var vowelsCount=0

var consonantCount=0

for (let i of text){

    if(vowels.includes(i) ){
        vowelsCount++
    }
    else{
        consonantCount++
    }
}
console.log("total count is",text.length);
console.log("vowels count is ",vowelsCount);
console.log("consonont count is ",consonantCount);