var petElement = document.getElementById('pet');
var mouseX = 0;
var mouseY = 0;
var petX = 0;
var petY = 0;

function updatePosition() {
    var dx = mouseX - petX;
    var dy = mouseY - petY;
    var speed = 5;

    if (Math.abs(dx) > speed || Math.abs(dy) > speed) {
        var angle = Math.atan2(dy, dx);
        var velocityX = Math.cos(angle) * speed;
        var velocityY = Math.sin(angle) * speed;

        petX += velocityX;
        petY += velocityY;

        petElement.style.left = petX + 'px';
        petElement.style.top = petY + 'px';
    }

    requestAnimationFrame(updatePosition);
}

// For tracking mouse movement
function trackMouse(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
}
document.addEventListener('mousemove', trackMouse);


petX = window.innerWidth / 2;
petY = window.innerHeight / 2;
petElement.style.left = petX + 'px';
petElement.style.top = petY + 'px';

updatePosition();