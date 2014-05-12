function Player(image) {
	this.image = image;
	this.height = image.height;
	this.width = image.width;
	this.x = game.canvas.width / 2;
	this.y = game.canvas.height - this.height;
	this.lives = 3;
	this.speed = 7;
	this.missiles = [];	
}

Player.prototype.update = function() {
    for (var i = 0; i < this.missiles.length; i++) {
        this.missiles[i].update();
        
        if (this.missiles[i].y + this.missiles[i].height < 0) { // remove missile as it is out of canvas
            game.player.missiles.splice(i--, 1);
        }
    }
}

Player.prototype.draw = function(ctx) {
    ctx.drawImage(this.image, this.x, this.y);
    this.drawLives(ctx);
    
    for (var i=0; i < this.missiles.length; i++) {
    	missile = this.missiles[i]
    	missile.draw(ctx)
    }
    
}

Player.prototype.drawLives = function(ctx) {
	var heart = game.images["hearts"];
	
	for (var i = 0; i < this.lives; i++) {
		ctx.drawImage(heart, 800  + i * (heart.width+10 + 5), 20, heart.width + 10, heart.height + 10);
	}
	
}

Player.prototype.fire = function() {
	if (this.missiles.length < 1) { // fires only one at a time
		this.missiles[0] = new PlayerMissile(this);
	}
}

Player.prototype.moveLeft = function() {
	// setting left boundary of screen where the player can move
	if (this.x > 0) {
		this.x = this.x - this.speed;
	} 
}

Player.prototype.moveRight = function() {
	// setting right boundary of screen where the player can move
	if (this.x < game.width - this.width) {
		this.x = this.x + this.speed;
	}
}

