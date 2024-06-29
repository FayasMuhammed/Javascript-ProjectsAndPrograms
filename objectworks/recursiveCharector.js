

var text="ABCDBDD"

var ob={}

for (let ch of text){

    if (ch in ob){
        console.log(ch);
        break
    }
    else{
        ob[ch]=1
    }
}
