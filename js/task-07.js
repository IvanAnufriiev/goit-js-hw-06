const changeFontSize = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

changeFontSize.addEventListener("input", (event) => {
    let changeSize = event.target.value;
    textSize.style.fontSize = `${changeSize}px`;
});