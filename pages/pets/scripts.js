document.getElementById("logo").onclick = function () {
  location.href = "../main/index.html";
};

// document.getElementById("makeFriendsBTN").onclick = function () {
//   location.href = "#pets";
// };
// document.getElementById("restKnowBTN").onclick = function () {
//   location.href = "../pets/index.html";
// };

function chbg(target, color) {
  document.getElementById(target).style.backgroundColor = color;
}

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    // document.body.style.backgroundColor = "yellow";
    return true;
  } else {
    // document.body.style.backgroundColor = "pink";
    return false;
  }
}
let x = window.matchMedia("(max-width: 769px)");
// myFunction(x);

let bigMaC = document.getElementById("hamburger");
let burgerSLider = document.getElementById("burger-slider-id");

bigMaC.onclick = () => {
  if (myFunction(x)) {
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

  let grandContainer = document.createElement("div");
  grandContainer.className = "grand-container";
  let btnDiv = document.createElement("div");
  let container = document.createElement("div");
  container.className = "container";

  let ourFirendsSlider = document.getElementById("our-firends-slider-id");
  let ourFirendsAllDiv = document.createElement("div");
  ourFirendsAllDiv.className = "our-firends-all";
  ourFirendsSlider.appendChild(ourFirendsAllDiv);

  let arrLL = document.getElementById("double-left-id");
  let arrL = document.getElementById("single-left-id");
  let arrC = document.getElementById("central-arrow-btn-id");
  let arrR = document.getElementById("single-right-id");
  let arrRR = document.getElementById("double-right-id");

  let container2 = document.createElement("div");
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let colorArr = ["red", "black", "yellow", "green", "blue", "purple"];
  container2.className = "container2";
  for (let j = 0; j < 6; j++) {
    let randyBank = [];
    // let count = 0;
    // let imgDiv = document.createElement("div");
    // imgDiv.style.cssText = `border: 5px solid black; width`
    while (randyBank.length < 8) {
      let randy = randomInteger(0, 7);
      if (randyBank.includes(data[randy])) {
      } else {
        randyBank.push(data[randy]);
      }
    }

    for (let i = 0; i < randyBank.length; i++) {
      let petCard = document.createElement("div");
      petCard.className = "our-firends-block";
      let image = document.createElement("img");
      let petName = document.createElement("p");
      let petBtnLearn = document.createElement("button");
      petBtnLearn.className = "btn_learn_more";
      petName.className = "our-firends-name";
      // image.style.cssText = ` border: 1px solid ${colorArr[j]}`;
      image.src = randyBank[i].img;
      petName.innerText = randyBank[i].name;
      petBtnLearn.innerText = "Learn more";

      petBtnLearn.addEventListener("click", () => {
        let allBTN = document.getElementsByClassName("btn_learn_more");
        for (let i = 0; i < allBTN.length; i++) {
          allBTN[i].disabled = true;
        }
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

        arrLL.disabled = true;
        arrL.disabled = true;
        arrC.disabled = true;
        arrR.disabled = true;
        arrRR.disabled = true;
        let closeBtn = document.getElementById("pop-close-btn-id");
        closeBtn.onclick = () => {
          for (let i = 0; i < allBTN.length; i++) {
            allBTN[i].disabled = false;
          }
          popUpInfo.remove();
          arrLL.disabled = false;
          arrL.disabled = false;
          arrC.disabled = false;
          arrR.disabled = false;
          arrRR.disabled = false;
          popUpBig.style.visibility = "hidden";
        };
      });

      petCard.appendChild(image);
      petCard.appendChild(petName);
      petCard.appendChild(petBtnLearn);
      ourFirendsAllDiv.appendChild(petCard);
    }
  }

  // container.appendChild(container2);
  ourFirendsSlider.appendChild(ourFirendsAllDiv);
  // grandContainer.append(container);
  let offSet = 0;
  let clickR = 0;
  arrC.innerText = `${1 + clickR}`;
  let clickL = 0;
  arrL.disabled = true;
  arrR.addEventListener("click", () => {
    arrL.disabled = false;
    arrLL.disabled = false;
    offSet -= 1240;
    clickR++;
    arrC.innerText = `${1 + clickR}`;
    if (offSet > -7440) {
      ourFirendsAllDiv.style.cssText = `transform: translateX(${offSet}px); transition: 1s;`;
    }
    if (clickR >= 5) {
      arrR.disabled = true;
    } else {
      arrR.disabled = false;
    }
  });

  arrL.addEventListener("click", () => {
    clickR--;
    arrC.innerText = `${1 + clickR}`;
    arrR.disabled = false;
    offSet += 1240;
    if (offSet < 1240) {
      ourFirendsAllDiv.style.cssText = `transform: translateX(${offSet}px); transition: 1s;`;
    }
    if (clickR === 0) {
      arrL.disabled = true;
      arrLL.disabled = true;
    }
  });

  arrLL.addEventListener("click", () => {
    clickR = 0;
    arrC.innerText = `${1 + clickR}`;
    arrLL.disabled = true;
    arrL.disabled = true;

    arrR.disabled = false;
    arrRR.disabled = false;
    offSet = 0;
    ourFirendsAllDiv.style.cssText = `transform: translateX(${offSet}px); transition: 1s;`;
  });
  arrRR.addEventListener("click", () => {
    clickR = 5;
    arrC.innerText = `${1 + clickR}`;
    arrLL.disabled = false;
    arrL.disabled = false;
    arrR.disabled = true;
    arrRR.disabled = true;
    offSet = -6200;
    ourFirendsAllDiv.style.cssText = `transform: translateX(${offSet}px); transition: 1s;`;
  });

  // btnDiv.appendChild(arrL);
  // btnDiv.appendChild(arrR);
  // grandContainer.appendChild(btnDiv);
  // document.body.append(grandContainer);
}
