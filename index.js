let metertoFeetEl = document.getElementById("metertoFeet")
let feetToMetersEl = document.getElementById("feetToMeters")

let litersToGallonEl = document.getElementById("litersToGallons")
let gallonsToLiterEl = document.getElementById("gallonsToLiters")

let kilogramsToPoundEl = document.getElementById("kilogramsToPounds")
let poundToKilogramsEl = document.getElementById("poundToKilograms")

let input = document.getElementById("input");
const converterBtn =  document.getElementById("converter-btn")



input.addEventListener("input", function(){
    if(parseFloat(input.value) < 1) {
        input.value = 1
    }
})

input.addEventListener("input", function(){
    if (input.value.length > 3) {
        input.value = input.value.slice(0, 3);
    }
});



/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

3.281 feet = 1 meter  
0.264 gallon = 1 liter
2.204 pound = 1 kilogram
*/

converterBtn.addEventListener("click", function(){

    
let value = parseFloat(document.getElementById("input").value)

    // meter section
    function metertoFeet() {
        const feet = 3.281
        return value * feet
    }

    function feetToMeter() {
        const feet = 3.281
        return value / feet
    }

    // liters section
    function literToGallon() {
        const gallon = 0.264172
        return value * gallon
    }
    function gallonToLiters() {
        const gallon = 0.264172
        return value / gallon
    }

    //kilograms section
    function kilogramToPound() {
        const kilogram = 2.20462
        return value * kilogram
    }
    function poundToKilogram() {
        const kilogram = 2.20462
        return value / kilogram
    }


    
    let results = [ 

        {
            "meterFeet": metertoFeet(),
            "feetMeter": feetToMeter() 
        },
        {
            "gallonLiter": literToGallon(),
            "literGallon": gallonToLiters()
        },
        {
            "kilogramsPound": kilogramToPound(),
            "poundKilograms": poundToKilogram()
        }
    ]
    
    feetToMetersEl.innerHTML = `<p> ${value} Meters = ${results[0].feetMeter.toFixed(5)} Feet </p>`
    metertoFeetEl.innerHTML = `<p>${value} Feets = ${results[0].meterFeet.toFixed(3)} Meters </p>`

    litersToGallonEl.innerHTML = `<p>${value} Gallons = ${results[1].literGallon.toFixed(5)} Liters</p>`
    gallonsToLiterEl.innerHTML = `<p>${value} Liters = ${results[1].gallonLiter.toFixed(6)} Gallons</p>`

    kilogramsToPoundEl.innerHTML = `<p>${value} Kilograms = ${results[2].kilogramsPound.toFixed(3)} Pounds</p>`
    poundToKilogramsEl.innerHTML = `<p>${value} Pounds = ${results[2].poundKilograms.toFixed(6)} Kilograms</p>`

})

