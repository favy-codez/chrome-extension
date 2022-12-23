let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
// ** challenge **
// Create an unordered list element (<ul>) with id="ul-el"
// 2. Grab the unordered list and store it in a const variable called ulEl


// we spectify the event we want to listen to (click) and the fxn we want to evoke
inputBtn.addEventListener("click", function(){
// ** challenge **
    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript" - we use .value for this


    myLeads.push(inputEl.value)
    // ** challenge **
    // 2. Call the renderLeads() function
    renderLeads()
})
// Another method is to add this to the button in the html /onclick="saveLead()"/ and this in the js
//  function saveLead() {
//     console.log("Button clicked!")
//  }

// ** challenge **
// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
// 2. Add the item to the listItems variable instead of the ulEl.innerHTML
// 3. Render the listItems inside the unordered list using ulEl.innerHTML

// ** challenge **
// 1. Wrap the code below in a renderLeads() function
function renderLeads(){
    let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    // ** challenge **
    // Render the leads in the unordered list using ulEl.textContent
    // here is the solution if we are using text content
    // ---> ulEl.textContent += myLeads[i] + " "
    // but if we are using innerHTML we say 
    // we are adding += so it doesn't display only the last word but from 1st to last
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // another method for line 39 is
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
}
ulEl.innerHTML = listItems

}

