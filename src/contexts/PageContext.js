import React from "react";

const { Provider, Consumer } = React.createContext();

class PageProvider extends React.Component {
  state = {
    page: "main",
    modal: false
  };
  changePage = page => {
    this.setState({
      page: page
    });
  };
  changeModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }
  render() {
    const value = {
      page: this.state.page,
      modal: this.state.modal,
      changePage: this.changePage,
      changeModal: this.changeModal
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { PageProvider, Consumer as PageConsumer };
