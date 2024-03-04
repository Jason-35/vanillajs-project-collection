const name_tag = document.getElementsByClassName("name")[0]
const job = document.getElementsByClassName("job")[0]
const desc = document.getElementsByClassName("desc")[0]
const nav_left = document.getElementsByClassName("nav")[0]
const nav_right = document.getElementsByClassName("nav")[1]
const surprise = document.getElementsByClassName("surprise")[0]
const img = document.getElementsByTagName("img")[0]
let index = 0

const profile = [
    {
        name: "Bob Smith",
        job: "Software Engineer",
        desc: "I often see the time 11:11 or 12:34 on clocks. Each person who knows you has a different perception of who you are. In the end, he realized he could see sound and hear words.",
        img: "./head-shots/pexels-andrea-piacquadio-3777946.jpg"
    },
    {
        name: "Mary Jane",
        job: "UI/UX Designer",
        desc: "The toy brought back fond memories of being lost in the rain forest. The Guinea fowl flies through the air with all the grace of a turtle.",
        img: "./head-shots/pexels-andrea-piacquadio-3786525.jpg"
    },
    {
        name: "Henry Jones",
        job: "Game Developer",
        desc: "Trash covered the landscape like sprinkles do a birthday cake. The reservoir water level continued to lower while we enjoyed our long shower.",
        img: "./head-shots/pexels-thyrone-paas-1722198.jpg"
    }
]

nav_right.addEventListener("click", () => {
    index += 1
    if(index > 2){
        index = 0
    }
    console.log(index)
    const prof = profile[index]
    name_tag.textContent = `${prof.name}`
    job.textContent = `${prof.job}`
    desc.textContent = `${prof.desc}`
    img.src = prof.img
})

nav_left.addEventListener("click", () => {
    index -= 1
    if(index < 0){
        index = 2
    }
    const prof = profile[index]
    name_tag.textContent = `${prof.name}`
    job.textContent = `${prof.job}`
    desc.textContent = `${prof.desc}`
    img.src = prof.img
})

surprise.addEventListener("click", () => {
    let num = getRandomInt(3)
    while(num === index){
        num = getRandomInt(3)
    }
    index = num
    const prof = profile[index]
    name_tag.textContent = `${prof.name}`
    job.textContent = `${prof.job}`
    desc.textContent = `${prof.desc}`
    img.src = prof.img
})


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}