const fills = document.querySelectorAll(".fill");
const title = document.querySelector('.title')
const dragArea = document.querySelector(".drag-area");
const endBanner = document.querySelector('.end-banner');

let currentFill; 
let level = 0
let opacity = 8

const dragStart = function (e) {
    currentFill = e.target
};

const dragOver = function (e) {
  e.preventDefault();

  dragArea.classList.add('opacity')
};

const dragEnter = function (e) {
  e.preventDefault();
};

const dragDrop = function () {
    level += 1 
    opacity -= 2

    currentFill.style.display = "none";
    dragArea.classList.remove('opacity')
    dragArea.classList.add(`level-${level}`)

    title.style.opacity = `0.${opacity}`

    if(level === 5) {
        endBanner.style.display = 'block'
    }
};

const dragLeave = function (e) {
    dragArea.classList.remove('opacity')
};

const redirectToPage = function () {
    window.open('https://zygon.digital/');
}

for (const fill of fills) {
    fill.addEventListener("dragstart", dragStart);
}

dragArea.addEventListener("dragover", dragOver);
dragArea.addEventListener("dragenter", dragEnter);
dragArea.addEventListener("dragleave", dragLeave);
dragArea.addEventListener("drop", dragDrop);

endBanner.addEventListener('click', redirectToPage);



