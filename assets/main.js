document.getElementById("submit-btn").onclick=function(){
    let sheds={
        A:document.getElementById("q"),
        B:document.getElementById("z"),
        C:document.getElementById("y"),
        D:document.getElementById("p"),
        total:document.getElementById("t")
    }
    let production=
        document.getElementById("G").value="Your productions in shed A is " + q.value+ " litres per day"
        document.getElementById("K").value="Your productions in shed B is " + z.value + " litres per day"
        document.getElementById("L").value="Your productions in shed C is " + y.value + " litres per day"
        document.getElementById("I").value="Your productions in shed D is " + p.value + " litres per day"
        document.getElementById("O").value="Your Total production is " + t.value + " litres per day"
document.getElementById("btn").onclick = function(){
    const price = 45 ;
    const weeklyoutput = t.value * price * 7;
    const yearlyoutput = t.value * price * 365;
    document.getElementById("weeklyoutput").value = "Your weekly income will be Ksh "+ weeklyoutput;
    document.getElementById("yearlyoutput").value = "Your Yearly income will be Ksh "+ yearlyoutput;
}
}

const cowSheds = ["shed A","shed B","shed C","shed D"];

let getSum = document.querySelector(".outputMain");

function findTotal(){
    output0.innerHTML = q.value;
    output1.innerHTML = z.value;
    output2.innerHTML = y.value;
    output3.innerHTML = p.value;

    var sum =function(tota){
        consolelog(q+z+y+p);
    }
    sum("sum")
}

function sumTotal() {
    var sheds = document.getElementById("sheds");
    var shedNumber = sheds.options[sheds.selectedIndex].text;

    if(txtDailyProd.value===""){
        window.alert("Please enter daily production of the selected shed.");
        return;
    }

    var dailyProduction = parseInt(txtDailyProd.value);
    var prod = { shed: shedNumber, production: dailyProduction };
    productions.push(prod);
    totalProduce += dailyProduction;
    console.log("Total Produce " + totalProduce);
    console.log(productions);
    window.alert("Daily production for " + shedNumber + " added.");
    txtDailyProd.value = "";

    var curDiv = document.getElementById("totals");

    var newDiv = document.createElement("div");
    var divContent = document.createTextNode("Your production in " + shedNumber + " will be Ksh " + dailyProduction);
}
