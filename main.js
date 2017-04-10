var typeQuiz = {
    types: [],
    addType: function(typeName, strongAtk, weakAtk, nodmgAtk) {
        this.types.push({
            typeName: typeName,
            strongAtk: strongAtk,
            weakAtk: weakAtk,
            nodmgAtk: nodmgAtk,
        });
    },
    findTypes: function(attackerType, defenderType) {
        var attackerTypeObj, defenderTypeObj;
        for(i=0; i<typeQuiz.types.length; i++) {
            if(typeQuiz.types[i].typeName == attackerType){
                attackerTypeObj = typeQuiz.types[i];
            }
            if (typeQuiz.types[i].typeName == defenderType){
                defenderTypeObj = typeQuiz.types[i];
            }
        }
        console.log("Attacker: " + attackerTypeObj.typeName + " | " + "Defender: " + defenderTypeObj.typeName);
        this.checkAtk(attackerTypeObj, defenderTypeObj);
    },
    checkAtk: function(attackerType, defenderType, questionNumber) {
        gotOneRight = false;
        for(i=0; i<attackerType.strongAtk.length; i++){
            if((attackerType.strongAtk[i] == defenderType.typeName)&&(questionNumber == 0)){
                console.log("Correct! " + attackerType.typeName + " is super effective against " + defenderType.typeName);
                gotOneRight = true;
            }
        }
        for(i=0; i<attackerType.weakAtk.length; i++) {
            if((attackerType.weakAtk[i] == defenderType.typeName)&&(questionNumber == 1)){
                console.log("Correct! " + attackerType.typeName + " is not very effective against " + defenderType.typeName);
                gotOneRight = true;
            }
        }
        for(i=0; i<attackerType.nodmgAtk.length; i++) {
            if((attackerType.nodmgAtk[i] == defenderType.typeName)&&(questionNumber == 2)){
                console.log("Correct! " + attackerType.typeName + " has no effect against " + defenderType.typeName);
                gotOneRight = true;
            }
        }
        if(gotOneRight == false) {
            console.log("I'm sorry, that is incorrect");
        }
    },
    getQuestion: function() {
        var randomType = Math.floor(Math.random() * (18));
        var randomTypeObj = this.types[randomType];
        var questionNumber = Math.floor(Math.random() * (3));
        var validType = false;
        
        switch(questionNumber) {
            case 0: 
                var guess = prompt("What is " + randomTypeObj.typeName + " super effective against?");
                break;
            case 1:
                var guess = prompt("What is " + randomTypeObj.typeName + " not very effective against?");
                break;
            default:
                var guess = prompt("What is " + randomTypeObj.typeName + " not effective at all against?");
                break;
        }

        for(j=0; j<this.types.length; j++){
            if(this.types[j].typeName == guess) {
                var guessObj = this.types[j];
                this.checkAtk(randomTypeObj, guessObj, questionNumber);
                validType = true;
            }
        }
        if(validType == false) {
            console.log("That is not a valid type");
        }
        
    }

}

//name, strongAtk, weakAtk, nodmgAtk
typeQuiz.addType("normal", ["nothing"], ["rock", "steel"], ["nothing"], ["ghost"]);
typeQuiz.addType("fire", ["grass", "ice", "bug", "steel"], ["fire", "water", "rock", "dragon"], ["nothing"]);
typeQuiz.addType("water", ["fire", "ground", "rock"], ["water", "grass", "dragon"], ["nothing"]);
typeQuiz.addType("electric", ["water", "flying"], ["electric", "grass", "dragon"], ["ground"]);
typeQuiz.addType("grass", ["water", "ground", "rock"], ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"], ["nothing"]);
typeQuiz.addType("ice", ["grass", "ground", "flying", "dragon"], ["fire", "water", "ice", "steel"], ["nothing"]);
typeQuiz.addType("fighting", ["normal", "ice", "rock", "dark", "steel"], ["poison", "flying", "psychic", "bug", "fairy"], ["ghost"]);
typeQuiz.addType("posion", ["grass", "fairy"], ["poison", "ground", "rock", "ghost"], ["steel"]);
typeQuiz.addType("ground", ["fire", "electric", "poison", "rock", "steel"], ["grass", "bug"], ["flying"]);
typeQuiz.addType("flying", ["grass", "fighting", "bug"], ["electric", "rock", "steel"], ["nothing"]);
typeQuiz.addType("psychic", ["fighting", "poison"], ["psychic", "steel"], ["dark"]);
typeQuiz.addType("bug", ["grass", "psychic", "dark"], ["fire", "fighting", "poison", "flying", "ghost", "steel", "fairy"], ["nothing"]);
typeQuiz.addType("rock", ["fire", "ice", "flying", "bug"], ["fighting", "ground", "steel"], ["nothing"]);
typeQuiz.addType("ghost", ["psychic", "ghost"], ["dark"], ["normal"]);
typeQuiz.addType("dragon", ["dragon"], ["steel"], ["fairy"]);
typeQuiz.addType("dark", ["psychic", "ghost"], ["fighting", "dark", "fairy"], ["nothing"]);
typeQuiz.addType("steel", ["ice", "rock", "fairy"], ["fire", "water", "electric", "steel"], ["nothing"]);
typeQuiz.addType("fairy", ["fighting", "dragon", "dark"], ["fire", "poison", "steel"], ["nothing"]);
//to compare against 'empty' arrays
typeQuiz.addType("nothing", ["nothing"], ["nothing"], ["nothing"]);


//typeQuiz.getQuestion();