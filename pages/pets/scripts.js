document.getElementById("logo").onclick = function () {
  location.href = "./index.html";
};

document.getElementById("makeFriendsBTN").onclick = function () {
  location.href = "#pets";
};
document.getElementById("restKnowBTN").onclick = function () {
  location.href = "../pets/index.html";
};

function chbg(target, color) {
  document.getElementById(target).style.backgroundColor = color;
}
