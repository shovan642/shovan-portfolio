

// problem solution ---1


function mindGame(number) {
    if (typeof number != "number") {
        console.log('please input valid number')
    }
    else {
        const multification = number * 3;
        const sum = multification + 10;
        const divided = sum / 2;
        const deduction = divided - 5;
        return deduction;
    }
}
const myNumber = 58;
const finalResult = mindGame(myNumber);
console.log(finalResult);



// problem solution ---2

function evenOdd(stingInput) {
    if (typeof stingInput != "string") {
        console.log('please input only string type variable')
    }

    else {
        if (stingInput.length % 2 === 0) {
            return 'even'
        }
        else {
            return 'odd'
        }
    }
}

const mySting = 'Full stack';
const finalResultp2 = evenOdd(mySting);
console.log(finalResultp2);


// problem solution ---3

function isLGSeven(lgNumber) {
    if (typeof lgNumber != "number") {
        console.log('please input valid number')
    }
    else {
        const lgNumberDeduction = lgNumber - 7;
        if (lgNumberDeduction < 7) {
            return lgNumberDeduction;
        }
        else {
            lgNumberDouble = lgNumberDeduction * 2
            return lgNumberDouble;
        }
    }
}

const myLgNumber = 30;
const finalResultp3 = isLGSeven(myLgNumber);
console.log(finalResultp3);

// problem solution ---4

function findingBadData (array){
    const badDataArray= [];
    for(let i=0; i < array.length; i++){
        const element = array[i];
    if(badDataArray.includes(element<0)){
        badDataArray.push(element);
    }


}
return badDataArray;
}

const myArray = [15, 36, -47, 45, 65, -87, 14, -56, 0, 47,]
const finalResultp4 = findingBadData(myArray);
console.log(finalResultp4);