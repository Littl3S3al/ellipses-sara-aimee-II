const canvas = document.querySelector('#canvas');
const mask = document.querySelector('#mask');
const barrier = document.querySelector('#barrier');
const close = document.querySelector('#close');
const body = document.querySelector('body');

// dargability variables
let drags = [];
let draggables = false;

// token variables
let currToken = '';

// progress line variables
const progressBar = document.querySelector('.progress-line');
let progress = 0;


for(i=0; i < batches.length; i++){
    // create 23 tokens
    let token = document.createElement('DIV');
    token.innerHTML = 'x';
    token.id = 'token_' + i;
    token.className = 'token';
    token.dataset.played = 'false';
    token.dataset.number = i;
    body.appendChild(token);
    // create 23 progress dots
    let dot = `<div class='status'><div class='dot'></div></div>`;
    progressBar.innerHTML += dot;
};

// code to open mask layer
const showMask = () => {
    mask.style.width ='100vw';
    mask.style.height = '100vh';
    mask.style.top = 0;
    mask.style.left = 0;
    barrier.style.display = 'block';
    setTimeout(()=> {
        close.style.display = 'block';
    }, 3000);
    progress ++;
};

// code to hide mask and delete  all content
const hideMask = () => {
    mask.style.width ='0';
    mask.style.height = '0';
    mask.style.top = '50vh';
    mask.style.left = '50vw';
    close.style.display = 'none';
    setTimeout(()=> {
        barrier.style.display = 'none';
        mask.innerHTML = '';
    }, 1000);
};

// all of the images come up
const populate = (num) => {
    let i = 0;
    let bottom = 150;
    let left = 50;
    let content = batches[num];

    let imagePop = setInterval(() => {
        let file;
        // check file extension
        let ext = content[i].substring(content[i].length - n);
        // check if image
        if(ext === "jpg"){
            file = `<img src="assets/${content[i]}">`;
        };
        // check if video

        mask.innerHTML += `<div class="draggable d${i}" style="bottom: ${bottom}px; left: ${left}px;" ondrop="drop(event)">${file}</div>`;
        drags.push(`div.draggable.d${i}`);
        i ++;
        bottom += 75;
        left += 75;
        if(i >=  content.length){
            clearInterval(imagePop);
            drags.forEach(drag => {
                new Draggabilly(drag);
                draggables = true;
            });
        };
    }, 300);
}

const progression = () => {
    const dots = document.querySelectorAll('.dot');
    const line = document.querySelector(".progress");

    for(i = 0; i < progress; i++){
        if(!dots[i].classList.contains('completed')){
            dots[i].classList.add('completed');
        } 
        if(dots[i].classList.contains('current')){
            dots[i].classList.remove('current');
        }
    }
    dots[progress].classList.add('current');
    line.style.width = (progress / (batches.length - 1) * 100) + "%";
}

// looking for tokens
body.addEventListener('mouseover', e => {
    let el = e.target;
    let cls = e.target.className;
    let tokenNo = e.target.dataset.number;
    let played = e.target.dataset.played;
    if(cls === 'token' && played === 'false'){
        el.style.opacity = 1;
        el.style.zIndex = 0;
        e.target.dataset.played = 'true';
        setTimeout(() => {
            showMask();
            populate(tokenNo);
        }, 1000);
    }
});

// close mask layer
close.addEventListener('click', () => {
    hideMask();
    progression();
})

