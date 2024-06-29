


var students={

    name:"Fayas",
    cource:"full stack",
    qualification:"diploma in CS",
    points:10
}


// console.log(students.qualification);

students.grade="A+"

// console.log(students);

if ("name" in students){

    // console.log("present");
}
else{

    // console.log("not present");
}


if("points" in students){

    students.points+=10
}
else{

    students.points=15
}

console.log(students);