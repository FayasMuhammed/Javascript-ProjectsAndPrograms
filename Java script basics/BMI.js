var weightInKg=50;

var heightIncm=166;

var heightInM=heightIncm/100;

if((weightInKg/heightInM**2)<=19){

    console.log("under weight")
}
else if((weightInKg/heightInM**2)>=19 && ((weightInKg/heightInM**2)<=25)){

    console.log("normal")
}
else if((weightInKg/heightInM**2)>=25 && ((weightInKg/heightInM**2)<=30)){

    console.log("overweight")
}
else if((weightInKg/heightInM**2)>=30){
    console.log("obesse")
}