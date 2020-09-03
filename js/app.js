

// dargability variables
let drags = [];
let draggables = false;

// token variables
let currToken = '';
currentToken = 0;

// progress line variables
const progressBar = document.querySelector('.progress-line');
let progress = 0;

const mouse = document.querySelector('#mouse');

const info = document.querySelector('#info');
const abstract = document.querySelector('#abstract');
let abShow = false;

const tspartiCanvas = document.querySelector('#tsparticles');

const progressCounter = document.querySelector('.counter');
let counter = 0;

// create 23 tokens
for(i=0; i < batches.length; i++){  
    let token = document.createElement('DIV');
    token.innerHTML = 'x';
    token.id = 'token_' + (i+1);
    token.className = 'token';
    token.dataset.played = 'false';
    token.dataset.number = i;
    body.appendChild(token);
};

// function to open mask layer
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

// function to hide mask and delete  all content
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

// function to make all of the images come up
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
        } else{
            file = `
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${content[i]}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
        }

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
  counter ++;
  progressCounter.innerText = counter + '/23';  
}

const cleanse = () => {
   ad.style.width = "100vw";
};

const deCleanse = () => {
    ad.style.width = 0;
}


// looking for tokens
body.addEventListener('mouseover', e => {
    let el = e.target;
    let cls = e.target.className;
    let tokenNo = e.target.dataset.number;
    let played = e.target.dataset.played;
    if(cls === 'token' && played === 'false' && Number(tokenNo) === currentToken){
        el.style.opacity = 1;
        el.style.zIndex = 0;
        e.target.dataset.played = 'true';
        setTimeout(() => {
            el.classList.add('token_after');
        }, 1000);
        setTimeout(() => {
            showMask();
            populate(tokenNo);
            currentToken ++;
        }, 2000);
    }
    let next = '#token_' + (currentToken + 1);
    let nextEl = document.querySelector(next);
    nextEl.style.display = 'block';
});

document.addEventListener('mousemove', e => {
    let posX = e.clientX;
    let posY = e.clientY;
    let current = '#token_' + (currentToken + 1);
    let target = document.querySelector(current);
    let top = target.offsetTop;
    let left = target.offsetLeft
    let distance = Math.sqrt(Math.pow((posX-left), 2) + Math.pow((posY-top), 2));

    mouse.style.top = posY -15;
    mouse.style.left = posX - 15;

    if(distance > 1000){
        mouse.className = 'cold';
    } else if(distance < 1000 && distance > 300){
        mouse.className = 'warm';
    } else if (distance < 300){
        mouse.className = 'hot';
    }
})

// close mask layer
close.addEventListener('click', () => {
    hideMask();
    progression();
    if(currentToken === 10 || currentToken === 20){
        cleanse();
    }
    if(currentToken === 23){
        tspartiCanvas.style.cursor = 'auto';
        mouse.style.display = 'none';
    }
});

end.addEventListener('click', () => {
    deCleanse();
});

setTimeout(() => {
    cleanse();
}, 60000)

info.addEventListener('click', () => {
    abstract.style.display = 'block';
    setTimeout(() => {
        abShow = true;
    }, 500)
})

body.addEventListener('click', () => {
    if(abShow){
        abstract.style.display = 'none';
        abShow = false;
    }
})