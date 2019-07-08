import React from 'react';
import {
  Container,
  Col,
  Row
} from 'reactstrap';

class GameDisplay extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Container>
        <Row className="header">
          <Col xs="2" className="game-logo">Game Logo</Col>
          <Col xs="2" className="player-display">Player 1 Display</Col>
          <Col xs="6" className="answer-key">Answer Key</Col>
          <Col xs="2" className="player-display">Player 2 Display</Col>
        </Row>
        <Row className="game-area">
          <Col xs="2" className="stats-area">Game Stats</Col>
          <Col xs="10" className="gameboard">Game Board</Col>
        </Row>
        <Row className="message-area">Message Area</Row>
      </Container>
    );
  }
}

export default GameDisplay;