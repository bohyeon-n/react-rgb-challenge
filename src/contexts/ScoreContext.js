import React from "react";

const { Provider, Consumer } = React.createContext();

class ScoreProvider extends React.Component {
  state = {
    score: 0
  };
  incScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  };
  resetScore = () => {
    this.setState({
      score: 0
    });
  };
  updateScore = status => {
    status === "right" ? this.incScore() : this.resetScore();
    this.props.changeColorCode();
    this.props.changePage("main");
  };
  render() {
    const value = {
      score: this.state.score,
      updateScore: this.updateScore
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { ScoreProvider, Consumer as ScoreConsumer };
