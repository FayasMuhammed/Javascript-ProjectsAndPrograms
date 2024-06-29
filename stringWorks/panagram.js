

var text="HAIPYTHON"

var alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var isPanagram=true

for (let ch of alphabets){

    if(!text.includes(ch)){

        isPanagram=false

        break
    }
}

console.log(isPanagram);