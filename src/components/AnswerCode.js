import React from "react";
import { ColorConsumer } from "../contexts/ColorContext";

export default class AnswerCode extends React.Component {
  render() {
    return (
      <ColorConsumer>
        {colorValue => (
          <div className="color-code">
            {colorValue.colorCodes[colorValue.answerCode]}
          </div>
        )}
      </ColorConsumer>
    );
  }
}
