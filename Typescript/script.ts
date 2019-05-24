console.log("Test the Toast!");
//Console.log//
//Alert//
window.onload = geladen

function geladen() {

    alert('Hey, was geht? Willst nen Buttertoast?');

    console.log("onload");
    //document.getElementById("ID1").addEventListener("click", DoStuff)
    //document.getElementById("ID2").addEventListener("hover", DoStuff)
    document.getElementById('button1').addEventListener("click", onClick);
    document.getElementById("toast").addEventListener("mouseover", mouseover);
}

//Buttons
function onClick() {
    console.log("click") 
    document.getElementById('button1').innerHTML = "Sorry Toasts sind alle :/";
}
function ButtonZwo () {
    document.getElementById("button2").innerHTML = "Burger verkaufen wir nicht!"    
}
//Klasse
function mouseover() {
    document.getElementById("toast").className = "changed"
}



//Stringnumber
function Stringnumber () {
    let s1: string = "tasty";
    let s2: string = "toasty";
    var n1: number = 6;
    var n2: number = 12;
}