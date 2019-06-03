// Interfaces
interface Monster {    
    monsterName : string; 
    monsterHealthPoints : number;
    monsterExperience : number; 
    monsterModifier : string [];  
    monsterWeapon : string; 
    monsterImage : string; 
}


// Variablen
let monsterHolder : string = "monsterHoldingCell";                                 
let playerName : string = "Spielername";                                           
let playerXP : number = 0;                                                          
let playerXPperLevel : number = 500;                                                
let playerItems : string = "Laser-Nagelknipser"

// Arrays
let prefix : string[] = ["Gurkengesichtige(s)-", "Toastessende(s)-", "Frühstücks-", "Mega-", "Super-Ultra-", "Neugeborene(s) ", "Fette(s)-", "Schlonzige(s) ", "Wiederkauende(s)"];
let monsterName : string[] = ["Zwiebel", "Dönertier", "Brillenschlange", "Trump", "Obunga", "Pickle Rick", "Morty", "Japaner", "Money Boy", "Hagrid", "Fresh D"];
let suffix : string[] = [" des Todes, mit Klingen", " mit Säureschleimauswurf ", " der Dummheit", " der Überheblichkeit", " der Fortpflanzung", " der Unnützlichkeit", " aus der Sauna", " aus der Brotdose"];
let monsterModifers : string[] = ["Hat keine Hobbys", "Isst gerne mehr als einen Döner bei Kebap Treff", "Donald Trumps Sohn", "Schaut gerne GNTM", "Hat nicht mehr Stärke als eine mittelgroße Kartoffel", "Macht den Braten auch nicht fett", "Heimlich verliebt in Justin Bieber", "Probiert gerne was neues aus", "Wehrt sich ungern", "Liebt den Geruch von Napalm am Morgen", "Wirft Brotkrumen hinter sich, in der Hoffnung sich nicht zu verlaufen"];
//Waffen
let monsterWeapon : string[] = ["Hackebeil", "Selleriestange", "Taschenspielertrick", "Yu-Gi-Yo Kartendeck", "Atombombe", "rote Ampel"] 
//Bildquellen
let Images : string[] = ["imgs/m1.png", "imgs/m2.png", "imgs/m3.png", "imgs/m4.png", "imgs/m5.png", "imgs/m6.png", "imgs/m7.png", "imgs/m8.png", "imgs/m9.png", "imgs/m10.png", "imgs/m11.png", "imgs/m12.png"] 

let monsterArray : Monster[] = [];
console.log(monsterArray );


window.onload = function () {
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);
    updatePlayerLevel(); 
}


//console.log(document.getElementById("monsterSpawner").innerHTML);   --> Fehlermeldung


// Funktionen
function generateMonster()
{
    let newMonsterWeapon : string = generatedMonsterWeapon();
    let newImage: string ; 
    let newMonsterName : string = generateMonsterName();              
    let newMonsterHP : number = generateMonsterHealthPoints();         
    let newMonsterXP : number = generateMonsterXP();                   
    let newMonsterModifier : string[] = generateMonsterModifer();      

    let newMonster : Monster = {     
        monsterImage : newImage,                    
        monsterWeapon : newMonsterWeapon,                        
        monsterName : newMonsterName, 
        monsterHealthPoints : newMonsterHP,
        monsterExperience : newMonsterXP,
        monsterModifier : newMonsterModifier,
        // Für monsterMoney fehlt die Zuweisung, weshalb es nicht funzt
    };

    monsterArray.push(newMonster);
    if(monsterArray.length != 0)                                     
    {console.log(monsterArray[monsterArray.length - 1].monsterExperience);} // Nur definierte Arrays sind zugriffsfähig, wie schon beschrieben.
    
    monsterGenerateHTML();                                              
}


function monsterGenerateHTML()
{
    let holdingDiv : HTMLElement = document.createElement("div");
    holdingDiv.setAttribute("id", "monster" + monsterArray.length);
    holdingDiv.setAttribute("class", "monster");                      
    document.getElementById(monsterHolder).appendChild(holdingDiv);     

    let monsterName : HTMLElement = document.createElement("p");      
    monsterName.innerHTML = monsterArray[monsterArray.length - 1].monsterName;                
    holdingDiv.appendChild(monsterName);                               

    let monsterMod : HTMLElement = document.createElement("p");      
    monsterMod.innerHTML = monsterArray[monsterArray.length - 1].monsterModifier[0] + ", " +  monsterArray[monsterArray.length -1].monsterModifier[1];
    holdingDiv.appendChild(monsterMod);                               

    let monsterImg : HTMLElement = document.createElement("img");        
    monsterImg.setAttribute("src", Images[generatedImage()]);                
    monsterImg.setAttribute("alt", "Schreckliches Monster");                        
    holdingDiv.appendChild(monsterImg);                                 

    let monsterBtn : HTMLElement = document.createElement("BUTTON");    
    monsterBtn.innerHTML = "Monster zermalmen!";                        
    holdingDiv.appendChild(monsterBtn);                                 

    let monsterCount : number = monsterArray.length;                    
    console.log("Aktuelle Anzahl an Monstern: " + monsterCount);

    monsterBtn.addEventListener(                                      
        'click', function() {                                         
            fightMonster(monsterCount);                               
        }, false);                       
}


// Wird für den Zugriff auf eine zufällige Stelle in einem Array aufgerufen.
// [ ] Optionale Aufgabe: verkleinere diesen Code auf eine Zeile mit nur einem Semikolon!
// Muss mit einer Zahl aufgerufen werden: getRNGNumber(5); // Liefert eine ganze Zahl zwischen 0 bis 4 zurück.
function getRNGNumber(_maxNumber : number) : number
{
    return Math.floor(Math.random() * _maxNumber);                  // Macht folgendes:...
}


function generateMonsterName() : string
{
    let generatedMonsterName : string = ""; // Leerer String erstellt


    // Monster-Vorname
    // Mathematik! Hier wird eine zufällig-generierte Zahl benötigt.
    let rngNumber : number = getRNGNumber(prefix.length);               // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Anfang) zu generieren.
    generatedMonsterName = prefix[rngNumber];                           // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    // Monster-Mittelname
    rngNumber = getRNGNumber(monsterName.length);                       // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Mitte) zu generieren.
    generatedMonsterName += monsterName[rngNumber];                     // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der ZUFALLSGENERIERTEN Zahl den entsprechenden Eintrag.

    // Monster-Titel
    rngNumber = getRNGNumber(suffix.length);                            // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Ende) zu generieren.
    generatedMonsterName += suffix[rngNumber];                          // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    return generatedMonsterName;
}


function generateMonsterHitPoints() : number
{
    let tempMonsterHP : number = 1 + getRNGNumber(10);
    return tempMonsterHP;
}


function generateMonsterXP() : number
{
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 550) + 100 zurück.
    let tempMonsterXP : number = 100 + getRNGNumber(850);
    return tempMonsterXP;
}


function generateMonsterModifer() : string[]
{
    let tempMonsterMod : string[] = [];                                         // Initialisiere ein leeres Array (verhindert Folge-Fehler)
    tempMonsterMod[0] = monsterModifers[getRNGNumber(monsterModifers.length)];  // Setze Schublade 0 des Arrays auf einen Wert.
    tempMonsterMod[1] = monsterModifers[getRNGNumber(monsterModifers.length)];  // Setze Schublade 1 des Arrays auf einen Wert.
    return tempMonsterMod;                                                      // Gebe das hier zusammengesetzte Array wieder zurück.
}


function generateMonsterHealthPoints() : number
{
    let tempMonsterHP : number = 1 + getRNGNumber(10);
    return tempMonsterHP;
}


// Generiert eine zufällige Waffe für das Monster
function generatedMonsterWeapon() : string
{
    let generatedMonsterWeapon : string = "";
    generatedMonsterWeapon = monsterWeapon[getRNGNumber(monsterWeapon.length)];
    return generatedMonsterWeapon;
}


// Generiert ein zufälliges Monsterbild       
function generatedImage()           
{
    let tempImage : number = getRNGNumber(Images.length);
    return tempImage;
}


// Aufgerufen, wenn man auf den Button klickt.
// Der Spieler kämpft gegen das entsprechende Monster. Er erhält dann Erfahrungspunkte.
function fightMonster(_index : number)
{

    console.log("Spieler kämpft gegen Monster und gewinnt!");                       // Ohne Logik mit if/else ist so etwas wie ein Kampf nicht leicht umzusetzen.
    console.log("Das Monster weigert sich zu verschwinden.");                       // Wird nächste Stunde erweitert.
    
    playerXP += monsterArray[_index - 1].monsterExperience;                 	    // _index ist in diesem Fall die Länge des Arrays - allerdings zählt der Computer beginnend von null, nicht eins! Deshalb _index-1.
    monsterArray = [];
    document.getElementById("monsterHoldingCell").innerHTML = "Du Loserbitch";
    updatePlayerLevel();
}


// Aufgerufen, um das HTML-Element, welches das Spieler-Level darstellt, zu erneuern.
function updatePlayerLevel()
{
    let tempLevel : number = Math.floor(playerXP / playerXPperLevel);                                                                           // Spieler-Level = XP / XPproLevel

    document.getElementById("xpCounter").innerHTML = "Player-Level: " + tempLevel + " (XP: " + playerXP + " / " + playerXPperLevel + ")";       // Baue den String für die Spieler-Info zusammen
    console.log("Spieler " + playerName + " hat nun Level " + tempLevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)");        // Spieler-Level in der Konsole.
}