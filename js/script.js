document.getElementById("money-transfor").addEventListener("click", function(e){
     e.preventDefault(); // ekhane from tag tahaker jonno page ta pura reload nei preventDefault use korle page ta R reloaded nibe na 
    const moneyNumber = document.getElementById("money-number").value;
    const totalMoneyNumber = parseInt(moneyNumber);
    const moneyPass = document.getElementById("money-pass").value;

    if(moneyPass === "1234"){
        const mainMoney = document.getElementById("main-money").innerText;
        const totalMainMoney = parseInt(mainMoney);
    
        const totalMoney = totalMainMoney + totalMoneyNumber;
    
         document.getElementById("main-money").innerText = totalMoney;
         document.getElementById("money-number").value = "";
         document.getElementById("money-pass").value = "";
    }else{
        alert("Invalid Number please try again")
    }
    
    
})

