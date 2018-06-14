import React from "react";
import ColorList from "../components/ColorList";
import ScoreComponent from "../components/ScoreComponent";
export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <span>THE GREAT</span>
          <span>RGB</span>
          <span>GUESSING CHALLENGE</span>
        </header>
        <ScoreComponent />
        <ColorList />
      </div>
    );
  }
}
