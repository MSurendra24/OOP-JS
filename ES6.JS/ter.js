let goToGoa=(success,failure)=>{
    let acc_Bal=5000;
    acc_bal>=20000?success("Goa trip booked") : failure("Insufficient balance");
}
goToGoa ((message)=>{
        console.log(message);
    })
    ((error)=>{
        console.log(error);
})