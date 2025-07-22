class Parent{
    acc_Name;
    acc_Id;
    acc_Address;
    constructor(name,id,addr){
        this.acc_Name=name;
        this.acc_Id=id;
        this.acc_Address=addr;

    }
}
class Child extends Parent{
    acc_no;
    acc_bal;
    min_bal=500;
    constructor(){
        super("sure",123,"kerala")
        this.acc_no=1;
        this.acc_bal=45000;
        
    }
}
let a=new Child();
console.log(a);