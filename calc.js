let resultEl = document.getElementById("result-el")


resultStorage = []

// DOM AND FUNCTION FOR 7
let seven = document.getElementById("seven")
function clickedSeven(){
    console.log("you clicked seven")
    resultEl.value += seven.innerText
    resultStorage.push(seven.innerText)
    console.log(resultStorage)
}

// DOM AND FUNCTION FOR 8
let eight = document.getElementById("eight")
function clickedEight(){
    console.log("you clicked eight")
    resultEl.value += eight.innerText
    resultStorage.push(eight.innerText)
    console.log(resultStorage)
}

// DOM AND FUNCTION FOR DELETE LEFT BUTTON
function backspace(){
    console.log("you clicked backspace")
    resultStorage.pop(resultEl.value)
    resultEl.value = resultStorage.join("")
    console.log(resultStorage)
    }

// DOM AND FUNCTION FOR AC BUTTON
function reset(){
    for(i=resultStorage.length-1; i >=0; i--){
        resultStorage.pop(resultEl.value)
        resultEl.value = resultStorage
    }
}

// DOM AND FUNCTION FOR 9
let nine = document.getElementById("nine")
function clickedNine(){
    console.log("you clicked nine")
    resultEl.value += nine.innerText
    resultStorage.push(nine.innerText)
    console.log(resultStorage)
}

// DOM AND FUNCTION FOR 4
let four = document.getElementById("four")
function clickedFour(){
    console.log("you clicked four")
    resultEl.value += four.innerText
    resultStorage.push(four.innerText)
    console.log(resultStorage)
}

// DOM AND FUNCTION FOR 5
let five = document.getElementById("five")
function clickedFive(){
    console.log("you clicked five")
    resultEl.value += five.innerText
    resultStorage.push(five.innerText)
    console.log(resultStorage)
}

// DOM AND FUNCTION FOR 6
let six = document.getElementById("six")
function clickedSix(){
    console.log("you clicked six")
    resultEl.value += six.innerText
    resultStorage.push(six.innerText)
    console.log(resultStorage)
}

// DOM AND FUNCTION FOR 1
let one = document.getElementById("one")
function clickedOne(){
    console.log("you clicked one")
    resultEl.value += one.innerText
    resultStorage.push(one.innerText)
    console.log(resultStorage)
}

// DOM AND FUNCTION FOR 1
let two = document.getElementById("two")
function clickedTwo(){
    console.log("you clicked two")
    resultEl.value += two.innerText
    resultStorage.push(two.innerText)
    console.log(resultStorage)
}

// DOM AND FUNCTION FOR 3
let three = document.getElementById("three")
function clickedThree(){
    console.log("you have clicked three")
    resultEl.value += three.innerText
    resultStorage.push(three.innerText)
    console.log(resultStorage)
}

// DOM AND FUNCTION FOR 0
let zero = document.getElementById("zero")
function clickedZero(){
    console.log("you clicked zero")
    resultEl.value += zero.innerText
    resultStorage.push(zero.innerText)
    console.log(resultStorage)
}

// DOM AND FUNCTION FOR DOT "."" BUTTON
let point = document.getElementById("point")
function clickedPoint(){
    console.log("you clicked point")
    resultEl.value += point.innerText
    resultStorage.push(point.innerText)
    console.log(resultStorage)
}

// DOM AND FUNCTION FOR PERCENT "%" BUTTON
let percentage = document.getElementById("percent")
function clickedPercent(){
    console.log("you clicked percent")
    resultEl.value += percent.innerText
    resultStorage.push(percent.innerText)
    console.log(resultStorage)
}

// DOM AND FUNCTION FOR DIVISION BUTTON
let divide = document.getElementById("divide")
function clickedDivide(){
    console.log("you clicked divide")
    resultEl.value += divide.innerText
    resultStorage.push(divide.innerText)
    console.log(resultStorage)
}

// DOM AND FUNCTION FOR INDICES BUTTON
let indices = document.getElementById("indices")
function clickedIndices(){
    console.log("you clicked indices")
    resultEl.value += indices.innerText
    resultStorage.push(power.innerText)
    console.log(resultStorage)
}

// DOM AND FUNCTION FOR ADD BUTTON
let add = document.getElementById("add")
function clickedAdd(){
    console.log("you clicked add")
    resultEl.value += add.innerText
    resultStorage.push(add.innerText)
    console.log(resultStorage)
}

// DOM AND FUNCTION FOR SUBTRACT BUTTON
let subtract = document.getElementById("subtract")
function clickedSubtract(){
    console.log("you clicked subtract")
    resultEl.value += subtract.innerText
    resultStorage.push(subtract.innerText)
    console.log(resultStorage)
}

// DOM AND FUNCTION FOR MULTIPLY BUTTON
let multiply = document.getElementById("multiply")
let symbol = document.getElementById("symbol")
function clickedMultiply(){
    console.log("you clicked multiply")
    resultEl.value += symbol.innerText
    resultStorage.push(multiply.innerText)
    console.log(resultStorage)
}

// DOM AND FUNCTION FOR EQUALITY BUTTON
let equal = document.getElementById("equal")
function clickedEqual(){
    console.log("you clicked equal")
    let result = (resultStorage.join(""))
    console.log(result)
    display = eval(result)
    console.log(display)
    resultEl.value = display
    resultStorage = [display]
    console.log(resultStorage)  
}