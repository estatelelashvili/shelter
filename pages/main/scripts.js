function myFunction(xs) {
  if (xs.matches) {
    // If media query matches
    // document.body.style.backgroundColor = "yellow";
    return true;
  } else {
    // document.body.style.backgroundColor = "pink";
    return false;
  }
}
let xs = window.matchMedia("(max-width: 769px)");

let bigMaC = document.getElementById("hamburger");
let burgerSLider = document.getElementById("burger-slider-id");

bigMaC.onclick = () => {
  if (myFunction(xs)) {
    bigMaC.classList.toggle("burger-style");

    if (burgerSLider.style.visibility === "visible") {
      burgerSLider.style.cssText = `right: -320px; transition: 1s`;
      burgerSLider.style.visibility = "hidden";
    } else {
      burgerSLider.style.cssText = `right: 0px; transition: 1s;`;
      burgerSLider.style.visibility = "visible";
    }
  }
};

window.onresize = function () {
  location.reload();
  // myFunction(x);
};

var x = window.matchMedia("(max-width: 700px)");

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

document.getElementById("restKnowBtn").onclick = function () {
  location.href = "../../pages/pets/index.html";
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
  let popUpBig = document.getElementById("pets-card-child-id");
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

  // function shuffle() {
  //   randyBank = [];
  //   randyBank2 = [];
  //   while (randyBank.length < 3) {
  //     let randy = randomInteger(0, 7);
  //     if (randyBank.includes(data[randy])) {
  //     } else {
  //       randyBank.push(data[randy]);
  //     }
  //   }
  //   while (randyBank2.length < 3) {
  //     let randy = randomInteger(0, 7);
  //     if (randyBank2.includes(data[randy])) {
  //     } else {
  //       randyBank2.push(data[randy]);
  //     }
  //   }
  // }
  // shuffle();
  function shuffle1() {
    randyBank = [];

    while (randyBank.length < 3) {
      let randy = randomInteger(0, 7);
      if (randyBank.includes(data[randy])) {
      } else {
        randyBank.push(data[randy]);
      }
    }
  }

  function shuffle2() {
    randyBank2 = [];

    while (randyBank2.length < 3) {
      let randy = randomInteger(0, 7);
      if (randyBank2.includes(data[randy])) {
      } else {
        randyBank2.push(data[randy]);
      }
    }
  }

  shuffle1();
  shuffle2();

  function grandMatch() {
    while (!bothAreUnique(randyBank, randyBank2)) {
      console.log("shuffle");
      shuffle1();
      shuffle2();
    }
  }

  function grandMatch1() {
    while (!bothAreUnique(randyBank, randyBank2)) {
      console.log("shuffle");
      shuffle1();
    }
  }

  function grandMatch2() {
    while (!bothAreUnique(randyBank, randyBank2)) {
      console.log("shuffle");
      shuffle2();
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

      petBtn.addEventListener("click", () => {
        popUpBig.style.visibility = "visible";
        popUpBig.style.zIndex = 101;
        let popUp = document.getElementById("pets-pop-up-id");
        let popUpInfo = document.createElement("div");
        let popUpDetails = document.createElement("div");

        popUpInfo.className = "pop-up-info";
        popUpDetails.className = "pop-up-details";

        let pic = document.createElement("img");
        pic.src = randyBank2[i].img;
        let nickName = document.createElement("h3");
        nickName.innerText = randyBank2[i].name;
        nickName.style.cssText = `font-family: 'Georgia';
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 130%;
        letter-spacing: 0.06em;
        color: #000000;`;
        let typeDiv = document.createElement("div");
        typeDiv.style.cssText = `font-family: 'Georgia';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 115%;
        letter-spacing: 0.06em;
        color: #000000;`;
        let animal = document.createElement("span");

        let family = document.createElement("span");
        family.innerText = randyBank2[i].breed;
        animal.innerText = `${randyBank2[i].type} - `;
        typeDiv.appendChild(animal);
        typeDiv.appendChild(family);

        let about = document.createElement("p");
        about.style.cssText = `width: 270px;
        height: 98px;
        font-family: 'Georgia';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 110%;
        letter-spacing: 0.06em;
        color: #000000;`;
        about.innerText = randyBank2[i].description;

        let UL = document.createElement("ul");

        UL.className = "pop-up-ul";

        let lifeDiv = document.createElement("li");
        let ocultDiv = document.createElement("li");
        let healthDiv = document.createElement("li");
        let wormsDiv = document.createElement("li");

        let lifeTag = document.createElement("span");
        let ocultTag = document.createElement("span");
        let healthTag = document.createElement("span");
        let wormsTag = document.createElement("span");

        lifeTag.innerText = "Age: ";
        ocultTag.innerText = "Inoculatios: ";
        healthTag.innerText = "Diseases: ";
        wormsTag.innerText = "Parasites: ";

        let life = document.createElement("span");
        let ocult = document.createElement("span");
        let health = document.createElement("span");
        let worms = document.createElement("span");

        life.className = "pop-list-item";
        ocult.className = "pop-list-item";
        health.className = "pop-list-item";
        worms.className = "pop-list-item";

        life.innerText = randyBank2[i].age;
        ocult.innerText = randyBank2[i].inoculations;
        health.innerText = randyBank2[i].diseases;
        worms.innerText = randyBank2[i].parasites;

        lifeDiv.appendChild(lifeTag);
        lifeDiv.appendChild(life);
        ocultDiv.appendChild(ocultTag);
        ocultDiv.appendChild(ocult);
        healthDiv.appendChild(healthTag);
        healthDiv.appendChild(health);
        wormsDiv.appendChild(wormsTag);
        wormsDiv.appendChild(worms);

        popUpInfo.appendChild(pic);
        popUpDetails.appendChild(nickName);
        popUpDetails.appendChild(typeDiv);
        popUpDetails.appendChild(about);

        UL.appendChild(lifeDiv);
        UL.appendChild(ocultDiv);
        UL.appendChild(healthDiv);
        UL.appendChild(wormsDiv);
        popUpDetails.appendChild(UL);

        popUpInfo.appendChild(popUpDetails);
        popUp.append(popUpInfo);

        petsArrowL.disabled = true;
        petsArrowR.disabled = true;
        let closeBtn = document.getElementById("pop-close-btn-id");
        closeBtn.onclick = () => {
          popUpInfo.remove();
          petsArrowL.disabled = false;
          petsArrowR.disabled = false;
          popUpBig.style.visibility = "hidden";
        };
      });

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
      petBtn.addEventListener("click", () => {
        popUpBig.style.visibility = "visible";
        popUpBig.style.zIndex = 101;
        let popUp = document.getElementById("pets-pop-up-id");
        let popUpInfo = document.createElement("div");
        let popUpDetails = document.createElement("div");

        popUpInfo.className = "pop-up-info";
        popUpDetails.className = "pop-up-details";

        let pic = document.createElement("img");
        pic.src = randyBank[i].img;
        let nickName = document.createElement("h3");
        nickName.innerText = randyBank[i].name;
        nickName.style.cssText = `font-family: 'Georgia';
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 130%;
        letter-spacing: 0.06em;
        color: #000000;`;
        let typeDiv = document.createElement("div");
        typeDiv.style.cssText = `font-family: 'Georgia';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 115%;
        letter-spacing: 0.06em;
        color: #000000;`;
        let animal = document.createElement("span");

        let family = document.createElement("span");
        family.innerText = randyBank[i].breed;
        animal.innerText = `${randyBank[i].type} - `;
        typeDiv.appendChild(animal);
        typeDiv.appendChild(family);

        let about = document.createElement("p");
        about.style.cssText = `width: 270px;
        height: 98px;
        font-family: 'Georgia';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 110%;
        letter-spacing: 0.06em;
        color: #000000;`;
        about.innerText = randyBank[i].description;

        let UL = document.createElement("ul");
        UL.className = "pop-up-ul";

        let lifeDiv = document.createElement("li");
        let ocultDiv = document.createElement("li");
        let healthDiv = document.createElement("li");
        let wormsDiv = document.createElement("li");

        let lifeTag = document.createElement("span");
        let ocultTag = document.createElement("span");
        let healthTag = document.createElement("span");
        let wormsTag = document.createElement("span");

        lifeTag.innerText = "Age: ";
        ocultTag.innerText = "Inoculatios: ";
        healthTag.innerText = "Diseases: ";
        wormsTag.innerText = "Parasites: ";

        let life = document.createElement("span");
        let ocult = document.createElement("span");
        let health = document.createElement("span");
        let worms = document.createElement("span");

        life.className = "pop-list-item";
        ocult.className = "pop-list-item";
        health.className = "pop-list-item";
        worms.className = "pop-list-item";

        life.innerText = randyBank[i].age;
        ocult.innerText = randyBank[i].inoculations;
        health.innerText = randyBank[i].diseases;
        worms.innerText = randyBank[i].parasites;

        lifeDiv.appendChild(lifeTag);
        lifeDiv.appendChild(life);
        ocultDiv.appendChild(ocultTag);
        ocultDiv.appendChild(ocult);
        healthDiv.appendChild(healthTag);
        healthDiv.appendChild(health);
        wormsDiv.appendChild(wormsTag);
        wormsDiv.appendChild(worms);

        popUpInfo.appendChild(pic);
        popUpDetails.appendChild(nickName);
        popUpDetails.appendChild(typeDiv);
        popUpDetails.appendChild(about);

        UL.appendChild(lifeDiv);
        UL.appendChild(ocultDiv);
        UL.appendChild(healthDiv);
        UL.appendChild(wormsDiv);
        popUpDetails.appendChild(UL);

        popUpInfo.appendChild(popUpDetails);
        popUp.append(popUpInfo);

        petsArrowL.disabled = true;
        petsArrowR.disabled = true;
        let closeBtn = document.getElementById("pop-close-btn-id");
        closeBtn.onclick = () => {
          popUpInfo.remove();
          petsArrowL.disabled = false;
          petsArrowR.disabled = false;
          popUpBig.style.visibility = "hidden";
        };
      });
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

      petBtn.addEventListener("click", () => {
        popUpBig.style.visibility = "visible";
        popUpBig.style.zIndex = 101;
        let popUp = document.getElementById("pets-pop-up-id");
        let popUpInfo = document.createElement("div");
        let popUpDetails = document.createElement("div");

        popUpInfo.className = "pop-up-info";
        popUpDetails.className = "pop-up-details";

        let pic = document.createElement("img");
        pic.src = randyBank2[i].img;
        let nickName = document.createElement("h3");
        nickName.innerText = randyBank2[i].name;
        nickName.style.cssText = `font-family: 'Georgia';
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 130%;
        letter-spacing: 0.06em;
        color: #000000;`;
        let typeDiv = document.createElement("div");
        typeDiv.style.cssText = `font-family: 'Georgia';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 115%;
        letter-spacing: 0.06em;
        color: #000000;`;
        let animal = document.createElement("span");

        let family = document.createElement("span");
        family.innerText = randyBank2[i].breed;
        animal.innerText = `${randyBank[i].type} - `;
        typeDiv.appendChild(animal);
        typeDiv.appendChild(family);

        let about = document.createElement("p");
        about.style.cssText = `width: 270px;
        height: 98px;
        font-family: 'Georgia';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 110%;
        letter-spacing: 0.06em;
        color: #000000;`;
        about.innerText = randyBank2[i].description;

        let UL = document.createElement("ul");
        UL.className = "pop-up-ul";

        let lifeDiv = document.createElement("li");
        let ocultDiv = document.createElement("li");
        let healthDiv = document.createElement("li");
        let wormsDiv = document.createElement("li");

        let lifeTag = document.createElement("span");
        let ocultTag = document.createElement("span");
        let healthTag = document.createElement("span");
        let wormsTag = document.createElement("span");

        lifeTag.innerText = "Age: ";
        ocultTag.innerText = "Inoculatios: ";
        healthTag.innerText = "Diseases: ";
        wormsTag.innerText = "Parasites: ";

        let life = document.createElement("span");
        let ocult = document.createElement("span");
        let health = document.createElement("span");
        let worms = document.createElement("span");

        life.className = "pop-list-item";
        ocult.className = "pop-list-item";
        health.className = "pop-list-item";
        worms.className = "pop-list-item";

        life.innerText = randyBank2[i].age;
        ocult.innerText = randyBank2[i].inoculations;
        health.innerText = randyBank2[i].diseases;
        worms.innerText = randyBank2[i].parasites;

        lifeDiv.appendChild(lifeTag);
        lifeDiv.appendChild(life);
        ocultDiv.appendChild(ocultTag);
        ocultDiv.appendChild(ocult);
        healthDiv.appendChild(healthTag);
        healthDiv.appendChild(health);
        wormsDiv.appendChild(wormsTag);
        wormsDiv.appendChild(worms);

        popUpInfo.appendChild(pic);
        popUpDetails.appendChild(nickName);
        popUpDetails.appendChild(typeDiv);
        popUpDetails.appendChild(about);

        UL.appendChild(lifeDiv);
        UL.appendChild(ocultDiv);
        UL.appendChild(healthDiv);
        UL.appendChild(wormsDiv);
        popUpDetails.appendChild(UL);

        popUpInfo.appendChild(popUpDetails);
        popUp.append(popUpInfo);

        petsArrowL.disabled = true;
        petsArrowR.disabled = true;
        let closeBtn = document.getElementById("pop-close-btn-id");
        closeBtn.onclick = () => {
          popUpInfo.remove();
          petsArrowL.disabled = false;
          petsArrowR.disabled = false;
          popUpBig.style.visibility = "hidden";
        };
      });

      petsCard.appendChild(petImage);
      petsCard.appendChild(petName);
      petsCard.appendChild(petBtn);
      lastBlock.appendChild(petsCard);
    }

    petsBlock.prepend(firstBlock);
    petsBlock.appendChild(middleBlock);
    petsBlock.prepend(lastBlock);
  }

  function doBoys121() {
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
      petBtn.addEventListener("click", () => {
        popUpBig.style.visibility = "visible";
        popUpBig.style.zIndex = 101;
        let popUp = document.getElementById("pets-pop-up-id");
        let popUpInfo = document.createElement("div");
        let popUpDetails = document.createElement("div");

        popUpInfo.className = "pop-up-info";
        popUpDetails.className = "pop-up-details";

        let pic = document.createElement("img");
        pic.src = randyBank[i].img;
        let nickName = document.createElement("h3");
        nickName.innerText = randyBank[i].name;
        nickName.style.cssText = `font-family: 'Georgia';
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 130%;
        letter-spacing: 0.06em;
        color: #000000;`;
        let typeDiv = document.createElement("div");
        typeDiv.style.cssText = `font-family: 'Georgia';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 115%;
        letter-spacing: 0.06em;
        color: #000000;`;
        let animal = document.createElement("span");

        let family = document.createElement("span");
        family.innerText = randyBank[i].breed;
        animal.innerText = `${randyBank[i].type} - `;
        typeDiv.appendChild(animal);
        typeDiv.appendChild(family);

        let about = document.createElement("p");
        about.style.cssText = `width: 270px;
        height: 98px;
        font-family: 'Georgia';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 110%;
        letter-spacing: 0.06em;
        color: #000000;`;
        about.innerText = randyBank[i].description;

        let UL = document.createElement("ul");
        UL.className = "pop-up-ul";

        let lifeDiv = document.createElement("li");
        let ocultDiv = document.createElement("li");
        let healthDiv = document.createElement("li");
        let wormsDiv = document.createElement("li");

        let lifeTag = document.createElement("span");
        let ocultTag = document.createElement("span");
        let healthTag = document.createElement("span");
        let wormsTag = document.createElement("span");

        lifeTag.innerText = "Age: ";
        ocultTag.innerText = "Inoculatios: ";
        healthTag.innerText = "Diseases: ";
        wormsTag.innerText = "Parasites: ";

        let life = document.createElement("span");
        let ocult = document.createElement("span");
        let health = document.createElement("span");
        let worms = document.createElement("span");

        life.className = "pop-list-item";
        ocult.className = "pop-list-item";
        health.className = "pop-list-item";
        worms.className = "pop-list-item";

        life.innerText = randyBank[i].age;
        ocult.innerText = randyBank[i].inoculations;
        health.innerText = randyBank[i].diseases;
        worms.innerText = randyBank[i].parasites;

        lifeDiv.appendChild(lifeTag);
        lifeDiv.appendChild(life);
        ocultDiv.appendChild(ocultTag);
        ocultDiv.appendChild(ocult);
        healthDiv.appendChild(healthTag);
        healthDiv.appendChild(health);
        wormsDiv.appendChild(wormsTag);
        wormsDiv.appendChild(worms);

        popUpInfo.appendChild(pic);
        popUpDetails.appendChild(nickName);
        popUpDetails.appendChild(typeDiv);
        popUpDetails.appendChild(about);

        UL.appendChild(lifeDiv);
        UL.appendChild(ocultDiv);
        UL.appendChild(healthDiv);
        UL.appendChild(wormsDiv);
        popUpDetails.appendChild(UL);

        popUpInfo.appendChild(popUpDetails);
        popUp.append(popUpInfo);

        petsArrowL.disabled = true;
        petsArrowR.disabled = true;
        let closeBtn = document.getElementById("pop-close-btn-id");
        closeBtn.onclick = () => {
          popUpInfo.remove();
          petsArrowL.disabled = false;
          petsArrowR.disabled = false;
          popUpBig.style.visibility = "hidden";
        };
      });
      petsCard.appendChild(petImage);
      petsCard.appendChild(petName);
      petsCard.appendChild(petBtn);
      firstBlock.appendChild(petsCard);
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

      petBtn.addEventListener("click", () => {
        popUpBig.style.visibility = "visible";
        popUpBig.style.zIndex = 101;
        let popUp = document.getElementById("pets-pop-up-id");
        let popUpInfo = document.createElement("div");
        let popUpDetails = document.createElement("div");

        popUpInfo.className = "pop-up-info";
        popUpDetails.className = "pop-up-details";

        let pic = document.createElement("img");
        pic.src = randyBank2[i].img;
        let nickName = document.createElement("h3");
        nickName.innerText = randyBank2[i].name;
        nickName.style.cssText = `font-family: 'Georgia';
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 130%;
        letter-spacing: 0.06em;
        color: #000000;`;
        let typeDiv = document.createElement("div");
        typeDiv.style.cssText = `font-family: 'Georgia';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 115%;
        letter-spacing: 0.06em;
        color: #000000;`;
        let animal = document.createElement("span");

        let family = document.createElement("span");
        family.innerText = randyBank2[i].breed;
        animal.innerText = `${randyBank[i].type} - `;
        typeDiv.appendChild(animal);
        typeDiv.appendChild(family);

        let about = document.createElement("p");
        about.style.cssText = `width: 270px;
        height: 98px;
        font-family: 'Georgia';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 110%;
        letter-spacing: 0.06em;
        color: #000000;`;
        about.innerText = randyBank2[i].description;

        let UL = document.createElement("ul");
        UL.className = "pop-up-ul";

        let lifeDiv = document.createElement("li");
        let ocultDiv = document.createElement("li");
        let healthDiv = document.createElement("li");
        let wormsDiv = document.createElement("li");

        let lifeTag = document.createElement("span");
        let ocultTag = document.createElement("span");
        let healthTag = document.createElement("span");
        let wormsTag = document.createElement("span");

        lifeTag.innerText = "Age: ";
        ocultTag.innerText = "Inoculatios: ";
        healthTag.innerText = "Diseases: ";
        wormsTag.innerText = "Parasites: ";

        let life = document.createElement("span");
        let ocult = document.createElement("span");
        let health = document.createElement("span");
        let worms = document.createElement("span");

        life.className = "pop-list-item";
        ocult.className = "pop-list-item";
        health.className = "pop-list-item";
        worms.className = "pop-list-item";

        life.innerText = randyBank2[i].age;
        ocult.innerText = randyBank2[i].inoculations;
        health.innerText = randyBank2[i].diseases;
        worms.innerText = randyBank2[i].parasites;

        lifeDiv.appendChild(lifeTag);
        lifeDiv.appendChild(life);
        ocultDiv.appendChild(ocultTag);
        ocultDiv.appendChild(ocult);
        healthDiv.appendChild(healthTag);
        healthDiv.appendChild(health);
        wormsDiv.appendChild(wormsTag);
        wormsDiv.appendChild(worms);

        popUpInfo.appendChild(pic);
        popUpDetails.appendChild(nickName);
        popUpDetails.appendChild(typeDiv);
        popUpDetails.appendChild(about);

        UL.appendChild(lifeDiv);
        UL.appendChild(ocultDiv);
        UL.appendChild(healthDiv);
        UL.appendChild(wormsDiv);
        popUpDetails.appendChild(UL);

        popUpInfo.appendChild(popUpDetails);
        popUp.append(popUpInfo);

        petsArrowL.disabled = true;
        petsArrowR.disabled = true;
        let closeBtn = document.getElementById("pop-close-btn-id");
        closeBtn.onclick = () => {
          popUpInfo.remove();
          petsArrowL.disabled = false;
          petsArrowR.disabled = false;
          popUpBig.style.visibility = "hidden";
        };
      });

      petsCard.appendChild(petImage);
      petsCard.appendChild(petName);
      petsCard.appendChild(petBtn);
      middleBlock.appendChild(petsCard);
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
      petBtn.addEventListener("click", () => {
        popUpBig.style.visibility = "visible";
        popUpBig.style.zIndex = 101;
        let popUp = document.getElementById("pets-pop-up-id");
        let popUpInfo = document.createElement("div");
        let popUpDetails = document.createElement("div");

        popUpInfo.className = "pop-up-info";
        popUpDetails.className = "pop-up-details";

        let pic = document.createElement("img");
        pic.src = randyBank[i].img;
        let nickName = document.createElement("h3");
        nickName.innerText = randyBank[i].name;
        nickName.style.cssText = `font-family: 'Georgia';
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 130%;
        letter-spacing: 0.06em;
        color: #000000;`;
        let typeDiv = document.createElement("div");
        typeDiv.style.cssText = `font-family: 'Georgia';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 115%;
        letter-spacing: 0.06em;
        color: #000000;`;
        let animal = document.createElement("span");

        let family = document.createElement("span");
        family.innerText = randyBank[i].breed;
        animal.innerText = `${randyBank[i].type} - `;
        typeDiv.appendChild(animal);
        typeDiv.appendChild(family);

        let about = document.createElement("p");
        about.style.cssText = `width: 270px;
        height: 98px;
        font-family: 'Georgia';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 110%;
        letter-spacing: 0.06em;
        color: #000000;`;
        about.innerText = randyBank[i].description;

        let UL = document.createElement("ul");
        UL.className = "pop-up-ul";

        let lifeDiv = document.createElement("li");
        let ocultDiv = document.createElement("li");
        let healthDiv = document.createElement("li");
        let wormsDiv = document.createElement("li");

        let lifeTag = document.createElement("span");
        let ocultTag = document.createElement("span");
        let healthTag = document.createElement("span");
        let wormsTag = document.createElement("span");

        lifeTag.innerText = "Age: ";
        ocultTag.innerText = "Inoculatios: ";
        healthTag.innerText = "Diseases: ";
        wormsTag.innerText = "Parasites: ";

        let life = document.createElement("span");
        let ocult = document.createElement("span");
        let health = document.createElement("span");
        let worms = document.createElement("span");

        life.className = "pop-list-item";
        ocult.className = "pop-list-item";
        health.className = "pop-list-item";
        worms.className = "pop-list-item";

        life.innerText = randyBank[i].age;
        ocult.innerText = randyBank[i].inoculations;
        health.innerText = randyBank[i].diseases;
        worms.innerText = randyBank[i].parasites;

        lifeDiv.appendChild(lifeTag);
        lifeDiv.appendChild(life);
        ocultDiv.appendChild(ocultTag);
        ocultDiv.appendChild(ocult);
        healthDiv.appendChild(healthTag);
        healthDiv.appendChild(health);
        wormsDiv.appendChild(wormsTag);
        wormsDiv.appendChild(worms);

        popUpInfo.appendChild(pic);
        popUpDetails.appendChild(nickName);
        popUpDetails.appendChild(typeDiv);
        popUpDetails.appendChild(about);

        UL.appendChild(lifeDiv);
        UL.appendChild(ocultDiv);
        UL.appendChild(healthDiv);
        UL.appendChild(wormsDiv);
        popUpDetails.appendChild(UL);

        popUpInfo.appendChild(popUpDetails);
        popUp.append(popUpInfo);

        petsArrowL.disabled = true;
        petsArrowR.disabled = true;
        let closeBtn = document.getElementById("pop-close-btn-id");
        closeBtn.onclick = () => {
          popUpInfo.remove();
          petsArrowL.disabled = false;
          petsArrowR.disabled = false;
          popUpBig.style.visibility = "hidden";
        };
      });
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

  // function onestep() {
  //   newF();
  //   shuffle();
  //   grandMatch();
  //   doBoys();
  // }

  let offSet = 0;
  let countR = 0;
  let countL = 0;

  petsArrowR.addEventListener("click", () => {
    // onestep();
    countR++;
    countL++;
    if (countR <= 1) {
      offSet += 960;
      petsBlock.style.cssText = `transform: translateX(${offSet}px); transition: 1s;`;
      petsArrowR.disabled = true;
      setTimeout(function () {
        offSet = 0;
        petsBlock.style.cssText = `transform: translateX(${offSet}px);`;
        newF();
        shuffle1();
        grandMatch1();
        doBoys121();
        petsArrowR.disabled = false;
      }, 1000);
    }

    if (countR > 1) {
      offSet += 960;
      petsBlock.style.cssText = `transform: translateX(${offSet}px); transition: 1s;`;
      petsArrowR.disabled = true;
      setTimeout(function () {
        offSet = 0;
        petsBlock.style.cssText = `transform: translateX(${offSet}px);`;
        newF();
        shuffle2();
        grandMatch2();
        doBoys();
        petsArrowR.disabled = false;
      }, 1000);
      countR = 0;
      countL = 0;
    }
  });

  petsArrowL.addEventListener("click", () => {
    // onestep();
    countL++;
    countR++;
    if (countL <= 1) {
      offSet -= 960;
      petsBlock.style.cssText = `transform: translateX(${offSet}px); transition: 1s`;
      petsArrowL.disabled = true;
      setTimeout(function () {
        offSet = 0;
        petsBlock.style.cssText = `transform: translateX(${offSet}px);`;
        newF();
        shuffle1();
        grandMatch1();
        doBoys121();
        petsArrowL.disabled = false;
      }, 1000);
    }

    if (countL > 1) {
      offSet -= 960;
      petsBlock.style.cssText = `transform: translateX(${offSet}px); transition: 1s`;
      petsArrowL.disabled = true;
      setTimeout(function () {
        offSet = 0;
        petsBlock.style.cssText = `transform: translateX(${offSet}px);`;
        newF();
        shuffle2();
        grandMatch2();
        doBoys();
        petsArrowL.disabled = false;
      }, 1000);
      countL = 0;
      countR = 0;
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
