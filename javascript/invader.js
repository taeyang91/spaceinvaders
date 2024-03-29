function Invader(img, x, y) {
    this.img = img;
    this.width = img.width;
    this.height = img.height;
    this.x = x;
    this.y = y;
    this.dead = false;
	
}

Invader.prototype.draw = function(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}

Invader.prototype.update = function(ctx) {
    if (this.dead == true) {
        return
    } else {
    	if (Math.random() < 0.0005) { // invaders fire missiles randomly
        	game.missiles[game.missiles.length] = new InvaderMissile(this);
    	}
    
   	 // downward invaders if they hit left boundary
    	if (this.x + game.invaderSpeed < 0 ) {
		  this.moveDown(true);
	 // downward invaders if they hit right boundary
   	} else if (this.x + this.width + game.invaderSpeed > game.width) {
    		this.moveDown(true);
    	}
    	this.x += game.invaderSpeed;
    }
}

Invader.prototype.moveDown = function(bool) {
    this.y += this.height;
   
    if (bool == true) {
    	game.invaderSpeed = -1 * game.invaderSpeed * 1.1; // increase speed of invaders when they hit the boundary
    	
	for (var i = 0; i < game.invaders.length; i++) {
            if (game.invaders[i] == this) {
                continue;
            }
            
            // game is over when invaders hit the ground  
            if (this.y >= game.player.y - 80) {
    		game.status = "dead";
	    }
            game.invaders[i].moveDown();	
        }
    }    
}

