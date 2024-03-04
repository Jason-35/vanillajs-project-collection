function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const button = document.getElementsByClassName("button")[0]
const bg = document.getElementsByTagName("main")[0]
const value = document.getElementsByClassName("value")[0]

const hex = document.getElementsByClassName("hex")[0]
const rgb = document.getElementsByClassName("rgb")[0]
hex_on = false
rgb_on = true

hex.addEventListener("click", () => {
    hex_on = true
    rgb_on = false
    
    bg.style.backgroundColor = `#F1F5F8`
    value.innerHTML = `#F1F5F8`
})
    
rgb.addEventListener("click", () => {
    hex_on = false
    rgb_on = true
    bg.style.backgroundColor = `rgb(${255},${255},${255})`
    value.innerHTML = `${255},${255},${255}`
})

button.addEventListener("click", () => {
    if(rgb_on){
        const r = getRandomInt(256)
        const b = getRandomInt(256) 
        const g = getRandomInt(256)
        bg.style.backgroundColor = `rgb(${r},${b},${g})`
        value.innerHTML = `${r},${b},${g}`
    }else{
        const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
        let hex_string = ''
        for(let i = 0; i < 6; i++){
            const val = getRandomInt(16)
            hex_string += values[val]
        }
        bg.style.backgroundColor = `#${hex_string}`
        value.innerHTML = `#${hex_string}`
    }
})