import React from "react";

const { Provider, Consumer } = React.createContext();

class ColorProvider extends React.Component {
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

  changeColorCodes = () => {
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
    const value = {
      answerCode: this.state.answerCode,
      colorCodes: this.state.colorCodes,
      changeColorCodes: this.changeColorCodes
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { ColorProvider, Consumer as ColorConsumer };
