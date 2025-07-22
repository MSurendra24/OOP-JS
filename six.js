class Parent{
    pname;
    Id;
    constructor(name,id){
        this.pname=name;
        this.Id=id;
    }
}
class Child extends Parent{
    cname;
    constructor(cn,pn,zn){
        super(pn,zn)
        this.cname=cn;
    }
}
let a=new Child("sure","pm",1);
console.log(a)