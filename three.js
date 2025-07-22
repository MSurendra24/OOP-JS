class Parent{
    constructor(pname){
        this.pname=pname;
    }
}
class Child extends Parent{
    constructor(cname,pname){
        super(pname)
        this.cname=cname;
    }
}
let a=new Child("sure","kri");
console.log(a);