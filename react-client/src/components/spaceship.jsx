import React from 'react';

class Spaceship extends React.Component {
  constructor(props) {
    super(props);
      this._game = game;
      this._body = PIXI.Sprite.fromImage( 'http://img.clipartall.com/space-ship-clipart-clipart-spaceship-299_288.png' );
      this._body.position.x = x;
      this._body.position.y = y;
      this._body.anchor.x = 0.5;
      this._body.anchor.y = 0.5;
      this._game.stage.addChild( this._body );

  }
}

export default Spaceship;