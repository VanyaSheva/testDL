const burger = document.querySelector(".burger");
const presentsList = document.querySelector(".products-list");
const circle = document.querySelector(".circle");
const burgerNav = document.querySelector(".burger-navigation");
const button = document.querySelector(".scroll-button");
let Count_Num_Of_Dots = 0;

// инициализация слайдера

docSlider.init({
  speed: 600,
  startSpeed: null,
  easing: "ease",
  pager: false,
});

// событие появления тучки

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".cloud-container").classList.add("cloud-show");
  }, 3000);
});

burger.addEventListener("click", handleCircleClick);
presentsList.addEventListener("click", handlePresentsClick);
button.addEventListener("click", handleButtonClick);

// функция клика на бургер

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

// функция клика на подарок

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
  const heading = e.target.dataset.name;
  const imageSrc = e.target.dataset.img;
  const text = e.target.dataset.text;
  const html = markup(heading, text, imageSrc);
  document
    .querySelector(".products-description")
    .insertAdjacentHTML("beforeend", html);
}
// создание разметки под блок с подарком

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
// функция скролла по кнопке

function handleButtonClick() {
  docSlider.nextPage(600, "ease");
}

// генератор белых точек

function createDot(x, y) {
  const elem = document.createElement("div");
  elem.setAttribute("class", "dot");
  elem.setAttribute("style", "left:" + x + "px;top:" + y + "px;");

  document.getElementsByTagName("body")[0].appendChild(elem);
  return elem;
}

function addDot() {
  if (document.body.offsetWidth < 764) {
    if (Count_Num_Of_Dots < 15) {
      createDot(
        Math.floor(Math.random() * document.body.offsetWidth - 45),
        Math.floor(Math.random() * document.body.offsetHeight - 45)
      );
      Count_Num_Of_Dots++;
    } else {
      clearInterval(My_Timer_Var);
    }
  }
  if (document.body.offsetWidth > 764 && document.body.offsetWidth < 1000) {
    if (Count_Num_Of_Dots < 25) {
      createDot(
        Math.floor(Math.random() * document.body.offsetWidth),
        Math.floor(Math.random() * document.body.offsetHeight)
      );
      Count_Num_Of_Dots++;
    } else {
      clearInterval(My_Timer_Var);
    }
  } else {
    if (Count_Num_Of_Dots < 35) {
      createDot(
        Math.floor(Math.random() * document.body.offsetWidth),
        Math.floor(Math.random() * document.body.offsetHeight)
      );
      Count_Num_Of_Dots++;
    } else {
      clearInterval(My_Timer_Var);
    }
  }
}

const My_Timer_Var = setInterval(function () {
  addDot();
}, 0.05);
