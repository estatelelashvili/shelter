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
