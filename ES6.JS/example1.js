const cars = [
    { model: 'Toyota', color: 'Red' },
    { model: 'Honda', color: 'Blue' },
    { model: 'Ford', color: 'Black' },
    { model: 'BMW', color: 'White' },
    { model: 'Tata', color: 'Red' },
    { model: 'Mercedas', color: 'White' },
    { model: 'Tesla', color: 'Silver' }
];
let white_cars=cars.filter(car=>car.color=='White');
console.log(white_cars)
console.log(cars.length)
console.log(white_cars.length)