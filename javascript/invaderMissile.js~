function InvaderMissile(invader) {
    this.width = 3;
	this.height = 15;
	this.x = invader.x + invader.width / 2.5;
	this.y = invader.y + this.height / 2.5;
	this.speed = 1.5;
}

InvaderMissile.prototype.update = function() {
    this.y += this.speed;
    
    if (this.collide(game.player)) {
        game.player.lives -= 1;
        game.missiles =[];
    
        if (game.player.lives == 0) {
        	game.status = "dead";
        } 
    }
}

InvaderMissile.prototype.draw = function(ctx) { 
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y + this.height);
    ctx.lineTo(this.x + this.width, this.y + this.height);
    ctx.lineTo(this.x + this.width, this.y);
    ctx.fillStyle = "red";
    ctx.fill();
}

InvaderMissile.prototype.collide = function(player) {
	isHorizontalCollision = false;
	isVerticalCollision = false;
	
	// Check the edge of horizontal collision
	if (this.x < player.x) {
		if (player.x < this.x + this.width) {
			isHorizontalCollision = true;
		}
	}
	if (this.x < player.x + player.width) {
		if (this.x + this.width < this.x + this.width) {
			isHorizontalCollision = true;
		}
	}
	if (player.x < this.x) {
		if (this.x + this.width < player.x + player.width) {
			isHorizontalCollision = true;
		}
	}
	
	// Check the edge of vertical collision
	if (this.y < player.y) {
		if (player.y < this.y + this.height) {
			isVerticalCollision = true;
		}
	}
	if (this.y < player.y + this.height) {
		if (player.y + player.height < this.y + this.height) {
			isVerticalCollision = true;
		}
	}
	if (player.y < this.y){
		if (this.y + this.height < player.y + player.height) {
			isVerticalCollision = true;
		}
	}
	
	return isHorizontalCollision && isVerticalCollision;
}