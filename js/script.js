console.log("JS OK");

// | IMPORT INTERESED ELEMENTS 
const calendar = document.getElementById("calendar");


// | GENERATE DYNAMICALLY CALENDAR BOXES

const size = source.length
for (let i = 0; i < size; i++) {

    // | CALENDAR BOXES
    const boxes = document.createElement('div');
    boxes.dataset.box = 'calendar-day'

    // | ICONS IMAGES
    const icoBoxes = document.createElement('div');
    const icons = document.createElement('img');
    icoBoxes.dataset.icoBox = 'box-ico'
    icons.dataset.icon = 'icon'

    // | ATTRIBUTES
    const icoBasePath = source[i]['icon'];
    icons.src = `./images/icons/${icoBasePath}.png`;
    icons.alt = icoBasePath;

    // | DAYS NUMBERS
    const j = i + 1;
    const daysBoxes = document.createElement('div');
    daysBoxes.innerText = j;
    daysBoxes.dataset.day = 'num'

    // | APPEND INTERESED ELEMENTS

    icoBoxes.appendChild(icons);
    boxes.append(icoBoxes, daysBoxes);
    calendar.appendChild(boxes);

    console.log(source[i], j);
};