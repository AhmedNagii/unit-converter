const feetRatio  = 3.28084;
const kilosRatio  = 2.20462;



let metersInput = document.getElementById("meter-input");
let feetsInput  =  document.getElementById("feet-input");
let feetResult  = document.getElementById("feet-result");
let metersResult=  document.getElementById("meters-result");

let litersInput = document.getElementById("Liters-input");
let gallonInput = document.getElementById("gallon-input");
let gallonsResult =document.getElementById("gallon-result");
let litersResult=  document.getElementById("Liters-result");


let kilosInput = document.getElementById("kilos-input");
let poundsInput = document.getElementById("pounds-input");
let poundsResult =document.getElementById("pounds-result");
let kilosResult=  document.getElementById("kilos-result");


function coverterMeters(userInput){
    feetsInput.textContent = userInput;

    metersInput.textContent = userInput;
    feetResult.textContent = feetRatio * userInput;
    metersResult.textContent = userInput / feetRatio;
}

 function converLiters(userInput){
    litersInput.textContent = userInput;
    gallonInput.textContent = userInput;
    gallonsResult.textContent = userInput *  0.264172;
    litersResult.textContent = 3.785412 * userInput; 

 }
 function convertPounds(userInput) {
     kilosInput.textContent = userInput;
     poundsInput.textContent = userInput;
    poundsResult.textContent = 0.453592 * userInput;
    kilosResult.textContent = userInput * 2.20462;
}

let userInput = document.getElementById("text-box").value;

function convert (){
    let userInput = document.getElementById("text-box").value;



 let showUserInput = document.getElementById("user-input");
     showUserInput.textContent =  userInput ;
     coverterMeters(userInput)
     converLiters(userInput)
     convertPounds(userInput)
}
