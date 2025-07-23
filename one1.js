class Account{
    acc_Name;
    acc_Addr;
    acc_Mobl;
    constructor(name,addr,mobl){
        this.acc_Name=name;
        this.acc_Addr=addr;
        this.acc_Mobl=mobl;
    }
    update_Moblno(phno){}
    update_Address(addr){}
}
class SA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=500;
    constructor(id,amount,name,addr,mobl){
        super(name,addr,mobl)
        this.acc_Id=id;
        this.acc_Bal=amount;
    }
    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount;
    }
    withdrawl_Amount(amount){
        this.acc_Bal=this.acc_Bal-amount;

    }
    get_Balance(){return 0}
}
class CA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=5000;
}
let SA1=new SA(1,45000,'sure','kerala',1234);
SA1.deposit_Amount(5000);
console.log(SA1)
SA1.withdrawl_Amount(10000)
let CA1=new CA(2,'sur',45000,'tn',5678);
console.log(SA1)
console.log(CA1)