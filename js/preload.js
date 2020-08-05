// adding all of the files to the body for preloading

const preload = document.querySelector("#preload");
const n = 3;
const loadingScrn = document.querySelector('#loading');

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
        loadingScrn.style.display = 'none';
    }, 300);
})