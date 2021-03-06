/*global Phaser*/

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var player;
var platforms;
var stars;
var cursors;
var score;
var scoreText;

function preload() {
    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/star.png');
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);

}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
   game.add.sprite(0,0, 'sky');
   platforms = game.add.group();
   platforms.enableBody = true;
  var ground = platforms.create(0, game.world.height - 64, 'ground');
  ground.scale.setTo(2, 2);
    ground.body.immovable = true;
   
   var ledge = platforms.create(250, 250, 'ground');
  ledge.body.immovable = true
   
      var ledge = platforms.create(50, 50, 'ground');
  ledge.body.immovable = true
 
 player = game.add.sprite(32, game.world.height - 150, 'dude');
 game.physics.arcade.enable(player);
 player.body.bounce.y = 0.3;
 player.body.gravity.y = 300;
 player.body.collideWorldBounds = true;
 player.animations.add('left', [0, 1, 2, 3,], 10, true);
 player.animations.add('right',[5, 6, 7, 8,], 10, true);
 
 
 cursors = game.input.keyboard.createCursorKeys();


    stars = game.add.group();
    
    stars.enableBody = true 
    




}

function update() {
    
    player.body.velocity.x = 0;
    if (cursors.left.isDown){ 
        player.body.velocity.x = -150;
        player.animations.play('left');
        
    }
    else if (cursors.right.isDown){
        player.body.velocity.x = 150;
        player.animations.play('right');
        player.animations.stop();
        player.frame = 4;
    }
    else
    
    
    if (cursors.up.isDown && player.body.touching.down && hitPlatform)
    {
        player.body.velocity.y = 350 
    }
        
        

















        
    }
}
