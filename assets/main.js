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