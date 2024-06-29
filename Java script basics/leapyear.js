var year=2024;

if ((year%100==0 && year%400==0) || (year%100!=0 && year%4==0)){
    console.log(year,"leap year");
}
else{
    console.log(year,"not a leap year");
}