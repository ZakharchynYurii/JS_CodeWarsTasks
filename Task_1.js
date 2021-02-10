let leftSide = [{name: "w", power: 4}, {name: "p", power: 3}, {name: "b", power: 2}, {name: "s", power: 1}];
let rightSide = [{name: "m", power: 4}, {name: "q", power: 3}, {name: "d", power: 2}, {name: "z", power: 1}];

function alphabetWar(string){
    let leftSideScore = 0;
    let rightSideScore = 0;

    for(let i = 0; i < string.length; i++){
        for(let obj in leftSide){
            if(string[i] === leftSide[obj].name){
                leftSideScore += leftSide[obj].power;
            }
        }

        for(let obj in rightSide){
            if(string[i] === rightSide[obj].name){
                rightSideScore += rightSide[obj].power;
            }
        }
    }

    if(leftSideScore === rightSideScore){ return 'Let`s fight again!'}

    if(leftSideScore > rightSideScore){ return 'Left side wins!' }

    if(leftSideScore < rightSideScore){ return 'Right side wins!'}
}

let res = alphabetWar('wwwwzzzz');
console.log(res);