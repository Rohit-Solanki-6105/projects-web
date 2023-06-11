const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/80) * (canvas.width/80)
}

window.addEventListener('mousemove',
    function(event){
        mouse.x = event.x;
        mouse.y = event.y;
    }
);

//create particles
class Particle{
    constructor(x,y,dirX,dirY,size,color){
        this.x = x;
        this.y = y;
        this.dirX = dirX;
        this.dirY = dirY;
        this.size = size;
        this.color = color;
    }

    //draw individual particle
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(240, 248, 255, 0.15)';
        ctx.fill();
    }

    //check particle & mouse position , move the particle , draw the particle
    update(){
        //check particle in canvas
        if(this.x > canvas.width || this.x < 0){
            this.dirX = -this.dirX;
        }
        if(this.y > canvas.height || this.y < 0){
            this.dirY = -this.dirY;
        }

        //check collision detection - mouse_pos/particle_pos
        // let dx = mouse.x - this.x;
        // let dy = mouse.y - this.y;

        // let distance = Math.sqrt(dx*dx + dy*dy);

        // if(distance < mouse.radius + this.size){
        //     if(mouse.x < this.x && this.x < canvas.width - this.size * 10){
        //         this.x += 10;
        //     }
        //     if(mouse.x > this.x && this.x > this.size * 10){
        //         this.x -=10;
        //     }
        //     if(mouse.y < this.y && this.y < canvas.height - this.size * 10){
        //         this.y += 10;
        //     }
        //     if(mouse.y> this.y && this.y > this.size * 10){
        //         this.y -=10;
        //     }
        // }
        //move particle
        this.x += this.dirX;
        this.y += this.dirY;

        //draw particle
        this.draw();
    }
}

//create particle array
function init(){
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 50000;

    for(let i = 0; i < numberOfParticles; i++){
        let size = (Math.random() * 20) + 3;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let dirX = (Math.random() * 1) - 2;
        let dirY = (Math.random() * 1) - 2;
        let color = 'rgba(240, 248, 255, 0.1)';

        particlesArray.push(new Particle( x, y, dirX, dirY, size, color));
    }
}

//animation loop
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);

    for(let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
    }
}

// window resize
window.addEventListener('resize',
    function(){
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        init();
    }
);

//mouse out
window.addEventListener('mouseout',
    function(){
        mouse.x = undefined;
        mouse.y = undefined;
    }
);

init();
animate();