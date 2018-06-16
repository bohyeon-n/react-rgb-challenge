import React from "react";
import ColorItem from './ColorItem'
import AnswerCode from './AnswerCode'

export default class ColorList extends React.Component {
  randomColorCode = () => {
    return `rgb(${this.randomNumber()}, ${this.randomNumber()}, ${this.randomNumber()})`;
  };
  randomNumber = () => {
    return Math.floor(Math.random() * 256);
  };
  state = {
    answerCode: Math.floor(Math.random() * 3),
    colorCodes: [
      this.randomColorCode(),
      this.randomColorCode(),
      this.randomColorCode()
    ]
  };

  changeColorCode = () => {
    this.setState({
      answerCode: Math.floor(Math.random() * 3),
      colorCodes: [
        this.randomColorCode(),
        this.randomColorCode(),
        this.randomColorCode()
      ]
    });
  };

  render() {
    const {colorCodes, answerCode} = this.state
    return (
      <div>
        <AnswerCode colorCodes={colorCodes} answerCode={answerCode} />
        <ColorItem colorCodes={colorCodes} answerCode={answerCode}/>
      </div>
    );
  }
}
