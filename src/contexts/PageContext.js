import React from "react";

const { Provider, Consumer } = React.createContext();

class PageProvider extends React.Component {
  state = {
    page: "main"
  };
  changePage = page => {
    this.setState({
      page: page
    });
  };
  render() {
    const value = {
      page: this.state.page,
      changePage: this.changePage
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { PageProvider, Consumer as PageConsumer };
