const [first, ...rest] = [10, 20, 30, 40];
console.log(first);
console.log(rest);
let a=[12,34,56,78,90];
let [x,y,...z] = a;
console.log(a)
console.log(x);
console.log(y);
console.log(z);
let [m, n, ...o] = [1, 2, 3,4,5];
console.log(m);
console.log(n);
console.log(o);
function calc(a, ...b) {
    console.log("a:", a, "and b:", b);
}
calc(10, 20, 30, 40, 50);
calc(1, 2, 3);
calc(5);