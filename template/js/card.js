/*
 
# ------------------------------ #
#                                #
#  version 0.0.1                 #
#                                #
#  Aleksiej Ostrowski, 2023      #
#                                #
#  https://aleksiej.com          #
#                                #
# ------------------------------ #  

*/

makeVH = (o) => {
  // console.log(o);
  o.style.display = o.style.display === "none" ? "" : "none";
  // o.style.flipped = doing ? 'transform: rotateY(180deg);' : '';
};

makeTWO = (o) => {
  let card_front = o.querySelector(".card-front");
  let card_back = o.querySelector(".card-back");
  makeVH(card_front);
  makeVH(card_back);
  // o.classList.remove("flipped");
};

var current_container = document.querySelector("main > .container");

new_connections = (o) => {
  o.style.display = "";

  let card_front = o.querySelector(".card-front");
  let card_back = o.querySelector(".card-back");

  card_front.style.display = "";
  card_back.style.display = "none";

  return o;
};

document.addEventListener("DOMContentLoaded", () => {
  current_container = new_connections(current_container);
});

document.getElementById("b_pr").addEventListener("click", function () {
  current_container = prepareOld(current_container);
  current_container = newSlide(current_container.previousElementSibling);
});

document.getElementById("b_nx").addEventListener("click", function () {
  current_container = prepareOld(current_container);
  current_container = newSlide(current_container.nextElementSibling);
});

document.getElementById("b_up").addEventListener("click", function () {
  makeTWO(current_container);
});

prepareOld = (o) => {
  o.style.display = "none";

  /*  
  let card_front = o.querySelector(".card-front");
  let card_back = o.querySelector(".card-back");

  card_front.style.display = ""; 
  card_back.style.display = "none";
  */

  return o;
};

newSlide = (new_o) => {
  if (new_o === null || new_o.nodeName !== "DIV") {
    new_o = document.querySelector("main > .container");
  }
  return new_connections(new_o);
};

checkKey = (e) => {
  e = e || window.event;

  // console.log(e.keyCode);

  switch (e.keyCode) {
    case 38:
      makeTWO(current_container);
      break;
    case 40:
      makeTWO(current_container);
      break;
    case 37:
      current_container = prepareOld(current_container);
      current_container = newSlide(current_container.previousElementSibling);
      break;
    case 39:
      current_container = prepareOld(current_container);
      current_container = newSlide(current_container.nextElementSibling);
      break;
  }
};

document.onkeydown = checkKey;
