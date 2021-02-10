//Complete the function that accepts a date of birth (as a string) in the following format: "yyyy-mm-dd".
// The function shall return a one digit integer between 1 and 9 which represents the Life Path Number of the given date of birth.
// You do not need to check that the input is correct format, you can assume that it will always be a valid date (as a string) with given format.

// year  :  1 + 8 + 7 + 9 = 2  -->  2 + 5 = 7
// month :  0 + 3 = 3
// day   :  1 + 4 = 5
// result:  7 + 3 + 5 = 15  -->  1 + 5 = 6

function lifePathNumber(dateOfBirth) {
    let dataOfBirthdayArr = dateOfBirth.split('-');

    function sumator(array) {
        let finalArr = [];

        array.forEach(element => {
            let num = parseInt(element);

            if(num <= 9){
                finalArr.push(num);
            }else{
                let value = num.toString();
                let data = 0;

                for(let i = 0; i < value.length; i++){
                    data += parseInt(value[i])
                }

                if(data <= 9){
                    finalArr.push(data)
                }else{
                    let num1 = data.toString();
                    let num2 = 0;

                    for(let j = 0; j < num1.length; j++){
                        num2 += parseInt(num1[j])
                    }

                    if(num2 <= 9){
                        finalArr.push(num2)
                    }
                }
            }
        });

        return finalArr;
    }

    let res = sumator(dataOfBirthdayArr).reduce((a, b) => {return a + b});

    if(res <= 9){ return res }

    if(res === 10){ return 1 }

    if(res >= 11){
        let num = res.toString();
        let value = 0;
        for(let i = 0; i < num.length; i++){
            value += parseInt(num[i]);
        }

        if(value === 10){ return 1 }

        return value;
    }
}

let res = lifePathNumber("1961-07-04");
console.log(res);

