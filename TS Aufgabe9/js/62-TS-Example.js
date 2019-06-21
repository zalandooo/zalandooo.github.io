// Variablen
let monsterHolder = "monsterHoldingCell";
let playerName = "Spielername";
let playerXP = 0;
let playerXPperLevel = 999;
let playerItems = "Laser-Nagelknipser";
let playerHP = 0;
let playerHPperLevel = 1998;
// Arrays
let prefix = ["Gurkengesichtige(s)-", "Toastessende(s)-", "Frühstücks-", "Mega-", "Super-Ultra-", "Neugeborene(s) ", "Fette(s)-", "Schlonzige(s) ", "Wiederkauende(s)"];
let monsterName = ["Zwiebel", "Dönertier", "Brillenschlange", "Trump", "Obunga", "Pickle Rick", "Morty", "Japaner", "Money Boy", "Hagrid", "Fresh D"];
let suffix = [" des Todes, mit Klingen", " mit Säureschleimauswurf ", " der Dummheit", " der Überheblichkeit", " der Fortpflanzung", " der Unnützlichkeit", " aus der Sauna", " aus der Brotdose"];
let monsterModifers = ["Hat keine Hobbys", "Isst gerne mehr als einen Döner bei Kebap Treff", "Donald Trumps Sohn", "Schaut gerne GNTM", "Hat nicht mehr Stärke als eine mittelgroße Kartoffel", "Macht den Braten auch nicht fett", "Heimlich verliebt in Justin Bieber", "Probiert gerne was neues aus", "Wehrt sich ungern", "Liebt den Geruch von Napalm am Morgen", "Wirft Brotkrumen hinter sich, in der Hoffnung sich nicht zu verlaufen"];
//Waffen
let monsterWeapon = ["Waffe: Hackebeil", "Waffe: Selleriestange", "Waffe: Taschenspielertrick", "Waffe: Yu-Gi-Yo Kartendeck", "Waffe: Atombombe", "Waffe: rote Ampel"];
//Bildquellen
let Images = ["imgs/m1.png", "imgs/m2.png", "imgs/m3.png", "imgs/m4.png", "imgs/m5.png", "imgs/m6.png", "imgs/m7.png", "imgs/m8.png", "imgs/m9.png", "imgs/m10.png", "imgs/m11.png", "imgs/m12.png"];
let monsterArray = [];
console.log(monsterArray);
window.onload = function () {
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);
    updatePlayerLevel();
};
// Funktionen
function generateMonster() {
    let monsterNumber = getRNGNumber(3) + 1; //NEU//NEU//NEU
    for (let i = 0; i < monsterNumber; i++) //NEU//NEU//NEU
     {
        let newMonsterWeapon = generatedMonsterWeapon();
        let newImage = Images[generatedImage()];
        let newMonsterName = generateMonsterName();
        let newMonsterHP = generateMonsterHealthPoints();
        let newMonsterXP = generateMonsterXP();
        let newMonsterModifier = generateMonsterModifer();
        let newMonster = {
            monsterImage: newImage,
            monsterWeapon: newMonsterWeapon,
            monsterName: newMonsterName,
            monsterHealthPoints: newMonsterHP,
            monsterExperience: newMonsterXP,
            monsterModifier: newMonsterModifier,
        };
        monsterArray.push(newMonster);
        updateHTML(); //NEU//NEU//NEU
    }
}
function monsterGenerateHTML(Operator) {
    let holdingDiv = document.createElement("div");
    holdingDiv.setAttribute("id", "monster" + Operator);
    holdingDiv.setAttribute("class", "monster");
    document.getElementById(monsterHolder).appendChild(holdingDiv);
    let monsterName = document.createElement("p");
    monsterName.innerHTML = monsterArray[Operator].monsterName;
    holdingDiv.appendChild(monsterName);
    let monsterMod = document.createElement("p");
    monsterMod.innerHTML = monsterArray[Operator].monsterModifier[0] + ", " + monsterArray[Operator].monsterModifier[1];
    holdingDiv.appendChild(monsterMod);
    let monsterImg = document.createElement("img");
    monsterImg.setAttribute("src", monsterArray[Operator].monsterImage);
    monsterImg.setAttribute("alt", "Schreckliches Monster");
    holdingDiv.appendChild(monsterImg);
    let monsterBtn = document.createElement("BUTTON");
    monsterBtn.innerHTML = "Monster zermalmen!";
    holdingDiv.appendChild(monsterBtn);
    let monsterCount = Operator;
    console.log("Aktuelle Anzahl an Monstern: " + monsterCount);
    let monsterWeapon = document.createElement("p"); //NEU//NEU//NEU
    monsterWeapon.innerHTML = monsterArray[monsterCount].monsterWeapon;
    holdingDiv.appendChild(monsterWeapon);
    monsterBtn.addEventListener('click', function () {
        fightMonster(monsterCount);
    }, false);
}
// Wird für den Zugriff auf eine zufällige Stelle in einem Array aufgerufen.
function getRNGNumber(_maxNumber) {
    return Math.floor(Math.random() * _maxNumber);
}
function generateMonsterName() {
    let generatedMonsterName = ""; // Leerer String erstellt
    // Monster-Vorname
    // Mathematik! Hier wird eine zufällig-generierte Zahl benötigt.
    let rngNumber = getRNGNumber(prefix.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Anfang) zu generieren.
    generatedMonsterName = prefix[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.
    // Monster-Mittelname
    rngNumber = getRNGNumber(monsterName.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Mitte) zu generieren.
    generatedMonsterName += monsterName[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der ZUFALLSGENERIERTEN Zahl den entsprechenden Eintrag.
    // Monster-Titel
    rngNumber = getRNGNumber(suffix.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Ende) zu generieren.
    generatedMonsterName += suffix[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.
    return generatedMonsterName;
}
function generateMonsterHitPoints() {
    let tempMonsterHP = 1 + getRNGNumber(10);
    return tempMonsterHP;
}
function generateMonsterXP() {
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 850) + 100 zurück.
    let tempMonsterXP = 100 + getRNGNumber(850);
    return tempMonsterXP;
}
function generateMonsterHealthPoints() {
    let tempMonsterHP = 333;
    return tempMonsterHP;
}
function generateMonsterModifer() {
    let tempMonsterMod = []; // Initialisiere ein leeres Array (verhindert Folge-Fehler)
    tempMonsterMod[0] = monsterModifers[getRNGNumber(monsterModifers.length)]; // Setze Schublade 0 des Arrays auf einen Wert.
    tempMonsterMod[1] = monsterModifers[getRNGNumber(monsterModifers.length)]; // Setze Schublade 1 des Arrays auf einen Wert.
    return tempMonsterMod; // Gebe das hier zusammengesetzte Array wieder zurück.
}
// Generiert eine zufällige Waffe für das Monster
function generatedMonsterWeapon() {
    let generatedMonsterWeapon = "";
    generatedMonsterWeapon = monsterWeapon[getRNGNumber(monsterWeapon.length)];
    return generatedMonsterWeapon;
}
// Generiert ein zufälliges Monsterbild       
function generatedImage() {
    let tempImage = getRNGNumber(Images.length);
    return tempImage;
}
// Aufgerufen, wenn man auf den Button klickt.
// Der Spieler kämpft gegen das entsprechende Monster. Er erhält dann Erfahrungspunkte.
function fightMonster(_index) {
    //if?
    //else? 
    console.log("Spieler kämpft gegen Monster und gewinnt!"); // Ohne Logik mit if/else ist so etwas wie ein Kampf nicht leicht umzusetzen.
    console.log("Das Monster weigert sich zu verschwinden."); // Wird nächste Stunde erweitert.
    playerHP += monsterArray[_index].monsterHealthPoints;
    monsterArray.splice(_index, 1);
    updatePlayerLevel();
    playerXP += monsterArray[_index - 1].monsterExperience; // _index ist in diesem Fall die Länge des Arrays - allerdings zählt der Computer beginnend von null, nicht eins! Deshalb _index-1.
    updatePlayerLevel();
    updateHTML();
}
// Aufgerufen, um das HTML-Element, welches das Spieler-Level darstellt, zu erneuern.
function updatePlayerLevel() {
    let tempLevel = Math.floor(playerXP / playerXPperLevel); // Spieler-Level = XP / XPproLevel
    document.getElementById("xpCounter").innerHTML = "Player-Level: " + tempLevel + " (XP: " + playerXP + " / " + playerXPperLevel + ")"; // Baue den String für die Spieler-Info zusammen
    console.log("Spieler " + playerName + " hat nun Level " + tempLevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)"); // Spieler-Level in der Konsole.
    let tempPoints = Math.floor(playerHP / playerHPperLevel);
    document.getElementById("hpCounter").innerHTML = "Player-Lifes: +" + tempPoints + " (HP: " + playerHP + " / " + playerHPperLevel + ")";
    console.log("Spieler " + playerName + " hat nun " + playerHP + " Lebenspunkte" + " (" + playerHPperLevel + " pro Level)");
}
////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES//
function monsterGenerateHTMLAll() {
    for (let i = 1; i <= monsterArray.length; i++) {
        monsterGenerateHTML(i);
    }
}
function clearMonsterCell() {
    let monsterCell = document.getElementById("monsterHoldingCell");
    if (monsterCell.hasChildNodes) {
        while (monsterCell.firstChild) {
            monsterCell.removeChild(monsterCell.firstChild);
        }
    }
}
function updateHTML() {
    clearMonsterCell();
    monsterGenerateHTMLAll();
    getOperator();
}
function getOperator() {
    return monsterArray.length;
}
//# sourceMappingURL=62-TS-Example.js.map