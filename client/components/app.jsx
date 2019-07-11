import React from 'react';
import Lobby from './lobby';
import GameDisplay from './game-display';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'gameDisplay',
      player: '1',
      turn: '1'
    };
    this.setView = this.setView.bind(this);
  }

  setView(name) {
    this.setState({ view: name });
  }

  render() {
    let viewPage;
    if (this.state.view === 'lobby') {
      viewPage = <Lobby />;
    } else if (this.state.view === 'gameDisplay') {
      viewPage = <GameDisplay playerID={this.state.player} turn={this.state.turn} />;
    }

    return <div>{viewPage}</div>;
  }
}
