let student=
[{

    name:"stde 2",
    age: 22,
    grade: "A"},
    
    {name:"names 3",
    age: 21,
    grade: "B"},
    {name:"name 4",
    age: 23,
    grade: 'C'},
]
let Grade=student.filter((std)=>{
    return std.grade=='B'}
)
console.log(Grade);