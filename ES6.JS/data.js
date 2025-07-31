let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000},
]
let createEmployee=(emp,Callback)=>{
    setTimeout(()=>{
    employees.push(emp),
    Callback()
    },4000)
}
let getEmployees=()=>{
    setTimeout(()=>{
    let rows=""
    for(let emp of employees){
        rows=rows+`<tr>
        <td>${emp.eid}</td>
        <td>${emp.ename}</td>
        <td>${emp.esal}</td>
        </tr>`
    }
document.getElementById('table_Data').innerHTML=rows;
},1000)
}
createEmployee({eid:103,ename:"Priya",esal:60000},getEmployees);
getEmployees();
