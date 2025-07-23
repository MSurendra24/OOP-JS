class Product{
    prod_Name;
    prod_Cost;
    prod_Place;
    constructor(name,amount,location){
        this.prod_Name=name;
        this.prod_Cost=amount;
        this.prod_Place=location;
    }
}
class C1 extends Product{
    prod_value;
    prod_Id;
    constructor(worth,num,name,amount,location){
    super(name,amount,location)
    this.prod_value=worth;
    this.prod_Id=num;
    }

}
class C2 extends C1{
    prod_website;
    prod_Date;
    constructor(web,time,name,amount,location,worth,num){
        super(name,amount,location,worth,num)
        this.prod_website=web;
        this.prod_Date=time;

    }


}
let a=new C1(12,1,'su',500,'india');
console.log(a)
let b=new C2('online',2,'nm',500,'Ind',550,1234);
console.log(b);