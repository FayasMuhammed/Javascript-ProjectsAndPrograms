

var words=["flyoff","flyin","fly","flout"]

var s_word=words[0]

var text=""

for(ch of words){

    if(ch.length<s_word.length){
        s_word=ch
    }
    else{
        continue
    }

    
}



for (ch of words){
    if(ch.includes(s_word)){
        text=s_word
    }
    else{
        let arr=s_word.split("").pop()
        console.log(typeof(arr));
    }
}

console.log(text);