const burger = document.querySelector(".burger");
const presentsList = document.querySelector(".products-list");
const circle = document.querySelector(".circle");
const burgerNav = document.querySelector(".burger-navigation");

const presentInfoContainer = document.querySelector(
  ".description-text-container"
);

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".cloud-container").classList.add("cloud-show");
  }, 3000);
});

burger.addEventListener("click", handleCircleClick);
presentsList.addEventListener("click", handlePresentsClick);

function handleCircleClick() {
  burger.classList.toggle("active");
  burger.classList.toggle("burger-open");
  if (burger.classList.contains("active")) {
    circle.classList.add("circle-open");

    burgerNav.classList.add("burger-navigation-block");
    return;
  } else {
    burgerNav.classList.remove("burger-navigation-block");
  }
  circle.classList.toggle("circle-open");
}

function handlePresentsClick(e) {
  if (e.target === e.currentTarget) {
    return;
  }
  document.querySelectorAll(".products-list_item").forEach((item) => {
    if (item.classList.contains("products-list_item--active")) {
      return item.classList.remove("products-list_item--active");
    }
  });
  e.target.classList.add("products-list_item--active");
  document.querySelector(".products-description").innerHTML = "";
  let heading = e.target.dataset.name;
  let imageSrc = e.target.dataset.img;
  let text = e.target.dataset.text;
  let html = markup(heading, text, imageSrc);
  document
    .querySelector(".products-description")
    .insertAdjacentHTML("beforeend", html);
}

function markup(heading, text, image) {
  return `
  <div class='description-text-container'>
  <p class="description_heading">${heading}</p>
            <p class="description_text">
              ${text}
            </p>
          </div>
        
          <div class="products-description-image" style="background-image: url('${image}')"></div>
         
  `;
}

function insertMarkup() {}

function createDot(x, y) {
  const elem = document.createElement("div");
  elem.setAttribute("class", "dot");
  elem.setAttribute("style", "left:" + x + "px;top:" + y + "px;");
  document.getElementsByTagName("body")[0].appendChild(elem);
  return elem;
}

// let Count_Num_Of_Dots = 0;

// function addDot() {
//   if (Count_Num_Of_Dots < 80) {
//     createDot(
//       Math.floor(Math.random() * document.body.offsetWidth),
//       Math.floor(Math.random() * document.body.offsetHeight)
//     );
//     Count_Num_Of_Dots++;
//   } else {
//     clearInterval(My_Timer_Var);
//   }
// }

// var My_Timer_Var = setInterval(function () {
//   addDot();
// }, 0.05);
