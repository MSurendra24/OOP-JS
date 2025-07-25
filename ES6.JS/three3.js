var cars = [
    { model: "Toyota Camry", color: "Blue", price: 25000 },
    { model: "Honda Accord", color: "Red", price: 24000 },
    { model: "Ford Mustang", color: "Black", price: 35000 },
    { model: "Chevrolet Malibu", color: "White", price: 23000 },
    { model: "Nissan Altima", color: "Gray", price: 22000 },
    { model: "Hyundai Sonata", color: "Silver", price: 21000 },
    { model: "Kia Optima", color: "Green", price: 20000 },
    { model: "Volkswagen Passat", color: "Blue", price: 27000 },
    { model: "Subaru Legacy", color: "Brown", price: 26000 },
    { model: "Mazda 6", color: "Red", price: 24500 }
];
let car=[]
for(i=0;i<=cars.length-1;i++){
    if(cars[i].color==='Blue'){
        car.push(cars[i]);
    }

}
console.log(car)
console.log(car.length)


let car1=[]
for(j=0;j<=cars.length-1;j++){
    if(cars[j].color!=='Blue'){
        car1.push(cars[j]);
    }

}
console.log(car1)
console.log(car1.length)
console.log(cars.length)




console.log("_____________________");

let a=cars.filter(car=>car.color==='White')
console.log(car.length)
console.log(a);
