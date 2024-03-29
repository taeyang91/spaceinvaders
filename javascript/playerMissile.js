function PlayerMissile(player) {
    this.width = 5;
    this.height = 15;
    this.speed = 10; 
    this.x = player.x + player.width / 2.5
    this.y = player.y - this.height / 2;
}

PlayerMissile.prototype.update = function() {
    this.y -= this.speed;
    var aliveInvaderCnt = 0;
	
     // check if missile colides with invader
    for (var i = 0; i < game.invaders.length; i++) {
        if (this.collide(game.invaders[i]) && (game.invaders[i].dead == false)) {
            this.y = -100; // remove missile which colides with invader
            game.invaders[i].dead = true; //invader is dead
            game.score += 1 + game.bonusScore;
        }
    }
    
    // Check if all invaders are dead
    for (var i = 0; i < game.invaders.length; i++) {
		if (game.invaders[i].dead == false) { // invader is alive 
			aliveInvaderCnt++;
		}
	}
		
	// move to next level if all invaders are dead	
	if (aliveInvaderCnt == 0) { //no invader is alive
		if (game.level < 3) {
			game.levelUp();
		} else {
			game.status="win"; // win if last level is reached
		}	
	}
}

PlayerMissile.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x+this.width, this.y);
    ctx.lineTo(this.x + this.width, this.y - this.height);
    ctx.lineTo(this.x, this.y - this.height);
    ctx.fillStyle = "white";
    ctx.fill();
}

PlayerMissile.prototype.collide = function(invader) {
	isHorizontalCollision = false;
	isVerticalCollision = false;
	
	// Check the edge of horizontal collision
	if (this.x < invader.x) {
		if (invader.x < this.x + this.width) {
			isHorizontalCollision = true;
		}
	}
	if (this.x < invader.x + invader.width) {
		if (this.x + this.width < this.x + this.width) {
			isHorizontalCollision = true;
		}
	}
	if (invader.x < this.x) {
		if (this.x + this.width < invader.x + invader.width) {
			isHorizontalCollision = true;
		}
	}
	
	// Check the edge of vertical collision
	if (this.y < invader.y) {
		if (invader.y < this.y + this.height) {
			isVerticalCollision = true;
		}
	}
	if (this.y < invader.y + this.height) {
		if (invader.y + invader.height < this.y + this.height) {
			isVerticalCollision = true;
		}
	}
	if (invader.y < this.y){
		if (this.y + this.height < invader.y + invader.height) {
			isVerticalCollision = true;
		}
	}
	
	return isHorizontalCollision && isVerticalCollision;
}