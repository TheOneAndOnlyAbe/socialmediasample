const chestCheck = document.getElementById("chestCheck"),
      backCheck  = document.getElementById("backCheck"),
      absCheck   = document.getElementById("absCheck"),
      legsCheck  = document.getElementById("legsCheck");

const chest = document.getElementById("chest"),
      back  = document.getElementById("back"),
      abs   = document.getElementById("abs"),
      legs  = document.getElementById("legs");

const bodyParts       = [chestCheck, backCheck, absCheck, legsCheck],
      bodyPartButtons = [chest, back, abs, legs];

function myFunction(i){
  let myB = bodyPartButtons[i],
      myC = bodyParts[i];

  myB.classList.toggle("activeBodyButtons");

  if(myB.classList.contains("activeBodyButtons")){
    myC.checked = true;
  } else {
    myC.checked = false;
  }
}
