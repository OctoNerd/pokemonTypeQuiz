var typeQuiz = {
    types: [],
    addType: function(typeName, strongAtk, weakAtk, strongDef, weakDef, nodmgAtk, nodmgDef) {
        this.types.push({
            typeName: typeName,
            strongAtk: strongAtk,
            weakAtk: weakAtk,
            strongDef: strongDef,
            weakDef: weakDef,
            nodmgAtk: nodmgAtk,
            nodmgDef: nodmgDef
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

typeQuiz.addType("normal", [], ["rock", "steel"], [], ["fighting"], ["ghost"], ["ghost"]);
typeQuiz.addType("fire", ["grass", "ice", "bug", "steel"], ["fire", "water", "rock", "dragon"], ["fire", "grass", "ice", "bug", "steel", "fairy"], ["water", "ground", "rock"], [], []);
typeQuiz.addType("water", ["fire", "ground", "rock"], ["water", "grass", "dragon"], ["fire", "water", "ice", "steel"], ["electric", "grass"], [], []);

typeQuiz.findTypes("water", "fire");