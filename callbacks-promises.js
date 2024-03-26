const doubleNumberFunc = (arr, callFunc) => {
    return arr.map(callFunc)
}

const arr = [2,3,4]

const doubleNumber = (num) => num * 2

console.log(doubleNumberFunc(arr, doubleNumber));

// manipulate string start

const manipulateStringFunc = (string, callFunc) => {
    
    const stringToUpper = string.toUpperCase()
    
    return callFunc(stringToUpper)
}

const logString = (str) => {
    return `The manipulated String is: ${str}`
}

console.log(manipulateStringFunc('hello world!', logString));

// manipulate string end