setTimeout(() => {
    console.log("Hello, World!");
    let a = [12, 34, 56, 78, 90];
},4000);
setTimeout(()=>{
    console.log("This is a delayed message.");
},2000);
setTimeout(()=>{
    console.log("This is another delayed message.");
},1000);