//Complete the function that accepts a date of birth (as a string) in the following format: "yyyy-mm-dd".
// The function shall return a one digit integer between 1 and 9 which represents the Life Path Number of the given date of birth.
// You do not need to check that the input is correct format, you can assume that it will always be a valid date (as a string) with given format.

// year  :  1 + 8 + 7 + 9 = 2  -->  2 + 5 = 7
// month :  0 + 3 = 3
// day   :  1 + 4 = 5
// result:  7 + 3 + 5 = 15  -->  1 + 5 = 6

function lifePathNumber(dateOfBirth) {
    let arr = [];
    let subArr = [];
    let resArr = [];

    dateOfBirth.split('-').forEach(element => {
        subArr.push(element.split(""))
    });

    console.log(subArr)


    // subArr.forEach(element => {
    //    let item = element.reduce((a, b) => {
    //        return a + b;
    //    });
    //
    //    resArr.push(item)
    // });
    //
    // console.log(resArr);

    return arr
}

let res = lifePathNumber("1879-03-14");
console.log(res);