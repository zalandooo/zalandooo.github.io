//Konsolenausgabetest
console.log("Test The Toast!");
//Alert//
window.onload = geladen;
function geladen() {
    alert('Hey, was geht? Willst nen Buttertoast?');
    console.log("onload");
    //document.getElementById("ID1").addEventListener("click", DoStuff)
    //document.getElementById("ID2").addEventListener("hover", DoStuff)
    document.getElementById('button1').addEventListener("click", onClick);
    document.getElementById('button2').addEventListener("click", ButtonZwo);
    document.getElementById("toast").addEventListener("mouseover", mouseover);
    Stringnumber();
}
//Buttons
function onClick() {
    console.log("click");
    document.getElementById('button1').innerHTML = "Sorry Toasts sind alle :/";
}
function ButtonZwo() {
    document.getElementById("button2").innerHTML = "Burger verkaufen wir nicht!";
}
//Klasse
function mouseover() {
    document.getElementById("toast").className = "changed";
}
//Stringnumber
function Stringnumber() {
    let s1 = "tasty";
    let s2 = "toasty";
    var n1 = 6;
    var n2 = 12;
    console.log(s1 + s1);
    console.log(s1 + s2);
    console.log(s1 + n1);
    console.log(s1 + n2);
    console.log(s2 + s1);
    console.log(s2 + s2);
    console.log(s2 + n1);
    console.log(s2 + n2);
    console.log(n1 + n1);
    console.log(n1 + n2);
    console.log(n2 + n2);
}
window.onmouseover = hoverlabel;
hoverlabel();
//Neues HTML-Element über Toastscript
document.getElementById("label").addEventListener("mouseover", hoverlabel);
function hoverlabel() {
    let hoverlabel = document.createElement("label");
    hoverlabel.innerHTML = "Butter! Bitte noch mehr Budder!!!";
    document.getElementById("label").appendChild(hoverlabel);
}
//# sourceMappingURL=script.js.map