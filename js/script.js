console.log("JS OK");

// | IMPORT INTERESED ELEMENTS 
const calendar = document.getElementById("calendar");
const overlayBg = document.getElementById('bg-overlay')
const overlayWrapper = document.getElementById('content-wrapper')
const btn = document.getElementById('btn')

// | FUNCTIONS 
const getIndex = (el, index) => {
    el.addEventListener('click', () => {
        console.log(index);
    });
};

const onOverlay = (el, index) => {
    el.addEventListener('click', () => {
        console.log(index, source[index]);
    });
};


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

    /* 
        /* LAST DAY ELEMENT 
        if (i === (size - 1)) {
    
        }
    
     */

    // | OVERLAY ELEMENT
    let overlayContent;
    if (source[i]['type'] === 'image') {
        overlayContent = document.createElement('img');
        overlayContent.src = source[i]['url']
    } else {
        overlayContent = document.createElement('div');
        overlayContent.innerText = source[i]['text']
    }

    overlayContent.classList.add('hidden')
    // | EVENT HANDLER TO SHOW OVERLAY CONTENT
    boxes.addEventListener('click', () => {
        overlayContent.classList.remove('hidden')
        overlayContent.classList.add('show')
        overlayWrapper.classList.remove('hidden')
        overlayWrapper.classList.add('show')
        overlayBg.classList.remove('hidden')
        overlayBg.classList.add('bg-overlay')


        console.log(i, source[i]);
    });

    // | EVENT HANDLER TO HIDE OVERLAY CONTENT
    btn.addEventListener('click', () => {
        overlayContent.classList.add('hidden')
        overlayContent.classList.remove('show')
        overlayWrapper.classList.add('hidden')
        overlayWrapper.classList.remove('show')
        overlayBg.classList.add('hidden')
        overlayBg.classList.remove('bg-overlay')


        console.log(i, source[i]);
    });

    // | APPEND INTERESED ELEMENTS
    icoBoxes.appendChild(icons);
    boxes.append(icoBoxes, daysBoxes);
    calendar.appendChild(boxes);
    overlayWrapper.append(overlayContent)

    getIndex(boxes, i)
    console.log(source[i], j);
};