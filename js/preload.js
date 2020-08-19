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
    loadingScrn.style.opacity = '0';
    setTimeout(() => {
        loadingScrn.classList.add('hidden');
    }, 300);
    canvas.classList.remove('hidden');
    particles.classList.remove('hidden');
    journey.classList.remove('hidden');

})