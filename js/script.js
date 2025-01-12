console.log("JS OK");

// | IMPORT INTERESED ELEMENTS 
const calendar = document.getElementById("calendar");


// | GENERATE DYNAMICALLY CALENDAR BOXES

const size = source.length
for (let i = 0; i < size; i++) {

    // | CALENDAR BOXES
    const boxes = document.createElement('div');

    // | ICONS IMAGES
    const icoBoxes = document.createElement('div');
    const icons = document.createElement('img');

    // | ATTRIBUTES
    const icoBasePath = source[i]['icon'];
    icons.src = `./images/icons/${icoBasePath}.png`;
    icons.alt = icoBasePath;

    // | DAYS NUMBERS
    const j = i + 1;
    const daysBoxes = document.createElement('div');
    daysBoxes.innerText = j;

    // | APPEND INTERESED ELEMENTS

    icoBoxes.appendChild(icons);
    boxes.append(icoBoxes, daysBoxes);
    calendar.appendChild(boxes);

    console.log(source[i], j);
};