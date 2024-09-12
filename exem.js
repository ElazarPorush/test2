//Mission 1
const Mission1 = (numbers) => {
    const evenNumbers = numbers.filter(number => number % 2 == 0)
    return evenNumbers
}

//Mission 2
const Mission2 = (stringOfWords) => {
    const listOfWords = stringOfWords.split(" ")
    let sumWords = 0;
    for (const word of listOfWords){
        if (word.length == 4){
            sumWords++;
        }
    }
    return sumWords
}

//Mission 4
const Mission4 = (numbers) => {
    let isSortedUp = true;
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
            isSortedUp = false;
            break;
        }
    }
    if (isSortedUp) {
        return 1;
    }
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] < numbers[i + 1]) {
            return 0;
        }
    }
    return 2;   
}

