
var pointFrequency=1

function displayNumber(event){

    let operators=["+","-","*","/","."]

    let textBox=document.querySelector("#result")

    let currentExp=textBox.value

    let displayNumber=event.target.value

    if(displayNumber=="." && pointFrequency==1){

        pointFrequency=0
    }
    else if(displayNumber=="." && pointFrequency==0){

        return  
    }
    if(operators.includes(displayNumber) && displayNumber!="."){
        pointFrequency=1
    }

    let currentExpLastChar=currentExp.slice(-1)

    if(operators.includes(displayNumber) && operators.includes(currentExpLastChar)){

        currentExp=currentExp.slice(0,-1)

    }

    textBox.value=currentExp+displayNumber
}

function clearButton(event){

    document.querySelector("#result").value=""
}

function evaluation(event){

    let operation=document.querySelector("#result").value

    let result=eval(operation)

    document.querySelector("#result").value=result

    pointFrequency=1

}

function backSpaceButton(event){

    let temp=document.querySelector("#result").value.slice(0,-1)

    document.querySelector("#result").value=temp
    
}