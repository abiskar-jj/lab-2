// COMP1073 - Lab 2: RGB Background Color Changer

// described the variables
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const body = document.body;

//defined functin for bg colour
function updateBackgroundColor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    body.style.backgroundColor = rgbColor;
}

// event listeners
redSlider.addEventListener('input', updateBackgroundColor);
greenSlider.addEventListener('input', updateBackgroundColor);
blueSlider.addEventListener('input', updateBackgroundColor);

updateBackgroundColor();




