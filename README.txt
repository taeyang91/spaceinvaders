student 1 : Seungkyu Kim(998986904)
student 2 : Taeyang Lee(998326333)

Space Invader Description
	-	Game Size : 900px X 500px
	-	Button : START, PAUSE, HELP
	-	Input Key : Left Arrow( move left ),  Right Arrow ( move right) and Up Arrow ( fire missile )
	-	Player Lives : 3
	-	Number of Invaders : 24 , 3 Rows and 8 Columns
	-	Score : 1 point for 1 invader in level 1 2 points for 1 invader in level 2, 3 points for 1 invader in level 3, score is accumulative.  
	-	Level : player can play up to 3 levels (Max 3 stages)
	-	Player can fire only 1 missile on the screen every time
	-	Game status : Victory and Defeat
	-	Victory: player win the game after the last stage, show score and level
	-	Defeat: player lose when 3 lives are gone, player lose when enemy hits the ground, show score and current level
	-	As invaders move down, their speed and fire chance(from enemy) are increasing 


<Images>
bgBody.gif : background image for body
bgCanvas.jpg : background image for canvas
inavder1.jpg : invader type 1
invader2.png : invader type 2
invader3.png : invader type 3
hearts.gif :  player's life
player.jpg : player
</Images>

<!DOCTYPE html>
<html> 
	//using core.css file for space invader
	//embody START, PAUSE, HELP button by using JQuery
	//calling all the Javascript files
	//some global variables are defined in script block 
</html>		


 <script src='javascript/main.js'></script>
		
	function Game() {
		// initialize basic Game width, height, images, level and canvas
		// initialize invaders positions first
		// take and use left, ri3ght and up key for player.
		// show message as game is over.
	}
		Game.prototype.setup = function() {
			// initializing basic game elements(width, heights, images, level, invaders array, missiles array )
			// initializing canvas
			// initializing game interval
			// setting invaders first, second and third rows.
		}
		Game.protoype.preloader = function() {
			// loading images of player's lives, invaders, player and append to images.
		}
		Game.prototype.keyBind = function(){ 
			// taking right, left and up key busing Jquery
		}
		Game.prototype.redraw = function(){
			// update invaders and missiles on canvas
			// draw Score, Level and Lives on canvas
		}
		Game.prototype.updateDie = function(){
			// showing DEFATE message with Score using canvas as player lost
		}
		Game.prototype.updateWin = function() {
			//showing VICROY message with Score using canvas as player cleaned up lever3 
		}
		Game.prototype.play = function() {
			// taking input from player to move laser cannon
			// update invaders 
			// update invaders missiles
		}
		Game.prototype.levelUp = function() {
			// executed as player kills all the invaders created before
			// increasing invaders, player and missiles speed
			// creating new invaders
		}
		Game.prototype.update = function() {
			//checking game status and execute functions depends on game status
		}

<script src='javascript/invader.js'></script>

	function Invader(img, x, y) {
		// taking invader's image, x and y coordinates as input.
	}

		Invader.prototype.draw = function(ctx) {
			// draw invaders on canvas
		}
		Invader.prototype.update = function(ctx) {
			// checking invaders whether hit by player's missile or not
			// calling moveDown to update new position
			// increasing invader's speed as it goes down
			// invaders fire missiles randomly
		}
		Invader.prototype.moveDown = function(bool) {
			// move invaders down as they hit the left and right boundary
		}
		
<script src='javascript/invaderMissile.js'></script>
	
	function InvaderMissile(invader) {
		// initialize invaderMissile's width, height, and its x and y coordinate.
		// draw and update invader missiles
		// check invaderMissile hit player.
	}

		InvaderMissile.prototype.update = function() {
			// update y coordinate of invader missiles
		}
		InvaderMissile.prototype.draw = function(ctx) {
			// draw invader missiles on canvas
		}
		InvaderMissile.prototype.collide = function(player) {
			// check invader missiles hit player
		}

<script src='javascript/player.js'></script>

	function Player(image) {
		// initialize player image, height, width, lives, fire speed and live
		// update player coordinate, left or right
		// draw player lives on canvas
		// fire player missiles 
	}

		Player.prototype.update = function() {
			// update player missiles on canvas
		}
		Player.prototype.draw = function(ctx) {
			//  draw player 
		}
		Player.prototype.drawLives = function(ctx) {
			// draw player Lives on canvas
		}
		Player.prototype.moveLeft = function() {
			// set left boundary of screen as far as player can move
		}
		Player.prototype.moveRight = function() {
			// set right boundary of screen as far as player can move
		}
		Player.prototype.fire = function() {
			// player fires Missiles
		}

<script src='javascript/playerMissile.js'></script>

	function PlayerMissile(Player) {
		// initializing player missiles width, height, speed and coordintes.
		// update player missiles coordinate after player fires
		// check player missile hit the invaders
	}

		PlayerMissile.prototype.update = function() {
			// update player missile and keep tracking it
		}
		PlayerMissile.prototype.draw = function(ctx) {
			// draw player missile on canvas
		}
		PlayerMissile.prototype.collide = function(invader) {
			// taking invader as input value
			// check player missile hits the invaders horizontally or vertically
			// if it hits, return true
		}

