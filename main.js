const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis asperiores in sed praesentium vitae aliquam iusto iste, quis vel. Fuga quisquam porro minima nostrum ducimus pariatur quas accusamus possimus velit. KONIEC';

//Parameters
let indexText = 0;
const time = 40;

//Implementation
const addLetter = () => {
    spnText.textContent += txt[indexText];
    indexText++;
    if (indexText == txt.length) clearInterval(indexTyping);
}
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);