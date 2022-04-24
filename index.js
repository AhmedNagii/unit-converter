
let lenghtEl = document.getElementById("lenght-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");


function coverterMeters(userInput){
  
    lenghtEl.textContent = `${userInput} meters =
     ${(3.28084 * userInput).toFixed(2)} feet| ${userInput} 
     feet = ${(userInput / 3.28084).toFixed(2)} meters`
}

 function converLiters(userInput){
    volumeEl.textContent = `${userInput} liters =
    ${(userInput *  0.264172).toFixed(2)} Gallons| ${userInput} 
    Gallons = ${(3.785412 * userInput).toFixed(2)} liters`

 }
 function convertPounds(userInput) {
    massEl.textContent = `${userInput} kilos =
    ${(userInput * 2.20462).toFixed(2)} Pounds| ${userInput} 
    Pounds = ${(0.453592 * userInput).toFixed(2)} kilos`
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
