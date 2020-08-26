// adding all of the files to the body for preloading

const preload = document.querySelector("#preload");
const n = 3;
const loadingScrn = document.querySelector('#loading');

const canvas = document.querySelector('#canvas');
const particles = document.querySelector('#tsparticles');
const mask = document.querySelector('#mask');
const barrier = document.querySelector('#barrier');
const close = document.querySelector('#close');
const body = document.querySelector('body');
const ad = document.querySelector('#digicleanse');
const end = document.querySelector('#deCleanse');
const journey = document.querySelector('#progress');

// looop through all files
batches.forEach(batch => {
    batch.forEach(file => {

        // get the file extension
        let ext = file.substring(file.length - n);

        // check if image
        if(ext === "jpg"){
            preload.innerHTML += `<img src="assets/${file}">`;
        };
        // check if video
    })
})



// hide loading screen once the content has loaded
window.addEventListener('load', () => {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        loadingScrn.innerText = 'please view this on a desktop or PC'
    } else {
        setTimeout(() => {
            loadingScrn.style.opacity = '0';
            setTimeout(() => {
                loadingScrn.classList.add('hidden');
            }, 300);
            journey.classList.remove('hidden');
        }, 300)
    }
})