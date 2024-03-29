function Game() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.images = [];
    this.preloader();
    this.level = 1;
}

Game.prototype.setup = function() {
    var numEnemies = 0;
    this.score = 0; 
    this.bonusScore = 0; // player gets bonus score as gets higher level
    this.invaderSpeed = 0.5;
    this.status = "playing";
    this.keyBind();
    this.invaders = [];
    this.missiles = [];
    this.player = new Player(this.images["player"]);
    
	// we need to clear the interval before creating new interval
    if (intervalBool == true) {
        clearInterval(interval);
        intervalBool = false;
    }
    if (intervalBool == false) {
        interval = setInterval(this.update, 16);
        intervalBool = true;
    }
    
	for (var i = 0; i < 8; i++) {
		for (var y = 0; y < 3; y++) {
			if (y == 0) { //setting first row of invaders
				this.invaders[numEnemies++] = new Invader(this.images["invader1"], 40 + i * 80 + 24, y * 40 + 60);
			} else if (y==1) { //setting second row of invaders
				this.invaders[numEnemies++] = new Invader(this.images["invader2"], 40 + i * 80 + 24, y * 40 + 60);
			} else if (y==2) { //setting third row of invaders
				this.invaders[numEnemies++] = new Invader(this.images["invader3"], 40 + i * 80 + 24, y * 40 + 60);
			} 
			
		}		
	}
}

Game.prototype.preloader = function() {
	//loading all the images before game starts 
	this.images["hearts"] = new Image();
	this.images["hearts"].src = "images/hearts.gif";
	this.images["invader1"] = new Image();
	this.images["invader1"].src = "images/enemy1.jpg";
	this.images["invader2"] = new Image();
	this.images["invader2"].src = "images/enemy2.png";
	this.images["invader3"] = new Image();
	this.images["invader3"].src = "images/enemy3.png";
	this.images["player"] = new Image();
	this.images["player"].src = "images/player.jpg";
}

Game.prototype.keyBind = function() {
    $(document).keydown(function(e) {
        var numKey = e.numKey || e.which;
        if (numKey == 37) { //left key is pressed
        	leftKey = true;
            rightKey = false;
        } else if (numKey == 39) { //right key is pressed 
        	rightKey = true;
            leftKey = false;
        } else if (numKey == 38) { //up key is pressed
        	upKey = true;
        }
    })

    $(document).keyup(function(e) {
        var numKey = e.numKey || e.which;
        if (numKey == 37) {
            leftKey = false;
        } else if (numKey == 39) {
        	rightKey = false;
        } else if (numKey == 38) {
        	upKey = false;
        }
    })
}

Game.prototype.redraw = function() {
	this.canvas.width = this.canvas.width;
	this.player.draw(this.ctx);
	
	for (var i = 0; i < this.invaders.length; i++) {	
		if (game.invaders[i].dead == true) {
			continue;				
		}
		this.invaders[i].draw(this.ctx);
	}
	
	for (var i=0; i < this.missiles.length ; i++) {
		this.missiles[i].draw(this.ctx);
	}
		
	// Draw score on canvas
	this.ctx.fillStyle="yellow";
	this.ctx.font="30px normal";
	this.ctx.fillText("Score: " + this.score, 50, 35);
	
	this.ctx.fillStyle="yellow";
	this.ctx.font="30px normal"
	this.ctx.fillText("Level: " + this.level, 400, 40);
	
	this.ctx.fillStyle="yellow";
	this.ctx.font="30px"
	this.ctx.fillText("Lives: ", 700, 40);
}
	
Game.prototype.updateDie = function() {
	this.missiles = [];
	this.invaders = [];

	this.ctx.fillStyle="red";
	this.ctx.font="80px normal";
	this.ctx.fillText("DEFEAT", 270, 300);
	this.ctx.font="30px normal";
	this.ctx.fillStyle="yellow";
	this.ctx.fillText("Your total score: " + this.score, 320, 350);
	this.ctx.fillText("Your level: " + this.level, 320, 400);
}

Game.prototype.updateWin = function() {
	this.missiles = [];
	this.invaders = [];

	this.ctx.fillStyle="white";
	this.ctx.font="80px normal";
	this.ctx.fillText("VICTORY", 250, 300);
	
	this.ctx.fillStyle="yellow";
	this.ctx.font="30px normal";
	this.ctx.fillText("Your total score: " + this.score, 320, 350);
	
	this.ctx.fillStyle="yellow";
	this.ctx.font="30px normal";
	this.ctx.fillText("Your level: " + this.level, 320, 400);
	
}

Game.prototype.play = function() {
	this.player.update();
	
	if (leftKey) { 
		this.player.moveLeft();
	} else if (rightKey) {
		this.player.moveRight();
	} else if (upKey) {
		this.player.fire();
	}
		
	for (var i = 0; i < this.invaders.length; i++) {
		invader = this.invaders[i]
		invader.update();
	}

	for (var i = 0; i < this.missiles.length; i++) {
		missile = this.missiles[i];
		missile.update();
		
		// remove missiles if they move out of the boundary
		if (missile.y > 640) {
			this.missiles.splice(i--, 1);
		}
	}
	this.redraw();
}

Game.prototype.levelUp = function() {
	// increase the speed of invader, player and missiles
	this.invaders = [];
	this.bonusScore += 1;
	this.invaderSpeed = 0.5;
	this.missiles = [];
	this.level += 1;
	this.invaderSpeed = 0.5 + (0.2 * this.level);
	chance += 0.0005;
	
	var numEnemies = 0;
	
	for (var i = 0; i < 8; i++) {
		for (var y = 0; y < 3; y++) {
			if (y == 0) { //setting first row of invaders
				this.invaders[numEnemies++] = new Invader(this.images["invader1"], 40 + i * 80 + 24, y * 40 + 60);
			} else if (y==1) { //setting second row of invaders
				this.invaders[numEnemies++] = new Invader(this.images["invader2"], 40 + i * 80 + 24, y * 40 + 60);
			} else if (y==2) { //setting third row of invaders
				this.invaders[numEnemies++] = new Invader(this.images["invader3"], 40 + i * 80 + 24, y * 40 + 60);
			} 
			
		}		
	}
}

Game.prototype.update = function() {
    //checking status within given interval to be executed game
    if (game.status == "pause") {   
    } else if (game.status == "dead") {
        game.updateDie();
    } else if (game.status == "playing") {
        game.play();
    } else if (game.status == "win") {
    	game.updateWin();
    }
}
