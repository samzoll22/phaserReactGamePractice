import React from 'react';
import ReactDOM from 'react-dom';
import PIXI from 'pixi';

class Game extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
      this.updateCanvas();
  }

  updateCanvas() {
      const ctx = this.refs.canvas.getContext('2d');
      ctx.fillRect(0,0,1000, 600)
      var grd = ctx.createLinearGradient(0,0,300,400);
      grd.addColorStop(0, "red");
      grd.addColorStop(1, "white");

      ctx.fillStyle = grd;

      ctx.fillRect(0,0, 600, 5);
      ctx.fillRect(0,100, 600, 5);
      ctx.fillRect(0,200, 600, 5);
      ctx.fillRect(0,300, 600, 5);
      ctx.fillRect(0,400, 600, 5);
      ctx.fillRect(0,500, 600, 5);
      ctx.fillRect(0,600, 605, 5);
      ctx.fillRect(0,0, 5, 600);
      ctx.fillRect(100,0, 5, 600);
      ctx.fillRect(200,0, 5, 600);
      ctx.fillRect(300,0, 5, 600);
      ctx.fillRect(400,0, 5, 600);
      ctx.fillRect(500,0, 5, 600);
      ctx.fillRect(600,0, 5, 605);
  }



  render() {
    return (

      <canvas ref="canvas" width={605} height={600} />


      );
  }
}




export default Game;



  //  //Setup PIXI Canvas in componentDidMount
  //  console.log('PIXI', PIXI);
  //  this.renderer = PIXI.autoDetectRenderer(
  //     window.innerWidth,
  //     window.innerHeight,
  //     {transparent: true},
  //     false
  //   );

  //  // this.refs.gameCanvas.appendChild(this.renderer.view);

  //  // create the root of the scene graph
  //  this.stage = new PIXI.Container();
  //  // this.stage.width = 1366;
  //  // this.stage.height = 768;

  //  this.animate()

  // }

  // animate() {
  //   this.renderer.render(this.stage);
  //   this.frame = requestAnimationFrame(this.animate);
  // }



// import spaceship from './spaceship.jsx';


  // _tick() {
  //   this.renderer.render(this.stage);
  //   requestAnimationFrame(this._tick.bind(this))
  // }


// this.stage = new PIXI.Container();

//     this.renderer = PIXI.autoDetectRenderer(
//       window.innerWidth,
//       window.innerHeight,
//       {transparent: true},
//       false
//     );
//     element.appendChild(this.renderer.view);

//     requestAnimationFrame(this._tick.bind(this))
