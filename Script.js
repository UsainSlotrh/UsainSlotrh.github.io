function updateParts(){document.getElementById("Parts").style.display="block";document.getElementById("Parts").innerHTML="Parts : "+Parts}function updateKnowledge(){document.getElementById("Knowledge").innerHTML="Knowledge : "+Knowledge}function updateStats(){document.getElementById("speed").innerHTML=TOYROspeed/1e3+" attack(s) per second";document.getElementById("damage").innerHTML=TOYROdamage+" Power";document.getElementById("health").innerHTML=TOYROhealthmax+" Max health"}function wrenchCheck(){if(wrench===0){if(Parts>=wrenchCost){document.getElementById("wrenchCost").style.display="block"}}}function toyroLOSE(){TOYROhealthcurrent=TOYROhealthmax;available=0;document.getElementById("PreBattlescreen").style.display="block";document.getElementById("Battlescreen").style.display="none";document.getElementById("attack").style.display="block";document.getElementById("saveload").style.display="block";document.getElementById("fixRobot2").style.display="block";document.getElementById("ENEMYHEALTH").innerHTML="";save();alert("TOYRO-BOT crumbles into many small pieces.")}function toyroWIN(){enemy++;TOYROhealthcurrent=TOYROhealthmax;document.getElementById("PreBattlescreen").style.display="block";document.getElementById("Battlescreen").style.display="none";document.getElementById("attack").style.display="block";document.getElementById("ENEMYHEALTH").innerHTML="";document.getElementById("saveload").style.display="block";document.getElementById("ENEMYHEALTH").innerHTML="";save()}function checkChecker(){switch(true){default:text="";break;case kungfu===1:document.getElementById("Kung-Fu").innerHTML="Kung-Fu";document.getElementById("Kung-Fu").style.display="block";document.getElementById("teachKungFu").style.display="none";break;case engineering===1:document.getElementById("Engineering").innerHTML="Engineering";document.getElementById("Engineering").style.display="block";document.getElementById("teachEngineering").style.display="none";break;case language===1:document.getElementById("Language").innerHTML="Language";document.getElementById("Language").style.display="block";document.getElementById("teachLanguage").style.display="none";break;case microchip===1:document.getElementById("Microchip").innerHTML="Microchip";document.getElementById("Microchip").style.display="block";document.getElementById("microchipCost").style.display="none";break;case toyroBOT===1:document.getElementById("microchipCost").style.display="block";document.getElementById("Knowledge").style.display="block";document.getElementById("teachLanguage").style.display="block";document.getElementById("teach").style.display="block";document.getElementById("teacherBot").style.display="block";break;case toyrobotAmount>=10:document.getElementById("fixRobot").style.display="block";break;case wrench===0:wrenchCheck();break}}function getPart(){Parts=Parts+1;updateParts()}function getKnowledge(){Knowledge=Knowledge+1;updateKnowledge()}function buyWrench(){Parts-=wrenchCost;updateParts();wrench=1;document.getElementById("Wrench").innerHTML="Wrench";document.getElementById("Wrench").style.display="block";document.getElementById("wrenchCost").style.display="none";document.getElementById("toyRobot").style.display="block"}function buyMicrochip(){if(Parts<microchipCost){alert("Not enough Parts")}else{Parts-=microchipCost;updateParts();microchip=1;autoGenerateKnowledge+=10;$(".productivity").css("display","inline");document.getElementById("prodParts").innerHTML=autoGenerate*autoGeneratePower+" Parts per second";document.getElementById("prodKnowledge").innerHTML=autoGenerateKnowledge*autoGenerateKnowledgePower+" Knowledge per second";document.getElementById("Microchip").innerHTML="Microchip";document.getElementById("Microchip").style.display="block";document.getElementById("microchipCost").style.display="none"}}function learnLanguage(){if(Knowledge<languageCost){alert("Not enough Knowledge")}else{Knowledge-=languageCost;updateKnowledge();language=1;document.getElementById("Language").innerHTML="Language";document.getElementById("Language").style.display="block";document.getElementById("teachLanguage").style.display="none";document.getElementById("teachEngineering").style.display="block"}}function learnEngineering(){if(Knowledge<engineeringCost){alert("Not enough Knowledge")}else{Knowledge-=engineeringCost;updateKnowledge();engineering=1;document.getElementById("Engineering").innerHTML="Engineering";document.getElementById("Engineering").style.display="block";document.getElementById("instJetpacks").style.display="block";document.getElementById("instEyeglasses").style.display="block";document.getElementById("teachKungFu").style.display="block";document.getElementById("teachEngineering").style.display="none"}}function learnKungFu(){if(Knowledge<kungfuCost){alert("Not enough Knowledge")}else{Knowledge-=kungfuCost;updateKnowledge();kungfu=1;document.getElementById("Kung-Fu").innerHTML="Kung-Fu";document.getElementById("Kung-Fu").style.display="block";document.getElementById("tabs").style.display="block";document.getElementById("teachKungFu").style.display="none"}}function buyToyRobot(){if(Parts<toyrobotCost){alert("Not enough Parts")}else{Parts-=toyrobotCost;toyrobotAmount++;toyrobotCost+=Math.round(toyrobotCost*(20/100));autoGenerate++;updateParts();document.getElementById("ToyRobots").innerHTML="Toy Robots : "+toyrobotAmount;document.getElementById("desctoy").innerHTML="Cost: "+toyrobotCost+" Parts";document.getElementById("ToyRobots").style.display="block";document.getElementById("prodParts").innerHTML=autoGenerate*autoGeneratePower+" Parts  per second"}}function buyMechaCockroach(){if(Parts<mechacockroachCost){alert("Not enough Parts")}else{Parts-=mechacockroachCost;mechacockroachAmount++;mechacockroachCost+=Math.round(mechacockroachCost*(20/100));autoGenerate+=5;updateParts();document.getElementById("MechaCockroach").innerHTML="Mecha Cockroach : "+mechacockroachAmount;document.getElementById("desccockroach").innerHTML="Cost: "+mechacockroachCost+" Parts";document.getElementById("MechaCockroach").style.display="block";document.getElementById("prodParts").innerHTML=autoGenerate*autoGeneratePower+" Parts per second"}}function buyTeacherBot(){if(Parts<teacherbotCost){alert("Not enough Parts")}else{Parts-=teacherbotCost;teacherbotAmount++;teacherbotCost+=Math.round(teacherbotCost*(20/100));autoGenerateKnowledge++;updateParts();updateKnowledge();document.getElementById("TeacherBots").innerHTML="Teacher Robots : "+teacherbotAmount;document.getElementById("descteacher").innerHTML="Cost: "+teacherbotCost+" Parts";document.getElementById("TeacherBots").style.display="block";document.getElementById("prodKnowledge").innerHTML=autoGenerateKnowledge*autoGenerateKnowledgePower+" Knowledge per second"}}function fixToyRobot(){if(Parts<fixtoy){alert("Not enough Parts")}else{Parts-=fixtoy;updateParts();toyroBOT=1;document.getElementById("fixRobot").style.display="none";document.getElementById("microchipCost").style.display="block";document.getElementById("Knowledge").style.display="block";document.getElementById("teachLanguage").style.display="block";document.getElementById("teach").style.display="block";document.getElementById("teacherBot").style.display="block"}}function fixToyRobot2(){Parts-=Parts/5;updateParts();available=1;document.getElementById("fixRobot2").style.display="none"}function installJetpacks(){if(Parts<jetpackCost){alert("Not enough Parts")}else{Parts-=jetpackCost;updateParts();jetpack=1;autoGeneratePower++;document.getElementById("prodParts").innerHTML=autoGenerate*autoGeneratePower+" Parts per second";document.getElementById("instJetpacks").style.display="none"}}function installEyeglasses(){if(Parts<eyeglassesCost){alert("Not enough Parts")}else{Parts-=eyeglassesCost;updateParts();eyeglasses=1;autoGenerateKnowledgePower++;document.getElementById("prodKnowledge").innerHTML=autoGenerateKnowledge*autoGenerateKnowledgePower+" Knowledge per second";document.getElementById("instEyeglasses").style.display="none"}}function startBattleTest(){if(available===1){document.getElementById("PreBattlescreen").style.display="none";document.getElementById("saveload").style.display="none";document.getElementById("Battlescreen").style.display="block";document.getElementById("TOYROHEALTH").innerHTML=TOYROhealthcurrent+"/"+TOYROhealthmax}else{alert("Fix TOYRO-BOT so you can fight!")}}function attackENEMY(){document.getElementById("attack").style.display="none";var e=setInterval(function(){ENEMYhealthcurrent-=TOYROdamage;document.getElementById("ENEMYHEALTH").innerHTML=ENEMYhealthcurrent+"/"+ENEMYhealthmax},TOYROspeed);switch(true){default:break;case enemy===1:document.getElementById("ENEMYNAME").innerHTML="Goldfish";ENEMYspeed=1e3;ENEMYdamage=2e3;ENEMYhealthmax=2e3;ENEMYhealthcurrent=2e3;var t=setInterval(function(){TOYROhealthcurrent-=ENEMYdamage;document.getElementById("TOYROHEALTH").innerHTML=TOYROhealthcurrent+"/"+TOYROhealthmax;if(TOYROhealthcurrent<=0){toyroLOSE();clearInterval(e);clearInterval(t)}if(ENEMYhealthcurrent<=0){alert("The goldfish is now your underwater slave!");toyroWIN();clearInterval(e);clearInterval(t)}},ENEMYspeed);break;case enemy===0:document.getElementById("ENEMYNAME").innerHTML="Cockroach King";ENEMYspeed=1e3;ENEMYdamage=100;ENEMYhealthmax=500;ENEMYhealthcurrent=500;var n=setInterval(function(){TOYROhealthcurrent-=ENEMYdamage;document.getElementById("TOYROHEALTH").innerHTML=TOYROhealthcurrent+"/"+TOYROhealthmax;if(TOYROhealthcurrent<=0){toyroLOSE();clearInterval(e);clearInterval(n)}if(ENEMYhealthcurrent<=0){alert("The cockroach king is now your minion!");toyroWIN();clearInterval(e);clearInterval(n);document.getElementById("mechaCockroach").style.display="block";document.getElementById("MechaCockroach").style.display="block"}},ENEMYspeed);break}}function generateParts(){Parts+=autoGenerate*autoGeneratePower;updateParts()}function generateKnowledge(){Knowledge+=autoGenerateKnowledge*autoGenerateKnowledgePower;updateKnowledge()}function mainGenerator(){generateParts();generateKnowledge()}function textCheck(){switch(true){default:text="";break;case engineering===1:text="TOYRO-BOT: 'Efficiency is great dood. I are soo much smarts dood.' **Definitely.**";break;case language===1:text=" TOYRO-BOT: 'I TOYRO-BOT dood. Hello world dood. More knowledge dood. Please dood.' "+"**Wow it spoke...dude**";break;case toyroBOT===1:text="**It's starting to make gestures, but you don't understand it."+" Maybe if you could teach it something...**";break;case toyrobotAmount>=10:text="**Something is wrong with one of your robots.**";break;case toyrobotAmount>=5:text="**You're getting good at making these!**";break;case toyrobotAmount>=1:text="**You made a cute toy robot to help you collect parts!**";break;case wrench===1:text="**You got your handy dandy Wrench!**";break}}function textBot(){textCheck();document.getElementById("textbot").innerHTML=text}function save(){localStorage.setItem("Parts",Parts);localStorage.setItem("Knowledge",Knowledge);localStorage.setItem("toyrobotAmount",toyrobotAmount);localStorage.setItem("mechacockroachAmount",mechacockroachAmount);localStorage.setItem("teacherbotAmount",teacherbotAmount);localStorage.setItem("available",available);localStorage.setItem("Wrench",wrench);localStorage.setItem("Microchip",microchip);localStorage.setItem("language",language);localStorage.setItem("engineering",engineering);localStorage.setItem("kungfu",kungfu);localStorage.setItem("Jetpack",jetpack);localStorage.setItem("Eyeglasses",eyeglasses);localStorage.setItem("toyroBOT",toyroBOT);localStorage.setItem("autoGenerate",autoGenerate);localStorage.setItem("autoGeneratePower",autoGeneratePower);localStorage.setItem("autoGenerateKnowledge",autoGenerateKnowledge);localStorage.setItem("autoGenerateKnowledgePower",autoGenerateKnowledgePower);localStorage.setItem("toyrobotCost",toyrobotCost);localStorage.setItem("mechacockroachCost",mechacockroachCost);localStorage.setItem("teacherbotCost",teacherbotCost);localStorage.setItem("TOYROspeed",TOYROspeed);localStorage.setItem("TOYROdamage",TOYROdamage);localStorage.setItem("TOYROhealthmax",TOYROhealthmax);localStorage.setItem("TOYROhealthcurrent",TOYROhealthcurrent);localStorage.setItem("enemy",enemy)}function load(){Parts=parseInt(localStorage.Parts);Knowledge=parseInt(localStorage.Knowledge);toyrobotAmount=parseInt(localStorage.toyrobotAmount);mechacockroachAmount=parseInt(localStorage.mechacockroachAmount);teacherbotAmount=parseInt(localStorage.teacherbotAmount);available=parseInt(localStorage.available);wrench=parseInt(localStorage.Wrench);microchip=parseInt(localStorage.Microchip);language=parseInt(localStorage.language);engineering=parseInt(localStorage.engineering);kungfu=parseInt(localStorage.kungfu);jetpack=parseInt(localStorage.Jetpack);eyeglasses=parseInt(localStorage.Eyeglasses);toyroBOT=parseInt(localStorage.toyroBOT);autoGenerate=parseInt(localStorage.autoGenerate);autoGeneratePower=parseInt(localStorage.autoGeneratePower);autoGenerateKnowledge=parseInt(localStorage.autoGenerateKnowledge);autoGenerateKnowledgePower=parseInt(localStorage.autoGenerateKnowledgePower);toyrobotCost=parseInt(localStorage.toyrobotCost);mechacockroachCost=parseInt(localStorage.mechacockroachCost);teacherbotCost=parseInt(localStorage.teacherbotCost);TOYROspeed=parseInt(localStorage.TOYROspeed);TOYROdamage=parseInt(localStorage.TOYROdamage);TOYROhealthmax=parseInt(localStorage.TOYROhealthmax);TOYROhealthcurrent=parseInt(localStorage.TOYROhealthcurrent);enemy=parseInt(localStorage.enemy);if(wrench===1){document.getElementById("Wrench").innerHTML="Wrench";document.getElementById("Wrench").style.display="block";document.getElementById("wrenchCost").style.display="none";document.getElementById("toyRobot").style.display="block";document.getElementById("desctoy").innerHTML="Cost: "+toyrobotCost+" Parts"}if(toyrobotAmount>=1){document.getElementById("ToyRobots").innerHTML="Toy Robots : "+toyrobotAmount;document.getElementById("ToyRobots").style.display="block"}if(toyroBOT===1){document.getElementById("microchipCost").style.display="block";document.getElementById("Knowledge").style.display="block";document.getElementById("teach").style.display="block";document.getElementById("teachLanguage").style.display="block";document.getElementById("TeacherBots").innerHTML="Teacher Robots : "+teacherbotAmount;document.getElementById("TeacherBots").style.display="block";document.getElementById("teacherBot").style.display="block";document.getElementById("descteacher").innerHTML="Cost: "+toyrobotCost+" Parts"}if(microchip===1){document.getElementById("Microchip").innerHTML="Microchip";document.getElementById("Microchip").style.display="block";document.getElementById("microchipCost").style.display="none";$(".productivity").css("display","inline");document.getElementById("prodParts").innerHTML=autoGenerate*autoGeneratePower+" Parts per second";document.getElementById("prodKnowledge").innerHTML=autoGenerateKnowledge*autoGenerateKnowledgePower+" Knowledge per second"}if(language===1){document.getElementById("Language").innerHTML="Language";document.getElementById("Language").style.display="block";document.getElementById("teachLanguage").style.display="none";document.getElementById("teachEngineering").style.display="block"}if(engineering===1){document.getElementById("Engineering").innerHTML="Engineering";document.getElementById("instJetpacks").style.display="block";document.getElementById("instEyeglasses").style.display="block";document.getElementById("Engineering").style.display="block";document.getElementById("teachEngineering").style.display="none"}if(kungfu===1){document.getElementById("Kung-Fu").innerHTML="Kung-Fu";document.getElementById("Kung-Fu").style.display="block";document.getElementById("teachKungFu").style.display="none"}if(jetpack===1){document.getElementById("instJetpacks").style.display="none"}if(eyeglasses===1){document.getElementById("instEyeglasses").style.display="none"}if(enemy>=1){document.getElementById("mechaCockroach").style.display="block";document.getElementById("MechaCockroach").style.display="block"}}function changeTab2(){document.getElementById("tab1").style.display="none";updateStats();document.getElementById("tab2").style.display="block"}function changeTab1(){document.getElementById("tab1").style.display="block";document.getElementById("tab2").style.display="none"}function update(){setInterval(textBot,100);setInterval(mainGenerator,1e3);setInterval(checkChecker,100)}var Parts=0;var Knowledge=0;var toyrobotAmount=0;var mechacockroachAmount=0;var teacherbotAmount=0;var autoGenerate=0;var autoGeneratePower=1;var autoGenerateKnowledge=0;var autoGenerateKnowledgePower=1;var text="";var wrench=0;var toyroBOT=0;var language=0;var microchip=0;var engineering=0;var jetpack=0;var eyeglasses=0;var available=1;var kungfu=0;var toyrobotCost=10;var mechacockroachCost=100;var teacherbotCost=10;var fixtoy=200;var jetpackCost=1e3;var eyeglassesCost=1e3;var wrenchCost=5;var microchipCost=300;var languageCost=20;var engineeringCost=500;var kungfuCost=1e3;var TOYROspeed=1e3;var TOYROdamage=200;var TOYROhealthmax=5e3;var TOYROhealthcurrent=5e3;var ENEMYspeed=0;var ENEMYdamage=0;var ENEMYhealthmax=0;var ENEMYhealthcurrent=0;var enemy=0;update()