let words = ["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"];

function dup(array){
    let newWordsArray = [];
    array.forEach(element => {
        let newWord = ''
        for(let i = 0; i < element.length; i++){
            if(element[i] !== element[i + 1]){
                newWord += element[i]
            }
        }
        newWordsArray.push(newWord);
    });
    return newWordsArray;
}

let res = dup(words);
console.log(res);