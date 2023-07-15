const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let particlesArray = [];

class Particle {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`; // random color
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;

        if(this.size > 0.2) this.size -= 0.1;
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}

function createParticles(e) {
    const xPos = e.x;
    const yPos = e.y;
    for(let i = 0; i < 5; i++){
        particlesArray.push(new Particle(xPos, yPos));
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();

        if(particlesArray[i].size <= 0.2){
            particlesArray.splice(i, 1);
            i--; // prevent skipping particles after splice
        }
    }
    requestAnimationFrame(animateParticles);
}

window.addEventListener('mousemove', createParticles);
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
animateParticles();

/* Add your scripts here */
window.addEventListener('scroll', function () {
    const gifContainer = document.querySelector('.gif-container');
    const scrollPosition = window.scrollY;

    if (scrollPosition > window.innerHeight / 2) {
        gifContainer.style.visibility = 'visible';
    } else {
        gifContainer.style.visibility = 'hidden';
    }
});


function createStars() {
    for(let i = 0; i < 200; i++) { // create 200 stars
        let star = document.createElement('div');
        star.classList.add('star');

        // position the stars randomly on the screen
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.top = Math.random() * window.innerHeight + 'px';

        // stars of different sizes
        let size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // stars blinking at different speeds
        let duration = Math.random() * 1 + 1;
        star.style.animationDuration = `${duration}s`;

        // stars changing positions
        star.style.animationDelay = `${Math.random() * 2}s`;
        star.style.animationDirection = "alternate";

        document.body.appendChild(star);
    }
}

createStars();

function createShootingStar() {
    // Create a new shooting star element
    const star = document.createElement('div');
    star.classList.add('shootingStar');

    // Calculate a random start and end position
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const endX = Math.random() * window.innerWidth;
    const endY = Math.random() * window.innerHeight;

    // Set the starting position
    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;

    // Animate the shooting star to the end position
    const animation = star.animate([
        // keyframes
        { transform: 'translate(0, 0)' },
        { transform: `translate(${endX - startX}px, ${endY - startY}px)` }
    ], {
        // timing options
        duration: 2000,
        iterations: 1
    });

    // When the animation ends, remove the shooting star element
    animation.onfinish = () => {
        document.body.removeChild(star);
    };

    // Append the shooting star to the body
    document.body.appendChild(star);

    // Create a trail for the shooting star
    for (let i = 0; i < 30; i++) {
        createTrail(startX, startY, i * 5, endX - startX, endY - startY);
    }
}

function createTrail(startX, startY, offset, distX, distY) {
    // Create a new trail element
    const trail = document.createElement('div');
    trail.classList.add('trail');

    // Set the starting position
    trail.style.left = `${startX}px`;
    trail.style.top = `${startY}px`;

    // Animate the trail to follow the shooting star
    const animation = trail.animate([
        // keyframes
        { transform: 'translate(0, 0)' },
        { transform: `translate(${distX}px, ${distY}px)` }
    ], {
        // timing options
        duration: 2000,
        delay: offset,
        iterations: 1
    });

    // When the animation ends, remove the trail element
    animation.onfinish = () => {
        document.body.removeChild(trail);
    };

    // Append the trail to the body
    document.body.appendChild(trail);
}

setInterval(createShootingStar, 2000); // Create a new shooting star every 2 seconds

const profilePic = document.getElementById('profile-pic');
const squidContainer = document.getElementById('squid-container');
const squid = document.getElementById('squid');

let lastDirection = null;
const directions = ['move-right', 'move-left', 'move-up', 'move-down', 'move-diagonal-right-up', 'move-diagonal-right-down', 'move-diagonal-left-up', 'move-diagonal-left-down'];

profilePic.addEventListener('mouseover', () => {
    // Randomly position the squid on the page
    const squidStartX = Math.random() * window.innerWidth;
    const squidStartY = Math.random() * window.innerHeight;
    squidContainer.style.left = `${squidStartX}px`;
    squidContainer.style.top = `${squidStartY}px`;

    // Randomly assign a direction class
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    squid.className = ""; // remove previous class
    squid.classList.add(randomDirection);

    // Randomize animation duration
    const randomDuration = Math.random() * 5 + 2; // random value between 0.5 and 2 seconds
    squid.style.animationDuration = `${randomDuration}s`;

    squidContainer.style.display = 'block';

    squid.addEventListener('animationend', () => {
        squidContainer.style.display = 'none';
    });
});






