class Parent{
    constructor(){
    console.log("Parent class constructor")
}
}
class Child extends Parent{
    constructor(){
        super()
    console.log("Child class constructor")
}
}
new Child();