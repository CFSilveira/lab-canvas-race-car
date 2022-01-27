window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    myGameArea.start();
    myGameArea.background();
  }
};

const myGameArea = {
canvas: document.getElementById('canvas'),
frames: 0,
start: function() {
  this.ctx = this.canvas.getContext('2d')
  this.interval = setInterval(updateGameArea, 25)
},
clear: function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
},
background: function() {
  const drawBackground = new Image();
  drawBackground.src = './images/road.png';
  drawBackground.addEventListener('load', () => {
    this.ctx.drawImage(drawBackground, 0, 0, this.canvas.width, this.canvas.height);
  });
}/* ,
car: function () {
  const drawCar = new Image();
  drawCar.src = './images/car.png';
  drawCar.addEventListener('load', () => {
    this.ctx.drawImage(drawCar, 207, 500, 80, 120);
  });
} */

  
};

class Car {
  constructor() {    
    this.x = 207;
    this.y = 500;
    
    const imgCar = new Image();
    imgCar.addEventListener('load', () => {
      this.img = imgCar;
      this.draw()
    });
    imgCar.src = './images/car.png';    
  }

  moveLeft(){
    this.x -= 5;
  }

  moveRight(){
    this.x += 5;
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, 80, 120)
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  };
  
  update() {
    const ctx = myGameArea.ctx;
    const drawCar = new Image();
    drawCar.src = './images/car.png';
    drawCar.addEventListener('load', () => {
      this.drawImage(drawCar, this.x, this.y, 80, 120);
    });
  }
}



const player = new Car(80, 120, './images/car.png', 207, 500);

document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowLeft':
      player.moveLeft();
      break;
    case 'ArrowRight':
      player.moveRight();
      break;
  }
});

function updateGameArea() {
/*   myGameArea.clear(); */
   myGameArea.background();
   player.newPos();
   player.update();
};