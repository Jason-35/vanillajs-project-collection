const value = document.getElementById("value");
const decrease = document.getElementsByClassName("decrease")[0]
const increase = document.getElementsByClassName("increase")[0]
const reset = document.getElementsByClassName("reset")[0]


decrease.addEventListener("click", () => {
    let valueToInt = parseInt(value.innerText)
    value.innerText = `${valueToInt - 1}`

    if((valueToInt - 1) > 0){
        value.style.color = "green"
    }
    if((valueToInt - 1) < 0){
        value.style.color = "red"
    }
})

increase.addEventListener("click", () => {
    let valueToInt = parseInt(value.innerText)
    value.innerText = `${valueToInt + 1}`

    if((valueToInt + 1) > 0){
        value.style.color = "green"
    }
    if((valueToInt + 1) < 0){
        value.style.color = "red"
    }
})

reset.addEventListener("click", () => {
    value.innerText = '0'
    value.style.color = "black"
})