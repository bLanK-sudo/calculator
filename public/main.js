const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const delButton = document.querySelector('[data-del]')
const resetButton = document.querySelector('[data-reset]')
const equalButton = document.querySelector('[data-equal]')
const prevOperand = document.querySelector('[data-prev-operand]')
const currentOperand = document.querySelector('[data-current-operand]')
const inputClasses = document.querySelectorAll('input[type=button]')
const rangeClass = document.querySelector('input[type="range"]')
const body = document.querySelector('body')
const viewField = document.querySelector('.viewField')
const keypad = document.querySelector('.keypad')
const keypadPad = document.querySelector('.keypad-pad')
let prevArr = []
let currArr = []
let oprArr = []
function clear() {
    prevArr = []
    currArr = []
    oprArr = []
    updateDisplay(prevArr, currArr, oprArr)
}
function appendNumber(number){
    if(number === '.' && currArr.includes('.')) return
    currArr.push(number)
    updateDisplay(prevArr, currArr.join(''), oprArr)
}
function chooseOperation (operation) {
    if(currArr.length !== 0 && !(currArr.length === 1 && currArr.includes('.'))){

        prevArr.push(currArr.join(''))
        currArr = []
        if(oprArr.length === 1){
            calculation(oprArr[0], Number(prevArr[0]), Number(prevArr[1]))
        }
        oprArr.push(operation)
        updateDisplay(prevArr.join(''), currArr, oprArr)
    }
        
}

function deleteNumber () {
    currArr.pop()
    updateDisplay(prevArr, currArr.join(''), oprArr)
}
function updateDisplay(p, c, operation){
    prevOperand.innerHTML = p + " " + operation
    currentOperand.innerHTML = c
}
function calculation(operation, a, b ){
    if(operation === "+"){
        let value = a + b
        prevArr=[]
        prevArr.push(value)
        oprArr = []
        updateDisplay(prevArr, currArr, oprArr)
    }else if(operation === "-"){
        let value = a - b
        prevArr=[]
        prevArr.push(value)
        oprArr = []
        updateDisplay(prevArr, currArr, oprArr)
    }else if(operation === "*"){
        let value = a * b
        prevArr=[]
        prevArr.push(value)
        oprArr = []
        updateDisplay(prevArr, currArr, oprArr)
    }else if(operation === "/"){
        let value = a / b
        prevArr=[]
        prevArr.push(value)
        oprArr = []
        updateDisplay(prevArr, currArr, oprArr)
    }
}

numberButtons.forEach(button => {
    button.addEventListener('click', (e => {
        appendNumber(button.value)
    }))
})
delButton.addEventListener('click', () => {
    deleteNumber()
})
operationButtons.forEach( button => {
        button.addEventListener('click', (e) => {
            chooseOperation(button.value)
        })
    })
resetButton.addEventListener('click', () => {
    clear()
})
equalButton.addEventListener('click', () => {
    let a = prevArr.join('')
    let b = currArr.join('')
    calculation(oprArr[0], Number(a), Number(b))
    currArr = prevArr
    prevArr= []
    oprArr = []
    updateDisplay(prevArr, currArr, oprArr)
})
function addCss1() {
    inputClasses.forEach(button => {
        button.classList.add('btn')
    })
    body.classList.add('bdy1')
    viewField.classList.add('keypad-bg1')
    keypad.classList.add('keypad1')
    keypadPad.classList.add('keypad-pad-bg1')
    equalButton.classList.add('btn-equal')
    delButton.classList.add('btn-del')
    resetButton.classList.add('btn-reset')
}
function removeCss1() {
    inputClasses.forEach(button => {
        button.classList.remove('btn')
    })
    body.classList.remove('bdy1')
    viewField.classList.remove('keypad-bg1')
    keypad.classList.remove('keypad1')
    keypadPad.classList.remove('keypad-pad-bg1')
    equalButton.classList.remove('btn-equal')
    delButton.classList.remove('btn-del')
    resetButton.classList.remove('btn-reset')
}
function addCss2() {
    inputClasses.forEach(button => {
        button.classList.add('btn1')
    })
    body.classList.add('bdy2')
    viewField.classList.add('keypad-bg2')
    keypad.classList.add('keypad2')
    keypadPad.classList.add('keypad-pad-bg2')
    equalButton.classList.add('btn-equal1')
    delButton.classList.add('btn-del1')
    resetButton.classList.add('btn-reset1')
}
function removeCss2() {
    inputClasses.forEach(button => {
        button.classList.remove('btn1')
    })
    body.classList.remove('bdy2')
    viewField.classList.remove('keypad-bg2')
    keypad.classList.remove('keypad2')
    keypadPad.classList.remove('keypad-pad-bg2')
    equalButton.classList.remove('btn-equal1')
    delButton.classList.remove('btn-del1')
    resetButton.classList.remove('btn-reset1')
}
function addCss3() {
    inputClasses.forEach(button => {
        button.classList.add('btn2')
    })
    body.classList.add('bdy3')
    viewField.classList.add('keypad-bg3')
    keypad.classList.add('keypad3')
    keypadPad.classList.add('keypad-pad-bg3')
    equalButton.classList.add('btn-equal2')
    delButton.classList.add('btn-del2')
    resetButton.classList.add('btn-reset2')
}
function removeCss3() {
    inputClasses.forEach(button => {
        button.classList.remove('btn2')
    })
    body.classList.remove('bdy3')
    viewField.classList.remove('keypad-bg3')
    keypad.classList.remove('keypad3')
    keypadPad.classList.remove('keypad-pad-bg3')
    equalButton.classList.remove('btn-equal2')
    delButton.classList.remove('btn-del2')
    resetButton.classList.remove('btn-reset2')
}
function theme(){
    addCss1()
    rangeClass.addEventListener('change', () => {
        if(rangeClass.value == 0){
            addCss1()
            removeCss2()
            removeCss3()
        }else if(rangeClass.value == 1){
            addCss2()
            removeCss1()
            removeCss3()
        }else if(rangeClass.value == 2){
            addCss3()
            removeCss1()
            removeCss2()
        }
    }
    )
    
    rangeClass.addEventListener('click', () => {
        
    })
}
theme()