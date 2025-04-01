let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue(){
    bill = document.querySelector("#bill").valueAsNumber
    calculate()
}

function receiveNumberOfPeopleValue(){
    numberOfPeople = document.querySelector("#people").valueAsNumber
    calculate()
}

function receiveTipPercentageValue(value){
    removeButtonSelectedClass()

    let customTipInput = document.querySelector("#custom-tip").valueAsNumber
    console.log(customTipInput)

    if(customTipInput.value !== ""){
        customTipInput.value = ""
    }

    tipPercentage = value / 100
    console.log(tipPercentage)
    calculate()
    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
    calculate()
}

function receiveCustomTipPercentageValue(){
    removeButtonSelectedClass()
    buttonSelected = null

    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100
    calculate()
}

    
