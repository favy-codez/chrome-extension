let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

// we spectify the event we want to listen to (click) and the fxn we want to evoke
inputBtn.addEventListener("click", function(){
// ** challenge **
    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript" - we use .value for this


    myLeads.push(inputEl.value)
    console.log(myLeads);
})
// Another method is to add this to the button in the html /onclick="saveLead()"/ and this in the js
//  function saveLead() {
//     console.log("Button clicked!")
//  }

// ** challenge **
// Create an unordered list element (<ul>) with id="ul-el"
// 2. Grab the unordered list and store it in a const variable called ulEl


