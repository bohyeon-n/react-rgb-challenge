import React from "react";

const {Provider, Consumer} = React.createContext()
class GameProvider extends React.Component {
  randomColorCode = () => {
    return `rgb(${this.randomNumber()}, ${this.randomNumber()}, ${this.randomNumber()})`;
  };
  randomNumber = () => {
    return Math.floor(Math.random() * 256);
  };
  state = {
    page: "main",
    modal: false,
    score: 0,
    answerCode: Math.floor(Math.random() * 3),
    colorCodes: [
      this.randomColorCode(),
      this.randomColorCode(),
      this.randomColorCode()
    ]
  };
  changePage = page => {
    this.setState({
      page: page,
      modal: !this.state.modal
    });
  };
  incScore = () => {
    this.setState({
      score: this.state.score + 1
    });
    this.changePage("main");
    this.changeColorCodes();
  };
  resetScore = () => {
    this.setState({
      score: 0
    });
    this.changePage("main");
    this.changeColorCodes();
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
      page: this.state.page,
      changePage: this.changePage,
      modal: this.state.modal,
      score: this.state.score,
      incScore: this.incScore,
      resetScore: this.resetScore,
      answerCode: this.state.answerCode,
      colorCodes: this.state.colorCodes,
      changeColorCodes: this.changeColorCodes
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export {GameProvider, Consumer as GameConsumer}