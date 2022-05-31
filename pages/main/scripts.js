document.getElementById("makeFriendsBTN").onclick = function () {
  location.href = "#pets";
};
document.getElementById("restKnowBTN").onclick = function () {
  location.href = "../pets/index.html";
};
document.getElementById("logo").onclick = function () {
  location.href = "index.html";
};

function chbg(target, color) {
  document.getElementById(target).style.backgroundColor = color;
}

function burgerFunction() {
  let nav = document.getElementById("navy");

  let ham = document.getElementById("hamburger");
  if (window.innerWidth < 769) {
    // alert(window.innerWidth);
    nav.style.visibility = "hidden";
    ham.style.visibility = "visible";
  } else {
    nav.style.visibility = "visible";
    ham.style.visibility = "hidden";
  }
}

function addTwoBtn() {
  // if (window.innerWidth < 321) {
  let petSlider = document.getElementById("pets-slider-id");
  let twoBtnDiv = document.createElement("div");

  let leftA = document.createElement("img");
  let leftB = document.createElement("img");

  leftA.src = "../../assets/images/affect-arrow-left.png";
  leftB.src = "../../assets/images/affect-button_arrow.png";
  twoBtnDiv.append(leftA);
  twoBtnDiv.append(leftB);
  petSlider.append(twoBtnDiv);
  alert("added");
  // }
}
