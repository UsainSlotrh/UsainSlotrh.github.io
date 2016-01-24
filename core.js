"use strict";

/*
 * CTRL+F the bracket code for easier use!
 *
 * ===========================================
 *
 * 1.GLOBALS[GS1]
 * 2.THE HEART[THT1]
 * 3.ROBOTS[RS1]
 * 4.FIGHTER[FR1]
 * 5.UPGRADES[US1]
 * 6.TEXT[TT1]
 * 7.FUNCTIONS[FS1]
 * 8.ADD ROBOTS[ARST1]
 * 9.ADD UPGRADES[AUST1]
 * 10.MATH[MH1]
 * 11.SHOW[SW1]
 * 12.SAVE/LOAD[SLD1]
 * 13.INIT[IT1]
 *
 * ===========================================
 * */

//GLOBALS START=====================================================[GS1]


var parts = 1000000000;
var knowledge = 10000000;
var reroll = 16;
var enemy = 0;
var timer;
var timer2;
var scana = 0;
var able = 1;
var trfix = 0;
var uphc = 1000;
var updc = 1000;
var uphl = 1;
var updl = 1;
var speedupOn = 0;
var speedupc = 100;

//

var damage = 0;
var enemydamage = 0;

//GLOBALS END=======================================================

//THE HEART START===================================================[THT1]

var Robot = function (name, cost, power, multi, amount, show) {
    this.name = name;
    this.cost = cost;
    this.power = power;
    this.multi = multi;
    this.amount = amount;
    this.show = show;
};

var Upgrade = function (name, cost, state, show) {
    this.name = name;
    this.cost = cost;
    this.state = state;
    this.show = show;
};


var Fighter = function (name, damage, health, healthmax) {
    this.name = name;
    this.damage = damage;
    this.health = health;
    this.healthmax = healthmax;
};

var dtrtext = function (text, emote) {
    this.text = text;
    this.emote = emote;
};

function changeText(text) {
    document.getElementById("textbox").innerHTML = text.text;
    document.getElementById("textbox").style.backgroundImage = "url(" + text.emote + ")";
}

function addrobot(robot) {
    if (parts >= robot.cost) {
        parts -= robot.cost;
        robot.amount++;
        robot.cost = Math.round(robot.cost * 1.2);
        updateText();
        show();
    }
}

function addupgrade(upgrade) {
    if (parts >= upgrade.cost) {
        parts -= upgrade.cost;
        updateText();
        upgrade.state = true;
        upgrade.show = false;
        show();
    }
}

function addupgradek(upgrade) {
    if (knowledge >= upgrade.cost) {
        knowledge -= upgrade.cost;
        updateText();
        upgrade.state = true;
        upgrade.show = false;
        show();
    }
}

////DICES

var Dice = function () {
    this.number = Math.floor(Math.random() * 13) - 6;
};

var dice0 = new Dice();
var dice1 = new Dice();
var dice2 = new Dice();
var dice3 = new Dice();
var dice4 = new Dice();
var dice5 = new Dice();
var dice6 = new Dice();
var dice7 = new Dice();


function changeDice(dice) {
    if (reroll >= 1) {
        reroll--;
        updateText();
        dice.number = Math.floor(Math.random() * 13) - 6;
        damageCalc();
    }
}


//THE HEART END=====================================================

//ROBOTS START======================================================[RS1]

var toyrobots = new Robot("Toy Robot", 10, 1, 1, 0, false);
var mechacockroach = new Robot("Mecha Cockroach", 100, 5, 1, 0, false);
var mechamantis = new Robot("Mecha Mantis", 1000, 25, 1, 0, false);
var mechawolf = new Robot("Mecha Wolf", 10000, 125, 1, 0, false);
var mechagorilla = new Robot("Mecha Gorilla", 100000, 625, 1, 0, false);
//
var teacherbots = new Robot("Teacherbot", 10, 1, 1, 0, false);
var cyborgdolphin = new Robot("Cyborg Dolphin", 100, 5, 1, 0, false);
var cyborgparrot = new Robot("Cyborg Parrot", 1000, 25, 1, 0, false);
var cyborgchimpanzee = new Robot("Cyborg Chimpanzee", 10000, 125, 1, 0, false);
var cyborghuman = new Robot("Cyborg Human", 100000, 625, 1, 0, false);


//ROBOTS END========================================================

//FIGHTER START========================================================[FR1]

var fightertoyrobot = new Fighter("TOYRO-BOT", 100, 2000, 2000);
var fighterenemy = new Fighter("Cockroach King", 150, 2000, 2000);

//FIGHTER END==========================================================

//UPGRADES START====================================================[US1]

var wrench = new Upgrade("Wrench", 10, false, true);
var fix = new Upgrade("Fix Toy Robot", 100, false, false);
//
var jetpacks = new Upgrade("Jetpacks", 250, false, false);
var eyeglasses = new Upgrade("Eyeglasses", 250, false, false);
//
var language = new Upgrade("Language", 25, false, false);
var engineering = new Upgrade("Engineering", 50, false, false);
var boxing = new Upgrade("Boxing", 1000, false, false);
var scanner = new Upgrade("Scanner", 2500, false, false);
var overdrive = new Upgrade("Overdrive", 10000, false, false);


//UPGRADES END======================================================


//TEXT START=======================================================================[TT1]

var fixt = new dtrtext("", "toyrobotblue.png");
var fixt2 = new dtrtext("...", "toyrobotnormal.png");
var languaget = new dtrtext("Hello. I am TOYRO-BOT dude!", "toyrobotdotdotdot.png");
var engineeringt = new dtrtext("Woah I have new ideas for you to make dude!", "toyrobotexclam.png");
var boxingt = new dtrtext("Why is this boxing manual in binary dude?", "toyrobotquestion.png");
var scannert = new dtrtext("I promise I won't break it dude!", "toyrobotexclam.png");
var overdrivet = new dtrtext("Push it 'till the limit breaks dude!", "toyrobotexclam.png");
//
var jetpackst = new dtrtext("So err...Why didn't I get one dude?", "toyrobotquestion.png");
var eyeglassest = new dtrtext("They look dumb as hell now dude!", "toyrobotlol.png");
//
var cockroacht = new dtrtext("I shall call him Squishy, he shall be mine ,and he shall be my Squishy dude.", "toyrobotdotdotdot.png");
var dolphint = new dtrtext("The dolphins name is 'Ecco'. Told me he had to save his pod or something. Too long didn't listen dude!", "toyrobotlol.png");
var mantist = new dtrtext("The mantis said he can read my memory card and make me vibrate randomly. Ye right dude.", "toyrobotdotdotdot.png");
var parrott = new dtrtext("Oh my god. Make it stop saying 'Hal' the whole time dude!", "toyrobotexclam.png");
var soldiert = new dtrtext("That soldier called his gun a boomstick. What a moron dude!", "toyrobotlol.png");
var wolft = new dtrtext("The wolf I fought had a sniper on it's back for some reason dude...", "toyrobotquestion.png");
var chimpanzeet = new dtrtext("He loves drinking sodas! It even tried selling me a weapon dude!", "toyrobotlol.png");
var gorillat = new dtrtext("He tells me he hates italian guys and loves blondes, dude.", "toyrobotdotdotdot.png");
var humant = new dtrtext("This guy keeps telling me he never asked to be a cyborg. That's like super duper sad dude.", "toyrobotlol.png");
//TEXT START=======================================================================


//FUNCTIONS START======================================================[FS1]

function addParts() {
    parts++;
    updateText();
}

function addKnowledge() {
    knowledge++;
    updateText();
}

function roll0() {
    changeDice(dice0);
    document.getElementById("d0").innerHTML = dice0.number;
}

function roll1() {
    changeDice(dice1);
    document.getElementById("d1").innerHTML = dice1.number;
}

function roll2() {
    changeDice(dice2);
    document.getElementById("d2").innerHTML = dice2.number;
}

function roll3() {
    changeDice(dice3);
    document.getElementById("d3").innerHTML = dice3.number;
}

function roll4() {
    changeDice(dice4);
    document.getElementById("d4").innerHTML = dice4.number;
}

function roll5() {
    changeDice(dice5);
    document.getElementById("d5").innerHTML = dice5.number;
}

function roll6() {
    changeDice(dice6);
    document.getElementById("d6").innerHTML = dice6.number;
}

function roll7() {
    changeDice(dice7);
    document.getElementById("d7").innerHTML = dice7.number;
}

function rollall() {
    reroll = 16;
    changeDice(dice0);
    changeDice(dice1);
    changeDice(dice2);
    changeDice(dice3);
    changeDice(dice4);
    changeDice(dice5);
    changeDice(dice6);
    changeDice(dice7);
    document.getElementById("d0").innerHTML = dice0.number;
    document.getElementById("d1").innerHTML = dice1.number;
    document.getElementById("d2").innerHTML = dice2.number;
    document.getElementById("d3").innerHTML = dice3.number;
    document.getElementById("d4").innerHTML = dice4.number;
    document.getElementById("d5").innerHTML = dice5.number;
    document.getElementById("d6").innerHTML = dice6.number;
    document.getElementById("d7").innerHTML = dice7.number;
}

function toWin() {
    if (enemy === 0) {
        alert("The cockroach king is now your minion!");
        mechacockroach.show = true;
        changeText(cockroacht);
    } else if (enemy === 1) {
        alert("The dolphin is now your underwater slave!");
        cyborgdolphin.show = true;
        changeText(dolphint);
    } else if (enemy === 2) {
        alert("The crazy praying mantis is now your loyal follower!");
        mechamantis.show = true;
        changeText(mantist);
    } else if (enemy === 3) {
        alert("TOYRO-BOT captured the Smart Parrot!");
        cyborgparrot.show = true;
        changeText(parrott);
    } else if (enemy === 4) {
        alert("The Toy Soldier flees!");
        overdrive.show = true;
        changeText(soldiert);
    } else if (enemy === 5) {
        alert("The wolf has been tamed!");
        mechawolf.show = true;
        changeText(wolft);
    } else if (enemy === 6) {
        alert("The chimpanzee wants to be your best friend now.");
        cyborgchimpanzee.show = true;
        changeText(chimpanzeet);
    } else if (enemy === 7) {
        alert("TOYRO-BOT and the Gorilla became good friends!");
        mechagorilla.show = true;
        changeText(gorillat);
    } else if (enemy === 8) {
        alert("The human promised it will obey every of your orders.");
        cyborghuman.show = true;
        changeText(humant);
    }
    scana = 0;
    enemy++;
    fightertoyrobot.health = fightertoyrobot.healthmax;
    show();
}

function toLose() {
    if (enemy === 0) {
        alert("The cockroach king has beaten TOYRO-BOT!");
    } else if (enemy === 1) {
        alert("The dolphin has beaten TOYRO-BOT!");
    } else if (enemy === 2) {
        alert("The crazy praying mantis has beaten TOYRO-BOT!!");
    } else if (enemy === 3) {
        alert("The Smart Parrot has beaten TOYRO-BOT!");
    } else if (enemy === 4) {
        alert("The Toy Soldier has beaten TOYRO-BOT!");
    } else if (enemy === 4) {
        alert("The Wolf has beaten TOYRO-BOT!");
    } else if (enemy === 6) {
        alert("The Chimpanzee has beaten TOYRO-BOT!");
    } else if (enemy === 7) {
        alert("The Gorilla has beaten TOYRO-BOT!");
    } else if (enemy === 8) {
        alert("The Human has beaten TOYRO-BOT!");
    }
    fightertoyrobot.health = fightertoyrobot.healthmax;
    changetoFix();
    show();
}

function toDraw() {
    if (enemy === 0) {
        alert("The cockroach king and TOYRO-BOT get destroyed!");
        changeText(cockroacht);
    } else if (enemy === 1) {
        alert("The dolphin and and TOYRO-BOT get destroyed!");
        changeText(dolphint);
    } else if (enemy === 2) {
        alert("The crazy praying mantis and TOYRO-BOT get destroyed!");
        changeText(mantist);
    } else if (enemy === 3) {
        alert("The Smart Parrot and TOYRO-BOT get destroyed!");
        changeText(parrott);
    } else if (enemy === 4) {
        alert("The Toy Soldier and TOYRO-BOT get destroyed!");
        changeText(soldiert);
    } else if (enemy === 5) {
        alert("The Wolf and TOYRO-BOT get destroyed!");
        changeText(wolft);
    } else if (enemy === 6) {
        alert("The Chimpanzee and TOYRO-BOT get destroyed!");
        changeText(chimpanzeet);
    } else if (enemy === 7) {
        alert("The Gorilla and TOYRO-BOT get destroyed!");
        changeText(gorillat);
    } else if (enemy === 8) {
        alert("The Human and TOYRO-BOT get destroyed!");
        changeText(humant);
    }
    scana = 0;
    enemy++;
    fightertoyrobot.health = fightertoyrobot.healthmax;
    changetoFix();
    show();
}

function battleCheck() {
    if (fightertoyrobot.health <= 0 && fighterenemy.health <= 0) {
        toDraw();
        fromSubtoMain();
        return;
    }
    if (fightertoyrobot.health <= 0) {
        toLose();
        fromSubtoMain();
        return;
    }
    if (fighterenemy.health <= 0) {
        toWin();
        fromSubtoMain();
    }
}

function damagePhase() {
    damageCalc();
    fightertoyrobot.health -= enemydamage;
    fighterenemy.health -= damage;
    hptext();
    rollall();
    battleCheck();
}

function enemyCheck() {
    if (enemy === 0) {
        fighterenemy.name = "Cockroach King";
        fighterenemy.healthmax = 1000;
        fighterenemy.health = 1000;
        fighterenemy.damage = 100;
        hptext();
        document.getElementById("enemy").innerHTML = fighterenemy.name;
    } else if (enemy === 1) {
        fighterenemy.name = "Dolphin";
        fighterenemy.healthmax = 2000;
        fighterenemy.health = 2000;
        fighterenemy.damage = 100;
        hptext();
        document.getElementById("enemy").innerHTML = fighterenemy.name;
    } else if (enemy === 2) {
        fighterenemy.name = "Mantis";
        fighterenemy.healthmax = 2000;
        fighterenemy.health = 2000;
        fighterenemy.damage = 150;
        hptext();
        document.getElementById("enemy").innerHTML = fighterenemy.name;
    } else if (enemy === 3) {
        fighterenemy.name = "Parrot";
        fighterenemy.healthmax = 3000;
        fighterenemy.health = 3000;
        fighterenemy.damage = 150;
        hptext();
        document.getElementById("enemy").innerHTML = fighterenemy.name;
    } else if (enemy === 4) {
        fighterenemy.name = "Toy Soldier";
        fighterenemy.healthmax = 3000;
        fighterenemy.health = 3000;
        fighterenemy.damage = 200;
        hptext();
        document.getElementById("enemy").innerHTML = fighterenemy.name;
    } else if (enemy === 5) {
        fighterenemy.name = "Wolf";
        fighterenemy.healthmax = 4000;
        fighterenemy.health = 4000;
        fighterenemy.damage = 200;
        hptext();
        document.getElementById("enemy").innerHTML = fighterenemy.name;
    } else if (enemy === 6) {
        fighterenemy.name = "Chimpanzee";
        fighterenemy.healthmax = 4000;
        fighterenemy.health = 4000;
        fighterenemy.damage = 250;
        hptext();
        document.getElementById("enemy").innerHTML = fighterenemy.name;
    } else if (enemy === 7) {
        fighterenemy.name = "Gorilla";
        fighterenemy.healthmax = 5000;
        fighterenemy.health = 5000;
        fighterenemy.damage = 250;
        hptext();
        document.getElementById("enemy").innerHTML = fighterenemy.name;
    } else if (enemy === 8) {
        fighterenemy.name = "Human";
        fighterenemy.healthmax = 6000;
        fighterenemy.health = 6000;
        fighterenemy.damage = 250;
        hptext();
        document.getElementById("enemy").innerHTML = fighterenemy.name;
    } else if (enemy === 9) {
        alert("Sorry mate, content runs out here! Will update. Thank you soo much for playing (°v°)/");
    }
}

function changetoFix() {
    document.getElementById("fight").innerHTML = "Repair TOYRO-BOT:" + trfix + "%";
    able = 0;
}

function changetoFight() {
    document.getElementById("fight").innerHTML = "Fight next enemy!";
    able = 1;
    trfix = 0;
}

function fightBattle() {
    if (able === 1) {
        enemyCheck();
        fromMaintoSub();
    } else {
        if (trfix >= 99) {
            changetoFight();
        } else {
            trfix++;
            document.getElementById("fight").innerHTML = "Repair TOYRO-BOT:" + trfix + "%";
        }
    }

}

function fromMaintoSub() {
    document.getElementById("sub").style.display = "block";
    document.getElementById("main").style.display = "none";
}

function fromSubtoMain() {
    document.getElementById("main").style.display = "block";
    document.getElementById("sub").style.display = "none";
}

function updateText() {
    document.getElementById("p").innerHTML = "Parts: " + parts;
    document.getElementById("k").innerHTML = "Knowledge: " + knowledge;
    document.getElementById("reroll").innerHTML = "Rerolls: " + reroll;
    hptext();
    robotext();
    scantext();
    statstext();
}

function scantext() {
    document.getElementById("scan2").innerHTML = scana + "%";
    if (scana >= 100) {
        document.getElementById("ename").innerHTML = "Name: " + fighterenemy.name;
        document.getElementById("edamage").innerHTML = "Damage: " + fighterenemy.damage;
        document.getElementById("ehealth").innerHTML = "Health: " + fighterenemy.healthmax;
    } else {
        document.getElementById("ename").innerHTML = "Name: ???";
        document.getElementById("edamage").innerHTML = "Damage: ???";
        document.getElementById("ehealth").innerHTML = "Health: ???";
    }
}

function hptext() {
    document.getElementById("goodhp").innerHTML = "HP: " + fightertoyrobot.health + "/" + fightertoyrobot.healthmax;
    document.getElementById("badhp").innerHTML = "HP: " + fighterenemy.health + "/" + fighterenemy.healthmax;
}

function statstext() {
    document.getElementById("tdamage").innerHTML = "Damage: " + fightertoyrobot.damage;
    document.getElementById("thealth").innerHTML = "Health: " + fightertoyrobot.healthmax;
    document.getElementById("upd").innerHTML = "Upgrade damage" + "<br>" + "Cost: " + updc + " Parts" + "<br>" + "Level: " + updl;
    document.getElementById("uph").innerHTML = "Upgrade max HP" + "<br>" + "Cost: " + uphc + " Parts" + "<br>" + "Level: " + uphl;
}

function robotext() {
    document.getElementById("tr").innerHTML = toyrobots.name + "<br>" + "Amount: " + toyrobots.amount + "<br>" + "Cost: " + toyrobots.cost + " Parts" + "<br>" + "Parts per second: " + toyrobots.amount * toyrobots.power * toyrobots.multi;
    document.getElementById("mc").innerHTML = mechacockroach.name + "<br>" + "Amount: " + mechacockroach.amount + "<br>" + "Cost: " + mechacockroach.cost + " Parts" + "<br>" + "Parts per second: " + mechacockroach.amount * mechacockroach.power * mechacockroach.multi;
    document.getElementById("mm").innerHTML = mechamantis.name + "<br>" + "Amount: " + mechamantis.amount + "<br>" + "Cost: " + mechamantis.cost + " Parts" + "<br>" + "Parts per second: " + mechamantis.amount * mechamantis.power * mechamantis.multi;
    document.getElementById("mw").innerHTML = mechawolf.name + "<br>" + "Amount: " + mechawolf.amount + "<br>" + "Cost: " + mechawolf.cost + " Parts" + "<br>" + "Parts per second: " + mechawolf.amount * mechawolf.power * mechawolf.multi;
    document.getElementById("mg").innerHTML = mechagorilla.name + "<br>" + "Amount: " + mechagorilla.amount + "<br>" + "Cost: " + mechagorilla.cost + " Parts" + "<br>" + "Parts per second: " + mechagorilla.amount * mechagorilla.power * mechagorilla.multi;
    document.getElementById("tb").innerHTML = teacherbots.name + "<br>" + "Amount: " + teacherbots.amount + "<br>" + "Cost: " + teacherbots.cost + " Parts" + "<br>" + "Knowledge per second: " + teacherbots.amount * teacherbots.power * teacherbots.multi;
    document.getElementById("cd").innerHTML = cyborgdolphin.name + "<br>" + "Amount: " + cyborgdolphin.amount + "<br>" + "Cost: " + cyborgdolphin.cost + " Parts" + "<br>" + "Knowledge per second: " + cyborgdolphin.amount * cyborgdolphin.power * cyborgdolphin.multi;
    document.getElementById("cp").innerHTML = cyborgparrot.name + "<br>" + "Amount: " + cyborgparrot.amount + "<br>" + "Cost: " + cyborgparrot.cost + " Parts" + "<br>" + "Knowledge per second: " + cyborgparrot.amount * cyborgparrot.power * cyborgparrot.multi;
    document.getElementById("cc").innerHTML = cyborgchimpanzee.name + "<br>" + "Amount: " + cyborgchimpanzee.amount + "<br>" + "Cost: " + cyborgchimpanzee.cost + " Parts" + "<br>" + "Knowledge per second: " + cyborgchimpanzee.amount * cyborgchimpanzee.power * cyborgchimpanzee.multi;
    document.getElementById("ch").innerHTML = cyborghuman.name + "<br>" + "Amount: " + cyborghuman.amount + "<br>" + "Cost: " + cyborghuman.cost + " Parts" + "<br>" + "Knowledge per second: " + cyborghuman.amount * cyborghuman.power * cyborghuman.multi;
}

function scanenemy() {
    if (scana <= 99) {
        scana += 1;
        enemyCheck();
        updateText();
    }
}

function upDamage() {
    if (parts >= updc) {
        fightertoyrobot.damage += 25;
        parts -= updc;
        updc *= 1.5;
        updc = Math.round(updc);
        updl++;
        updateText();
    }
}

function upHealth() {
    if (parts >= uphc) {
        fightertoyrobot.healthmax += 50;
        fightertoyrobot.health = fightertoyrobot.healthmax;
        parts -= uphc;
        uphc *= 1.5;
        uphc = Math.round(uphc);
        uphl++;
        updateText();
    }
}

function speedup() {
    if (speedupOn === 0 && speedupc === 100) {
        speedupOn = 1;
        clearInterval(timer);
        timer = setInterval(total, 100);
    }
}

//FUNCTIONS END=========================================================


//ADD ROBOTS START=============================================================[ARST1]

function addToyrobot() {
    addrobot(toyrobots);
}

function addMechcockroach() {
    addrobot(mechacockroach);
}

function addMechamantis() {
    addrobot(mechamantis);
}

function addMechawolf() {
    addrobot(mechawolf);
}

function addMechagorilla() {
    addrobot(mechagorilla);
}

function addTeacherbot() {
    addrobot(teacherbots);
}

function addCyborgdolphin() {
    addrobot(cyborgdolphin);
}

function addCyborgparrot() {
    addrobot(cyborgparrot);
}

function addCyborgchimpanzee() {
    addrobot(cyborgchimpanzee);
}

function addCyborghuman() {
    addrobot(cyborghuman);
}


//ADD ROBOTS END===============================================================

//ADD UPGRADES START=============================================================[AUST1]

function addwrench() {
    addupgrade(wrench);
}

function addfix() {
    addupgrade(fix);
    changeText(fixt2);
}

function addjetpacks() {
    toyrobots.multi++;
    addupgradek(jetpacks);
    changeText(jetpackst);
}

function addeyeglasses() {
    teacherbots.multi++;
    addupgradek(eyeglasses);
    changeText(eyeglassest);
}

function addlanguage() {
    addupgradek(language);
    changeText(languaget);
}

function addengineering() {
    addupgradek(engineering);
    changeText(engineeringt);
}

function addboxing() {
    addupgradek(boxing);
    changeText(boxingt);
}

function addscanner() {
    addupgradek(scanner);
    changeText(scannert);
}

function addoverdrive() {
    addupgradek(overdrive);
    changeText(overdrivet);
}

//ADD UPGRADES END===============================================================

//MATH START========================================================================[MH1]

function total() {
    if (speedupOn === 1) {
        speedupc--;
        document.getElementById("speedup").innerHTML = "OVERDRIVE ON! " + speedupc + "%";
        if (speedupc <= 0) {
            speedupOn = 0;
            clearInterval(timer);
            timer = setInterval(total, 1000);
        }
    } else if (speedupOn === 0 && speedupc <= 100) {
        if (speedupc >= 100) {
            document.getElementById("speedup").innerHTML = "OVERDRIVE READY!";
        } else {
            speedupc += 0.25;

            document.getElementById("speedup").innerHTML = "Cooldown..." + speedupc + "%";
        }

    }
    parts += toyrobots.amount * (toyrobots.power * toyrobots.multi);
    parts += mechacockroach.amount * (mechacockroach.power * mechacockroach.multi);
    parts += mechamantis.amount * (mechamantis.power * mechamantis.multi);
    parts += mechawolf.amount * (mechawolf.power * mechawolf.multi);
    parts += mechagorilla.amount * (mechagorilla.power * mechagorilla.multi);
    knowledge += teacherbots.amount * (teacherbots.power * teacherbots.multi);
    knowledge += cyborgdolphin.amount * (cyborgdolphin.power * cyborgdolphin.multi);
    knowledge += cyborgparrot.amount * (cyborgparrot.power * cyborgparrot.multi);
    knowledge += cyborgchimpanzee.amount * (cyborgchimpanzee.power * cyborgchimpanzee.multi);
    knowledge += cyborghuman.amount * (cyborghuman.power * cyborghuman.multi);
    updateText();
}

function damageCalc() {
    damage = fightertoyrobot.damage + ((fightertoyrobot.damage / 10) * ((dice0.number + dice1.number) - (dice6.number + dice7.number)));
    enemydamage = fighterenemy.damage + ((fighterenemy.damage / 10) * ((dice4.number + dice5.number) - (dice2.number + dice3.number)));
    document.getElementById("gooddamage").innerHTML = "Damage to enemy: " + damage;
    document.getElementById("baddamage").innerHTML = "Damage to TOYRO-BOT: " + enemydamage;
}

//MATH END==========================================================================

//SHOW START=======================================================================[SW1]

function show() {

    //UPGRADE STATES START

    if (wrench.state === true) {
        toyrobots.show = true;
    }
    if (fix.state === true) {
        fix.show = false;
        language.show = true;
        document.getElementById("collectk").style.display = "inline-block";
        document.getElementById("textbox").style.display = "block";

    }
    if (language.state === true) {
        teacherbots.show = true;
        language.show = false;
        engineering.show = true;
    }

    if (engineering.state === true) {
        engineering.show = false;
        boxing.show = true;
        jetpacks.show = true;
        eyeglasses.show = true;
    }
    if (boxing.state === true) {
        boxing.show = false;
        scanner.show = true;
        document.getElementById("fight").style.display = "block";
        document.getElementById("upd").style.display = "block";
        document.getElementById("uph").style.display = "block";
        document.getElementById("ttext").style.display = "block";
    }

    if (scanner.state === true) {
        scanner.show = false;
        document.getElementById("scan").style.display = "block";
        document.getElementById("scan2").style.display = "block";
        document.getElementById("etext").style.display = "block";
    }

    if (overdrive.state === true) {
        overdrive.show = false;
        document.getElementById("speedup").style.display = "block";
    }

    if (jetpacks.state === true) {
        jetpacks.show = false;
    }
    if (eyeglasses.state === true) {
        eyeglasses.show = false;
    }

    //UPGRADE STATES END

    //ROBOTS START

    if (toyrobots.show === true) {
        document.getElementById("tr").style.display = "block";
    } else {
        document.getElementById("tr").style.display = "none";
    }
    if (mechacockroach.show === true) {
        document.getElementById("mc").style.display = "block";
    } else {
        document.getElementById("mc").style.display = "none";
    }
    if (mechamantis.show === true) {
        document.getElementById("mm").style.display = "block";
    } else {
        document.getElementById("mm").style.display = "none";
    }

    if (mechawolf.show === true) {
        document.getElementById("mw").style.display = "block";
    } else {
        document.getElementById("mw").style.display = "none";
    }

    if (mechagorilla.show === true) {
        document.getElementById("mg").style.display = "block";
    } else {
        document.getElementById("mg").style.display = "none";
    }

    if (teacherbots.show === true) {
        document.getElementById("tb").style.display = "block";
    } else {
        document.getElementById("tb").style.display = "none";
    }
    if (cyborgdolphin.show === true) {
        document.getElementById("cd").style.display = "block";
    } else {
        document.getElementById("cd").style.display = "none";
    }
    if (cyborgparrot.show === true) {
        document.getElementById("cp").style.display = "block";
    } else {
        document.getElementById("cp").style.display = "none";
    }

    if (cyborgchimpanzee.show === true) {
        document.getElementById("cc").style.display = "block";
    } else {
        document.getElementById("cc").style.display = "none";
    }

    if (cyborghuman.show === true) {
        document.getElementById("ch").style.display = "block";
    } else {
        document.getElementById("ch").style.display = "none";
    }

    //ROBOTS END

    //TOYRO-BOT START

    if (able === 1) {
        document.getElementById("fight").innerHTML = "Fight next enemy!";
    } else {
        document.getElementById("fight").innerHTML = "Repair TOYRO-BOT:" + trfix + "%";
    }

    //TOYRO-BOT END

    //AMOUNT START

    if (toyrobots.amount >= 10 && fix.state === false) {
        fix.show = true;
        document.getElementById("tr").style.display = "none";
        document.getElementById("textbox").style.display = "block";
        changeText(fixt);
    }

    //AMOUNT END


    //UPGRADES START

    if (wrench.show === true) {
        document.getElementById("wrench").style.display = "block";
    } else {
        document.getElementById("wrench").style.display = "none";
    }

    if (fix.show === true) {
        document.getElementById("fix").style.display = "block";
    } else {
        document.getElementById("fix").style.display = "none";
    }

    if (jetpacks.show === true) {
        document.getElementById("jetpacks").style.display = "block";
    } else {
        document.getElementById("jetpacks").style.display = "none";
    }

    if (eyeglasses.show === true) {
        document.getElementById("eyeglasses").style.display = "block";
    } else {
        document.getElementById("eyeglasses").style.display = "none";
    }
    if (language.show === true) {
        document.getElementById("language").style.display = "block";
    } else {
        document.getElementById("language").style.display = "none";
    }
    if (engineering.show === true) {
        document.getElementById("engineering").style.display = "block";
    } else {
        document.getElementById("engineering").style.display = "none";
    }
    if (boxing.show === true) {
        document.getElementById("boxing").style.display = "block";
    } else {
        document.getElementById("boxing").style.display = "none";
    }
    if (scanner.show === true) {
        document.getElementById("scanner").style.display = "block";
    } else {
        document.getElementById("scanner").style.display = "none";
    }
    if (overdrive.show === true) {
        document.getElementById("overdrive").style.display = "block";
    } else {
        document.getElementById("overdrive").style.display = "none";
    }
    //UPGRADES END
}

//SHOW END==========================================================================

//SAVE/LOAD START================================================================[SLD1]

function save() {
    var save = {
        parts: parts,
        knowledge: knowledge,
        enemy: enemy,
        scana: scana,
        able: able,
        trfix: trfix,
        updc: updc,
        uphc: uphc,
        updl: updl,
        uphl: uphl,
        speedupc: speedupc,
        //
        toyrobots: toyrobots,
        teacherbots: teacherbots,
        mechacockroach: mechacockroach,
        mechamantis: mechamantis,
        mechawolf: mechawolf,
        mechagorilla: mechagorilla,
        cyborgdolphin: cyborgdolphin,
        cyborgparrot: cyborgparrot,
        cyborgchimpanzee: cyborgchimpanzee,
        cyborghuman: cyborghuman,
        //
        fightertoyrobot: fightertoyrobot,
        //
        wrench: wrench,
        fix: fix,
        jetpacks: jetpacks,
        eyeglasses: eyeglasses,
        language: language,
        engineering: engineering,
        boxing: boxing,
        scanner: scanner,
        overdrive: overdrive
    };
    localStorage.setItem("save", JSON.stringify(save));
}

function load() {
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.parts !== "undefined") parts = savegame.parts;
    if (typeof savegame.knowledge !== "undefined") knowledge = savegame.knowledge;
    if (typeof savegame.enemy !== "undefined") enemy = savegame.enemy;
    if (typeof savegame.scana !== "undefined") scana = savegame.scana;
    if (typeof savegame.able !== "undefined") able = savegame.able;
    if (typeof savegame.trfix !== "undefined") trfix = savegame.trfix;
    if (typeof savegame.updc !== "undefined") updc = savegame.updc;
    if (typeof savegame.uphc !== "undefined") uphc = savegame.uphc;
    if (typeof savegame.updl !== "undefined") updl = savegame.updl;
    if (typeof savegame.uphl !== "undefined") uphl = savegame.uphl;
    if (typeof savegame.speedupc !== "undefined") speedupc = savegame.speedupc;
    //
    if (typeof savegame.toyrobots !== "undefined") toyrobots = savegame.toyrobots;
    if (typeof savegame.mechacockroach !== "undefined") mechacockroach = savegame.mechacockroach;
    if (typeof savegame.mechamantis !== "undefined") mechamantis = savegame.mechamantis;
    if (typeof savegame.mechawolf !== "undefined") mechawolf = savegame.mechawolf;
    if (typeof savegame.mechagorilla !== "undefined") mechagorilla = savegame.mechagorilla;
    //
    if (typeof savegame.teacherbots !== "undefined") teacherbots = savegame.teacherbots;
    if (typeof savegame.cyborgdolphin !== "undefined") cyborgdolphin = savegame.cyborgdolphin;
    if (typeof savegame.cyborgparrot !== "undefined") cyborgparrot = savegame.cyborgparrot;
    if (typeof savegame.cyborgchimpanzee !== "undefined") cyborgchimpanzee = savegame.cyborgchimpanzee;
    if (typeof savegame.cyborghuman !== "undefined") cyborghuman = savegame.cyborghuman;
    //
    if (typeof savegame.wrench !== "undefined") wrench = savegame.wrench;
    if (typeof savegame.fix !== "undefined") fix = savegame.fix;
    if (typeof savegame.jetpacks !== "undefined") jetpacks = savegame.jetpacks;
    if (typeof savegame.eyeglasses !== "undefined") eyeglasses = savegame.eyeglasses;
    //
    if (typeof savegame.language !== "undefined") language = savegame.language;
    if (typeof savegame.engineering !== "undefined") engineering = savegame.engineering;
    if (typeof savegame.boxing !== "undefined") boxing = savegame.boxing;
    if (typeof savegame.scanner !== "undefined") scanner = savegame.scanner;
    if (typeof savegame.overdrive !== "undefined") overdrive = savegame.overdrive;
    show();
    enemyCheck();
    updateText();
}

//SAVE/LOAD END================================================================

//INIT START================================================================[IT1]

function init() {
    document.getElementById("collectp").addEventListener("click", addParts);
    document.getElementById("collectk").addEventListener("click", addKnowledge);
    document.getElementById("speedup").addEventListener("click", speedup);
    //
    document.getElementById("r0").addEventListener("click", roll0);
    document.getElementById("r1").addEventListener("click", roll1);
    document.getElementById("r2").addEventListener("click", roll2);
    document.getElementById("r3").addEventListener("click", roll3);
    document.getElementById("r4").addEventListener("click", roll4);
    document.getElementById("r5").addEventListener("click", roll5);
    document.getElementById("r6").addEventListener("click", roll6);
    document.getElementById("r7").addEventListener("click", roll7);
    document.getElementById("attack").addEventListener("click", damagePhase);
    //
    document.getElementById("wrench").addEventListener("click", addwrench);
    document.getElementById("fix").addEventListener("click", addfix);
    document.getElementById("jetpacks").addEventListener("click", addjetpacks);
    document.getElementById("eyeglasses").addEventListener("click", addeyeglasses);
    document.getElementById("language").addEventListener("click", addlanguage);
    document.getElementById("boxing").addEventListener("click", addboxing);
    document.getElementById("engineering").addEventListener("click", addengineering);
    document.getElementById("scanner").addEventListener("click", addscanner);
    document.getElementById("overdrive").addEventListener("click", addoverdrive);
    //
    document.getElementById("tr").addEventListener("click", addToyrobot);
    document.getElementById("mc").addEventListener("click", addMechcockroach);
    document.getElementById("mm").addEventListener("click", addMechamantis);
    document.getElementById("mw").addEventListener("click", addMechawolf);
    document.getElementById("mg").addEventListener("click", addMechagorilla);
    //
    document.getElementById("tb").addEventListener("click", addTeacherbot);
    document.getElementById("cd").addEventListener("click", addCyborgdolphin);
    document.getElementById("cp").addEventListener("click", addCyborgparrot);
    document.getElementById("cc").addEventListener("click", addCyborgchimpanzee);
    document.getElementById("ch").addEventListener("click", addCyborghuman);
    //
    document.getElementById("save").addEventListener("click", save);
    document.getElementById("load").addEventListener("click", load);
    document.getElementById("fight").addEventListener("click", fightBattle);
    document.getElementById("scan").addEventListener("click", scanenemy);
    document.getElementById("upd").addEventListener("click", upDamage);
    document.getElementById("uph").addEventListener("click", upHealth);
    //
    timer = setInterval(total, 1000);
    timer2 = setInterval(save, 100000);
    //
    show();
    rollall();
    damageCalc();
    updateText();
}

//INIT END==================================================================

window.addEventListener("load", init);