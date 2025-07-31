let sum=(a,b)=>{
    return a + b;
}
let multiply=(a,b)=>{
    return a * b;
}
let calc=(a,b,Callback)=>{
    return Callback(a, b);
}
let r1=calc(10, 20, sum);
let r2=calc(10, 20, multiply);
console.log(r1);
console.log(r2);