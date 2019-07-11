import React from 'react';
import {
  Container,
  Col,
  Row,
  Badge,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

class GameDisplay extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    let playerID;
    let playerTurnIndicator;
    if (this.props.playerID === '1') {
      playerID = 'You are Player 1';
    } else {
      playerID = 'You are Player 2';
    }

    if (this.props.turn === '1') {
      playerTurnIndicator = 'Your turn!';
    }
    return (
      <Container fluid>
        <Row className="header">
          <Col xs="2" className="game-logo"><h1>Codenames Duet</h1></Col>
          <Col xs="2" className="player-display">
            <Row><h3>{playerID}</h3></Row>
            <Row>
              <div className="player-turn-display" >
                <p>{playerTurnIndicator}</p>
              </div>
            </Row>
          </Col>
          <Col xs="6" className="key-card">
            <Row><h3>Key Card</h3></Row>
            <Row>
              <div className="" >
                *Generated Key Card*
              </div>
            </Row>
          </Col>
          <Col xs="2" className="player-display">
            <Row><h3>{playerID}</h3></Row>
            <Row>
              <div className="player-turn-display" >
                <p>{playerTurnIndicator}</p>
              </div>
            </Row>
          </Col>
        </Row>
        <Row className="game-area">
          <Col xs="2" className="stats-area">
            <div>
              Current Game Info
            </div>
            <div>
              <div><h3>Clue & Number</h3></div>
              <div>*Display*<Badge color="success">2</Badge></div>
            </div>
            <div>
              <div>Turns Remaining: <Badge color="warning">9</Badge></div>
              <div>Agents Remaining: <Badge color="success">16</Badge></div>
            </div>
          </Col>
          <Col xs="10" className="gameboard">Game Board</Col>
        </Row>
        <Row className="message-area">
          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="clueInput" className="mr-sm-2">Clue</Label>
              <Input type="text" name="clue" id="clueInput" placeholder="Your clue here" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="numberInput" className="mr-sm-2">Number</Label>
              <Input type="number" name="number" id="numberInput" placeholder="Your number here" />
            </FormGroup>
            <Button>Submit Clue & Number</Button>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default GameDisplay;
