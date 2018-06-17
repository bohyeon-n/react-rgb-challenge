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
    this.props.updatePage("main");
    this.props.changeColorCodes();
  };
  resetScore = () => {
    this.setState({
      score: 0
    });
    this.props.updatePage("main");
    this.props.changeColorCodes();
  };
  render() {
    const value = {
      score: this.state.score,
      handleIncScore: this.incScore,
      handleResetScore: this.resetScore
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { ScoreProvider, Consumer as ScoreConsumer };
