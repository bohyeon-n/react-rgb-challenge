import React from "react";
import { GameConsumer } from "../contexts/GameContext";

export default class AnswerCode extends React.Component {
  render() {
    return (
      <GameConsumer>
        {({ colorCodes, answerCode}) => (
          <div className="color-code">{colorCodes[answerCode]}</div>
        )}
      </GameConsumer>
    );
  }
}
