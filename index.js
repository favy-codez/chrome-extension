let inputBtn = document.getElementById("input-btn")

// we spectify the event we want to listen to (click) and the fxn we want to evoke
inputBtn.addEventListener("click", function(){
    console.log("Button clicked from addEventListener")
})
// another method is to add this to the button in the html /onclick="saveLead()"/ and this in the js
// function saveLead() {
//     console.log("Button clicked!")
// }