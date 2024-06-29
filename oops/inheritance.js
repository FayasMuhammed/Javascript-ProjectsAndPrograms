// NOTE :- MULTIPLE INHERITANCE IS NOT SUPPORTED IN JAVASCRIPT (A CHILD CLASS CAN ONLY INHERITE FROM ONE PARENT CLASS)

class Parent{

    m1(){
        console.log("Parent class method");
    }
}

class Child extends Parent{

    m2(){
        console.log("child class method");
    }
}


var ch=new Child()

ch.m2()

ch.m1()