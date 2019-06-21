// Interfaces
interface Monster {    
    monsterName : string; 
    monsterHealthPoints : number;
    monsterExperience : number; 
    monsterModifier : string [];  
    monsterWeapon : string; 
    monsterImage : string; 
    monsterLevel : number;               //NEU//NEU//NEU//NEU//NEU//NEU
}



// Variablen
let monsterHolder : string = "monsterHoldingCell";      
let playerName : string = "Spielername";                                           
let playerXP : number = 999+999;                                                      
let playerXPperLevel : number = 999;                                                
let playerItems : string = "Laser-Nagelknipser"
let playerHP : number = 0;
let playerHPperLevel : number = 1998;

// Arrays
let prefix : string[] = ["Gurkengesichtige(s)-", "Toastessende(s)-", "Frühstücks-", "Mega-", "Super-Ultra-", "Neugeborene(s) ", "Fette(s)-", "Schlonzige(s) ", "Wiederkauende(s)"];
let monsterName : string[] = ["Zwiebel", "Dönertier", "Brillenschlange", "Trump", "Obunga", "Pickle Rick", "Morty", "Japaner", "Money Boy", "Hagrid", "Fresh D"];
let suffix : string[] = [" des Todes, mit Klingen", " mit Säureschleimauswurf ", " der Dummheit", " der Überheblichkeit", " der Fortpflanzung", " der Unnützlichkeit", " aus der Sauna", " aus der Brotdose"];
let monsterModifers : string[] = ["Hat keine Hobbys", "Isst gerne mehr als einen Döner bei Kebap Treff", "Donald Trumps Sohn", "Schaut gerne GNTM", "Hat nicht mehr Stärke als eine mittelgroße Kartoffel", "Macht den Braten auch nicht fett", "Heimlich verliebt in Justin Bieber", "Probiert gerne was neues aus", "Wehrt sich ungern", "Liebt den Geruch von Napalm am Morgen", "Wirft Brotkrumen hinter sich, in der Hoffnung sich nicht zu verlaufen"];
//Waffen
let monsterWeapon : string[] = ["Waffe: Hackebeil", "Waffe: Selleriestange", "Waffe: Taschenspielertrick", "Waffe: Yu-Gi-Yo Kartendeck", "Waffe: Atombombe", "Waffe: rote Ampel"] 
//Bildquellen
let Images : string[] = ["imgs/m1.png", "imgs/m2.png", "imgs/m3.png", "imgs/m4.png", "imgs/m5.png", "imgs/m6.png", "imgs/m7.png", "imgs/m8.png", "imgs/m9.png", "imgs/m10.png", "imgs/m11.png", "imgs/m12.png"] 

let monsterArray : Monster[] = [];
console.log(monsterArray );


window.onload = function () {
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);
    document.getElementById("fightall").addEventListener("click", fightAllMonsters);                 //NEU//NEU//NEU//NEU//NEU//NEU
    document.getElementById("fightallweak").addEventListener("click", fightAllWeakMonsters);         //NEU//NEU//NEU//NEU//NEU//NEU     //Event Listener für die 3 neuen Buttons
    document.getElementById("fightweakest").addEventListener("click", fightWeakestMonster);          //NEU//NEU//NEU//NEU//NEU//NEU
    updatePlayerLevel(1); 
}




// Funktionen
function generateMonster()
{   let monsterNumber = getRNGNumber(3) + 1;     


    for (let i = 0; i < monsterNumber; i++)     
    {
     let newMonsterWeapon : string = generatedMonsterWeapon();
     let newImage: string = Images[generatedImage()]; 
     let newMonsterName : string = generateMonsterName();              
     let newMonsterHP : number = generateMonsterHealthPoints();         
     let newMonsterXP : number = generateMonsterXP();                   
     let newMonsterModifier : string[] = generateMonsterModifer();      
     let newMonsterLevel : number = generateMonsterLevel()              //NEU//NEU//NEU//NEU//NEU//NEU  //Variable die zur Generierung des jewiligen Monsterlevels benötigt wird

     let newMonster : Monster = 
        {     
        monsterImage : newImage,                    
        monsterWeapon : newMonsterWeapon,                        
        monsterName : newMonsterName, 
        monsterHealthPoints : newMonsterHP,
        monsterExperience : newMonsterXP,
        monsterModifier : newMonsterModifier,
        monsterLevel : newMonsterLevel,                                 //NEU//NEU//NEU//NEU//NEU//NEU
        };

    monsterArray.push(newMonster);
    
    updateHTML();     
    }                                    
}





function monsterGenerateHTML(Operator : number)        
{
    let holdingDiv : HTMLElement = document.createElement("div");
    holdingDiv.setAttribute("id", "monster" + Operator);
    holdingDiv.setAttribute("class", "monster");                      
    document.getElementById(monsterHolder).appendChild(holdingDiv);     

    let monsterName : HTMLElement = document.createElement("p");      
    monsterName.innerHTML = monsterArray[Operator].monsterName;                
    holdingDiv.appendChild(monsterName);                               

    let monsterMod : HTMLElement = document.createElement("p");      
    monsterMod.innerHTML = monsterArray[Operator].monsterModifier[0] + ", " +  monsterArray[Operator].monsterModifier[1];
    holdingDiv.appendChild(monsterMod);                               

    let monsterImg : HTMLElement = document.createElement("img");        
    monsterImg.setAttribute("src", monsterArray[Operator].monsterImage);                
    monsterImg.setAttribute("alt", "Schreckliches Monster");                        
    holdingDiv.appendChild(monsterImg);                                 

    let monsterBtn : HTMLElement = document.createElement("BUTTON");    
    monsterBtn.innerHTML = "Monster zermalmen!";                        
    holdingDiv.appendChild(monsterBtn);                                 

    let monsterCount : number = Operator;                    
    console.log("Aktuelle Anzahl an Monstern: " + monsterCount);

    let monsterWeapon : HTMLElement = document.createElement("p");                  
    monsterWeapon.innerHTML = monsterArray[monsterCount].monsterWeapon;                
    holdingDiv.appendChild(monsterWeapon);

    let tempMonsterLevel : HTMLElement = document.createElement("p");                            //NEU//NEU//NEU//NEU//NEU//NEU
    tempMonsterLevel.innerHTML = "Monster Level: " + monsterArray[Operator].monsterLevel;        //Monster-Level-Darstellung    
    holdingDiv.appendChild(tempMonsterLevel);

    monsterBtn.addEventListener(                                      
        'click', function() {                                         
            fightMonster(monsterCount);                               
        }, false);                       
}


function getRNGNumber(_maxNumber : number) : number
{
    return Math.floor(Math.random() * _maxNumber);        
}


function generateMonsterName() : string
{
    let generatedMonsterName : string = ""; 


    // Monster-Vorname
    let rngNumber : number = getRNGNumber(prefix.length);               
    generatedMonsterName = prefix[rngNumber];               
    // Monster-Mittelname
    rngNumber = getRNGNumber(monsterName.length);                       
    generatedMonsterName += monsterName[rngNumber];                     
    // Monster-Titel
    rngNumber = getRNGNumber(suffix.length);                       
    generatedMonsterName += suffix[rngNumber];                   
    return generatedMonsterName;
}



function generateMonsterXP() : number
{
    let tempMonsterXP : number = 100 + getRNGNumber(850);
    return tempMonsterXP;
}

function generateMonsterHealthPoints() : number
{
    let tempMonsterHP : number = 333;
    return tempMonsterHP;
}

function generateMonsterModifer() : string[]
{
    let tempMonsterMod : string[] = [];                                        
    tempMonsterMod[0] = monsterModifers[getRNGNumber(monsterModifers.length)]; 
    tempMonsterMod[1] = monsterModifers[getRNGNumber(monsterModifers.length)]; 
    return tempMonsterMod;                                                     
}


function generatedMonsterWeapon() : string
{
    let generatedMonsterWeapon : string = "";
    generatedMonsterWeapon = monsterWeapon[getRNGNumber(monsterWeapon.length)];
    return generatedMonsterWeapon;
}


    
function generatedImage()           
{
    let tempImage : number = getRNGNumber(Images.length);
    return tempImage;   
}


function monsterGenerateHTMLAll()
{  
    for (let i = 0; i <= monsterArray.length - 1 ; i++) 
    {
        monsterGenerateHTML(i);
    }
}

function clearMonsterCell()
{
    let monsterCell = document.getElementById("monsterHoldingCell");
    if (monsterCell.hasChildNodes) 
    {
        while (monsterCell.firstChild) 
        {
            monsterCell.removeChild(monsterCell.firstChild);
        } 
    }
}

function updateHTML()
{
    clearMonsterCell();
    monsterGenerateHTMLAll();
    getOperator();
}

function getOperator()
{
    return monsterArray.length;
}




////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES////NEUES//

function fightMonster(_index : number)                                     
{
    if (monsterArray[_index].monsterLevel < tempPlayerLevel) {               //NEU//NEU//NEU//NEU//NEU//NEU
        playerXP += monsterArray[_index].monsterExperience;                  //falls das Level des Monster geringer ist, als das des Spielers, werden XP-Points auf den Spieler übertragen
        updatePlayerLevel(monsterArray[_index].monsterExperience);
        monsterArray.splice(_index, 1);
    } else 
    {
        updatePlayerLevel(- monsterArray[_index].monsterExperience);        //falls das Monster durch einen der Monster-Bekämpfen-Buttons nicht getötet werden konnte, weil das Level zu niedrig war, werden hierdurch XP-Points vom Spieler abgezogen
    }


    

    updateHTML();
}

function updatePlayerLevel(XP : number)            //  --> (Parameter)       //NEU//NEU//NEU//NEU//NEU//NEU
{
    playerXP += XP;
    if(playerXP < 0)                                                                    
    {
        playerXP = 0;
    }
    let tempPlayerLevel : number = Math.floor(playerXP / playerXPperLevel);

    document.getElementById("xpCounter").innerHTML = "Player-Level: " + tempPlayerLevel + " (XP: " + playerXP + " / " + playerXPperLevel + ")";       // Baue den String für die Spieler-Info zusammen
    console.log("Spieler " + playerName + " hat nun Level " + tempPlayerLevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)");        // Spieler-Level in der Konsole.

    let tempPoints : number = Math.floor(playerHP / playerHPperLevel);

    document.getElementById("hpCounter").innerHTML = "Player-Lifes: +" + tempPoints+ " (HP: " + playerHP + " / " + playerHPperLevel + ")";
    console.log("Spieler " + playerName + " hat nun " + playerHP + " Lebenspunkte" + " (" + playerHPperLevel + " pro Level)");

    if (tempPlayerLevel >= 20 ) //Wenn man Level 20 erreicht hat, hat man gewonnen --> Alert
    {
        alert("Sie haben gewonnen Sie Schlingel! Jetzt hat Ihr Leben einen Sinn!(?)");
    } //beginnt danach nicht von Level 0 an sondern zählt weiter von Level 20 --> noch nicht ganz gelöst...

}



//NEUE FUNKTIONEN

let tempPlayerLevel : number = Math.floor(playerXP / playerXPperLevel);     //Level-Variable des Spielers(Zahl wird gerundet) 


function generateMonsterLevel() : number 
{
    let tempMonsterLevel : number = Math.floor(Math.random()*11);  //Level-Variable, die einen ganzzahligen zufälligen Wert zw. 0 und 10 generiert


return tempMonsterLevel;  
} 


function fightAllMonsters()     //greift alle Monster an, ganz gleich welches Level diese haben
{
    for (let i: number = 0; i < monsterArray.length; i++)
    {
        fightMonster(i);
    }
   
}


function fightAllWeakMonsters()     //bekämpft (und löscht) alle Monster, die ein geringeres Level haben als der Spieler
{
    for (let i : number =  monsterArray.length-1; i>=0; i--)        // i-- statt i++, weil dann von der anderen Seite durchgelaufen wird
    {
        if (tempPlayerLevel > monsterArray[i].monsterLevel)
        {
            fightMonster(i);
        }
    }
}



function fightWeakestMonster()      //bekämpft (und löscht) das schwächste Monster
{
    let index = 0;
    let theWeakest = monsterArray[0].monsterLevel;
    for (let i = monsterArray.length - 1; i >= 0; i--) 
    {
        if (monsterArray[i].monsterLevel < theWeakest) 
        {
                index = i;
                theWeakest = monsterArray[i].monsterLevel;
         }
        if (monsterArray[index].monsterLevel < tempPlayerLevel) 
        {
            fightMonster(index);
        }
    }
}