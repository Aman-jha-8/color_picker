const redSlider = document.getElementById("redSlider")
const greenSlider = document.getElementById("greenSlider")
const blueSlider = document.getElementById("blueSlider")

const redValueSpan = document.getElementById("redValue")
const greenValueSpan = document.getElementById("greenValue")
const blueValueSpan = document.getElementById("blueValue")

const colorBox = document.getElementById("colorBox")
const copyButton = document.getElementById("copyButton")
const inputType = document.getElementById("inputType")

redSlider.addEventListener("input",updateColor)
greenSlider.addEventListener("input",updateColor)
blueSlider.addEventListener("input",updateColor)

copyButton.addEventListener("click",copyRGB)


function updateColor(){
    const redValue=redSlider.value
    const greenValue=greenSlider.value
    const blueValue=blueSlider.value


    const rgbvalue=`rgb(${redValue},${greenValue},${blueValue})`

    colorBox.style.backgroundColor=rgbvalue

    redValueSpan.innerText = redValue
    greenValueSpan.textContent = greenValue
    blueValueSpan.innerText = blueValue

    inputType.textContent=rgbvalue
    inputType.style.backgroundColor=rgbvalue
    const compColor = getComplementaryColor(rgbvalue)
    inputType.style.color=compColor

}

updateColor();

function getComplementaryColor(rgbColor) {
    // Remove "rgb(" and ")" and split into individual components
    const components = rgbColor.slice(4, -1).split(",");

    // Parse RGB components to integers
    const r = parseInt(components[0]);
    const g = parseInt(components[1]);
    const b = parseInt(components[2]);

    // Calculate the complementary color by inverting each component
    const complementaryR = 255 - r;
    const complementaryG = 255 - g;
    const complementaryB = 255 - b;

    if(r<=15 || b<=15 || g<=15){
        return `rgb(255,255,255)`
    }

    if(r>=235 || b>=235 || g>=235){
        return `rgb(0,0,0)`
    }

    if((r>115 && r<134) && (b>115 && b<134) && (g>115 && g<134)){
        return `rgb(0,0,0)`
    }

    // Return the complementary color in "rgb(r, g, b)" format
    return `rgb(${complementaryR},${complementaryG},${complementaryB})`;
  }

function copyRGB(){
    const redValue=redSlider.value
    const greenValue=greenSlider.value
    const blueValue=blueSlider.value

    const rgbvalue=`rgb(${redValue},${greenValue},${blueValue})`
    navigator.clipboard.writeText(rgbvalue)
    .then(()=>{
        alert("RGB color value copied to clipboard"+ rgbvalue)
        console.log("done")
    })
    .catch((error)=>{
        console.error("Failed to copy",error)
    })
}
