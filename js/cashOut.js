document.getElementById("cashOut").addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("addMoneyNumber").classList.add("hidden");
    document.getElementById("cashOutMoney").classList.remove("hidden");
})
document.getElementById("addMoney").addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("addMoneyNumber").classList.remove("hidden");
    document.getElementById("cashOutMoney").classList.add("hidden");
})


// cash out section start here now
// cash out section start here now


const cashMoney = document.getElementById("btn-blance").addEventListener("click", function(e){
    
    e.preventDefault();

    const  blance = document.getElementById("cashOutBalance").value;
    const  blancePass = document.getElementById("blance-pass").value;
    if(blancePass === "1234"){
        const mainBlance = document.getElementById("main-money").innerText;
        const newBlance = parseInt(mainBlance) - parseInt(blance);
        document.getElementById("main-money").innerText = newBlance;
        document.getElementById("cashOutBalance").value = "";
        document.getElementById("blance-pass").value = "";

        
    }else{
        alert("Invalid Input");
        
    }
    
    
})
