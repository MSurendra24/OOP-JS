class Parent{
    acc_Id;
    acc_Name;
    acc_Addr;
    constructor(id,name,addr){
        this.acc_Id=1;
        this.acc_Name="sur";
        this.acc_Addr="kerala";
    }
    

}
class CA extends Parent{
    acc_Bal;
    mib_Bal=500;
    acc_Num;
    constructor(bal,num){
        super()
        this.acc_Bal=bal;
        this.acc_Num=num;
    }

}
class SA extends Parent{
    acc_Hol;
    acc_Pin;
    acc_Amount;
    constructor(hol,pin,amount){
        super()
        this.acc_Hol=hol;
        this.acc_Pin=pin;
        this.acc_Amount=50000;
    }

}
let a=new CA(45000,1234);
let b=new SA("su",1199,40000);
console.log(a)
console.log(b)