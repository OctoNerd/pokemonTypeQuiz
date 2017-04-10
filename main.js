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
            } else if(typeQuiz.types[i].typeName == defenderType){
                defenderTypeObj = typeQuiz.types[i];
            }
        }
        console.log(attackerTypeObj.typeName + " " + defenderTypeObj.typeName);
        this.checkAtk(attackerTypeObj, defenderTypeObj);
    },
    checkAtk: function(attackerType, defenderType) {
        for(i=0; i<attackerType.strongAtk.length; i++){
            if(attackerType.strongAtk[i] == defenderType.typeName){
                console.log(attackerType.typeName + " is super effective against " + defenderType.typeName);
            }
        }
        for(i=0; i<attackerType.weakAtk.length; i++) {
            if(attackerType.weakAtk[i] == defenderType.typeName){
                console.log(attackerType.typeName + " is not very effective against " + defenderType.typeName);
            }
        }
        for(i=0; i<attackerType.nodmgAtk.length; i++) {
            if(attackerType.nodmgAtk[i] == defenderType.typeName){
                console.log(attackerType.typeName + " has no effect against " + defenderType.typeName);
            }
        }
    }

}

//name, strongAtk, weakAtk, nodmgAtk
typeQuiz.addType("normal", [], ["rock", "steel"], [], ["ghost"]);
typeQuiz.addType("fire", ["grass", "ice", "bug", "steel"], ["fire", "water", "rock", "dragon"], []);
typeQuiz.addType("water", ["fire", "ground", "rock"], ["water", "grass", "dragon"], []);
typeQuiz.addType("electric", ["water", "flying"], ["electric", "grass", "dragon"], ["ground"]);
typeQuiz.addType("grass", ["water", "ground", "rock"], ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"], []);
typeQuiz.addType("ice", ["grass", "ground", "flying", "dragon"], ["fire", "water", "ice", "steel"], []);
typeQuiz.addType("fighting", ["normal", "ice", "rock", "dark", "steel"], ["poison", "flying", "psychic", "bug", "fairy"], ["ghost"]);
typeQuiz.addType("posion", ["grass", "fairy"], ["poison", "ground", "rock", "ghost"], ["steel"]);
typeQuiz.addType("ground", ["fire", "electric", "poison", "rock", "steel"], ["grass", "bug"], ["flying"]);
typeQuiz.addType("flying", ["grass", "fighting", "bug"], ["electric", "rock", "steel"], []);


typeQuiz.findTypes("water", "fire");
typeQuiz.findTypes("fire", "water");