// -----------------------------------------------------------------------------------------------------

// Animacion

// -----------------------------------------------------------------------------------------------------

let rotation = 0;
let rotatingImage = document.getElementById('rotating-image');

function rotateImage() {
    rotation += 1;
    rotatingImage.style.transform = 'rotateY(' + rotation + 'deg)';
    requestAnimationFrame(rotateImage);
}

rotateImage();