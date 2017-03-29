import React from 'react';
import ReactDOM from 'react-dom';

class flappyPreda extends React.Component {
  constructor(props) {
    super(props);
    console.log('FLAPPY PROPS', props)
  }


  render() {

          // Create our 'main' state that will contain the game
    var mainState = {
      preload: function() {
          // This function will be executed at the beginning
          // That's where we load the images and sounds
          game.load.image('bird', 'assets/frogger.png');

          game.load.image('pipe', 'assets/pipe.png');
      },

      create: function() {
          // This function is called after the preload function
          // Here we set up the game, display sprites, etc.
          game.stage.backgroundColor = '#71c5cf';

          // Set the physics system
          game.physics.startSystem(Phaser.Physics.ARCADE);

          // Display the bird at the position x=100 and y=245
          this.bird = game.add.sprite(100, 245, 'bird');

          // Add physics to the bird
          // Needed for: movements, gravity, collisions, etc.
          game.physics.arcade.enable(this.bird);

          // Add gravity to the bird to make it fall
          this.bird.body.gravity.y = 500;

          // Call the 'jump' function when the spacekey is hit
          var spaceKey = game.input.keyboard.addKey(
                          Phaser.Keyboard.SPACEBAR);
          spaceKey.onDown.add(this.jump, this);

          //create an empty group
          this.pipes = game.add.group();

          //pipe timer set to 1500
          this.timer = game.time.events.loop(2000, this.addRowOfPipes, this);

          //score keeper
          this.score = 0;

          this.labelScore = game.add.text(20, 20, "0",
            {font:"30px Arial", fill: "#ffffff"});


      },

      addOnePipe: function(x, y) {
        //create pipe @ x, y
        var pipe = game.add.sprite(x, y, 'pipe');

        // add pipe to group
        this.pipes.add(pipe);

        //enable physics on pipe
        game.physics.arcade.enable(pipe);

        //add velocity to move pipe left
        //default -200
        pipe.body.velocity.x = -200;

        //kill pipe when not visable
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;

      },

      addRowOfPipes: function() {
        // Randomly pick a number between 1 and 5
        // This will be the hole position
        var hole = Math.floor(Math.random() * 5) + 1;

        // Add the 6 pipes
        // With one big hole at position 'hole' and 'hole + 1'
        for (var i = 0; i < 8; i++)
          if (i !== hole && i !== hole + 1)
            this.addOnePipe(1000, i * 60 + 10);

        //add to score
        this.score += 1;

        this.labelScore.text = this.score;
      },

      update: function() {
          // This function is called 60 times per second
          // It contains the game's logic
          if (this.bird.y < 0 || this.bird.y > 490) {
            this.restartGame();
          }

          game.physics.arcade.overlap(
            this.bird, this.pipes, this.restartGame, null, this);
      },

      jump: function() {
        //jump set to -350
        this.bird.body.velocity.y = -150;
      },

      restartGame: function() {
        game.state.start('main');
      }
    };

    // Initialize Phaser, and create a 400px by 490px game
    var game = new Phaser.Game(1000, 490);

    // Add the 'mainState' and call it 'main'
    game.state.add('main', mainState);

    // Start the state to actually start the game
    game.state.start('main');

    return (
      <div>
        Hello World 2
      </div>
      )
  }
}


export default flappyPreda;