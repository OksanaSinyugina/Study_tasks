const startBtn = document.querySelector('.game__btn');


function binarySearch (array) {
   
    let low = 0;
    let high = array.length -1 ;
    let tryNumber = 1; // номер попытки
    
    let guess = array[Math.ceil((low + high)/2)]; // предполагаем загаданное число

    while (low <= high) {
        if (guess > number) {
            high = array.indexOf(guess) - 1;
            console.log(`Попытка № ${tryNumber}: ${guess} > ${number}. Диапазон от ${low} до ${high}`);
            tryNumber +=1;
            guess = array[Math.ceil((low + high)/2)];
        }
        if (guess < number) {
            low = array.indexOf(guess) + 1;
            console.log(`Попытка № ${tryNumber}: ${guess} < ${number}. Диапазон от ${low} до ${high}`);
            tryNumber +=1;
            guess = array[Math.ceil((low + high)/2)];
        }
        if (guess = number) {
            console.log(`Попытка № ${tryNumber}: ${guess} = ${number}. Диапазон от ${low} до ${high}`);
            break;
        }
    }

    console.log(`C попытки № ${tryNumber}: угаданное число ${guess} = загаданное ${number} число`);
}

let arrayLength = 100;
let numbersArray = [];
while (arrayLength > 0) {
    numbersArray.unshift(arrayLength--)
}

startBtn.addEventListener('click', binarySearch (numbersArray));

//binarySearch (numbersArray, number);