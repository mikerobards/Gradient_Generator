// Task: Write a function to:
// - Generate a gradient using the colors from the pickers and split percentage from the slider. 
// - Use the gradient as the form background.

// Stretch goals:
// - Add more colors.
// - Add a 'Surprise Me' button which generates random gradients (and updates the inputs).
// - Check for contrast between the gradient and the text.

const color1 = document.getElementById('picker-1')
const color2 = document.getElementById('picker-2')
const split = document.getElementById('split')
const gradient = document.getElementById('gradient')
const execute = document.getElementById('execute')
const surprise = document.getElementById('surprise')


execute.addEventListener('click', generateGradient)
surprise.addEventListener('click', generateSurprise)


function generateGradient() {
    document.body.style.background = `linear-gradient(.25turn, ${color1.value}, ${split.value}%, ${color2.value})`
}


function generateSurprise() {
    const randomColor1 = Math.floor(Math.random() * 16777215).toString(16)
    const randomColor2 = Math.floor(Math.random() * 16777215).toString(16)
    const randomSplit = Math.floor(Math.random() * 100)
    document.body.style.background = `linear-gradient(.25turn, #${randomColor1}, ${randomSplit}%, #${randomColor2})`
}



