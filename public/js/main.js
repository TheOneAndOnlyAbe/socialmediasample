// Get all of the checkboxes
const chestCheck = document.getElementById("chestCheck"),
      backCheck  = document.getElementById("backCheck"),
      absCheck   = document.getElementById("absCheck"),
      legsCheck  = document.getElementById("legsCheck");

// Gets all of the buttons corresponding to the checkboxes
const chest = document.getElementById("chest"),
      back  = document.getElementById("back"),
      abs   = document.getElementById("abs"),
      legs  = document.getElementById("legs");

// Puts the checkboxes and buttons in corresponding order in different arrays
const bodyParts       = [chestCheck, backCheck, absCheck, legsCheck],
      bodyPartButtons = [chest, back, abs, legs];

// This is the function that is called when the buttons are pressed.
function choosePart(i){
  // myB is for the button and myC is for the corresponding checkbox
  let myB = bodyPartButtons[i],
      myC = bodyParts[i];

  // Toggles whether the button has this class.
  myB.classList.toggle("activeBodyButtons");

  // If the button has this class, then that must mean that the user has
  // chosen this body part, so it checks the corresponding box.
  if(myB.classList.contains("activeBodyButtons")){
    myC.checked = true;
  } else {
    myC.checked = false;
  }
}
