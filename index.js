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

execute.addEventListener('click', generateGradient)

function generateGradient() {
    console.log(color1.value)
    console.log(split)
    // document.body.style.background = `linear-gradient(${color1.value}, ${split.value}, ${color2.value})`;
    document.body.style.background = `linear-gradient(.25turn, ${color1.value}, ${split.value}%, ${color2.value})`
}



