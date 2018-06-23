import React from "react";
import { GameConsumer } from "../contexts/GameContext";


export default class ScoreComponent extends React.Component {
  render() {
    return (
      <GameConsumer>
        {({ score }) => (
        <div className="score">score: {score}</div>
        )}
      </GameConsumer>
    );
  }
}
