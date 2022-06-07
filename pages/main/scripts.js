const hamburger = document.querySelector(".burger-menu");
var clicked = false;
const first = document.querySelector(".about_us_highLighted");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const forth = document.querySelector(".forth");

hamburger.addEventListener("click", () => {
  if (hamburger.style.display === "block") {
    if (clicked === false) {
      first.style.display = "block";
      second.style.display = "block";
      third.style.display = "block";
      forth.style.display = "block";
      clicked = true;
    } else {
      first.style.display = "none";
      second.style.display = "none";
      third.style.display = "none";
      forth.style.display = "none";
      clicked = false;
    }
  }
});

window.onresize = function () {
  location.reload();
};

document.getElementById("makeFriendsBTN").onclick = function () {
  location.href = "#pets";
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
    nav.style.visibility = "hidden";
    ham.style.visibility = "visible";
  } else {
    nav.style.visibility = "visible";
    ham.style.visibility = "hidden";
  }
}

document.getElementById("makeFriendsBTN").onclick = function () {
  location.href = "#pets";
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
}

// lets make a carousel

fetch("./petsCarusel.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

function appendData(data) {
  let petsArrowL = document.getElementById("pets-arrowL");
  let petsArrowR = document.getElementById("pets-arrowR");
  let petsBlock = document.getElementById("pets-block-id");

  let firstBlock = document.createElement("div");
  let middleBlock = document.createElement("div");
  let lastBlock = document.createElement("div");
  firstBlock.className = "firstBlock";
  middleBlock.className = "middleBlock";
  lastBlock.className = "lastBlock";

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function bothAreUnique(arr, arr2) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr[i] === arr2[j]) {
          return false;
        }
      }
    }
    return true;
  }

  let randyBank = [];
  let randyBank2 = [];

  function shuffle() {
    randyBank = [];
    randyBank2 = [];
    while (randyBank.length < 3) {
      let randy = randomInteger(0, 7);
      if (randyBank.includes(data[randy])) {
      } else {
        randyBank.push(data[randy]);
      }
    }
    while (randyBank2.length < 3) {
      let randy = randomInteger(0, 7);
      if (randyBank2.includes(data[randy])) {
      } else {
        randyBank2.push(data[randy]);
      }
    }
  }

  shuffle();

  function grandMatch() {
    while (!bothAreUnique(randyBank, randyBank2)) {
      console.log("shuffle");
      shuffle();
    }
  }

  grandMatch();

  function doBoys() {
    for (let i = 0; i < randyBank2.length; i++) {
      let petsCard = document.createElement("div");
      petsCard.className = "pets-card";
      let petImage = document.createElement("img");
      petImage.src = randyBank2[i].img;
      let petName = document.createElement("p");
      petName.className = "pets-name";
      petName.innerText = randyBank2[i].name;
      let petBtn = document.createElement("btn");
      petBtn.className = "btn_learn_more";
      petBtn.innerText = "Learn more";
      petsCard.appendChild(petImage);
      petsCard.appendChild(petName);
      petsCard.appendChild(petBtn);
      firstBlock.append(petsCard);
    }

    for (let i = 0; i < randyBank.length; i++) {
      let petsCard = document.createElement("div");
      petsCard.className = "pets-card";
      let petImage = document.createElement("img");
      petImage.src = randyBank[i].img;
      let petName = document.createElement("p");
      petName.className = "pets-name";
      petName.innerText = randyBank[i].name;
      let petBtn = document.createElement("btn");
      petBtn.className = "btn_learn_more";
      petBtn.innerText = "Learn more";
      petsCard.appendChild(petImage);
      petsCard.appendChild(petName);
      petsCard.appendChild(petBtn);
      middleBlock.appendChild(petsCard);
    }

    for (let i = 0; i < randyBank2.length; i++) {
      let petsCard = document.createElement("div");
      petsCard.className = "pets-card";
      let petImage = document.createElement("img");
      petImage.src = randyBank2[i].img;
      let petName = document.createElement("p");
      petName.className = "pets-name";
      petName.innerText = randyBank2[i].name;
      let petBtn = document.createElement("btn");
      petBtn.className = "btn_learn_more";
      petBtn.innerText = "Learn more";
      petsCard.appendChild(petImage);
      petsCard.appendChild(petName);
      petsCard.appendChild(petBtn);
      lastBlock.appendChild(petsCard);
    }

    petsBlock.prepend(firstBlock);
    petsBlock.appendChild(middleBlock);
    petsBlock.prepend(lastBlock);
  }

  function newF() {
    firstBlock.innerHTML = "";
    middleBlock.innerHTML = "";
    lastBlock.innerHTML = "";
  }

  doBoys();

  function onestep() {
    newF();
    shuffle();
    grandMatch();
    doBoys();
  }

  let offSet = 0;
  let countR = 0;
  let countL = 0;

  petsArrowR.addEventListener("click", () => {
    onestep();
    countR++;
    offSet += 965;
    petsBlock.style.cssText = `transform: translateX(${offSet}px); transition: 1s;`;
    petsArrowR.disabled = true;
    setTimeout(function () {
      offSet = 0;
      petsBlock.style.cssText = `transform: translateX(${offSet}px);`;
      middleBlock.style.order = 1;
      firstBlock.style.order = 2;
      lastBlock.innerHTML = middleBlock.innerHTML;
      petsArrowR.disabled = false;
    }, 1000);

    if (countR > 1) {
      setTimeout(function () {
        offSet = 0;
        petsBlock.style.cssText = `transform: translateX(${offSet}px);`;
        middleBlock.style.order = 2;
        firstBlock.style.order = 1;
        lastBlock.innerHTML = firstBlock.innerHTML;
        countR = 0;
        petsArrowR.disabled = false;
      }, 1000);
    }
  });

  petsArrowL.addEventListener("click", () => {
    onestep();
    countL++;
    offSet -= 965;
    petsBlock.style.cssText = `transform: translateX(${offSet}px); transition: 1s`;
    petsArrowL.disabled = true;
    setTimeout(function () {
      offSet = 0;
      petsBlock.style.cssText = `transform: translateX(${offSet}px);`;
      middleBlock.style.order = 1;
      firstBlock.style.order = 2;
      lastBlock.innerHTML = middleBlock.innerHTML;
      petsArrowL.disabled = false;
    }, 1000);

    if (countL > 1) {
      setTimeout(function () {
        offSet = 0;
        petsBlock.style.cssText = `transform: translateX(${offSet}px);`;
        // middleBlock.style.order = 2;
        // firstBlock.style.order = 1;
        lastBlock.innerHTML = firstBlock.innerHTML;
        countL = 0;
        petsArrowL.disabled = false;
      }, 1000);
    }
  });
}

// //Only One pet Slider
// function appendData(data) {
//   let container = document.createElement("div");
//   container.className = "container";
//   let arrL = document.createElement("button");
//   let arrR = document.createElement("button");
//   arrL.innerText = "left";
//   arrR.innerText = "right";

//   let container2 = document.createElement("div");

//   container.appendChild(arrL);

//   container2.className = "container2";

//   let image = document.createElement("img");
//   let counter = 0;
//   image.src = data[counter].img;
//   function nextF() {
//     counter++;
//     if (counter > data.length - 1) {
//       counter = 0;
//     }
//     image.src = data[counter].img;
//   }
//   function prevF() {
//     counter--;
//     if (counter < 0) {
//       counter = data.length - 1;
//     }
//     image.src = data[counter].img;
//   }
//   container2.appendChild(image);

//   arrL.addEventListener("click", prevF);
//   arrR.addEventListener("click", nextF);

//   container.appendChild(container2);
//   container.appendChild(arrR);
//   let petSlider = document.getElementById("pets-slider-id");
//   petSlider.append(container);
// }
