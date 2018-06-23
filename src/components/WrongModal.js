import React from "react";
import ScoreComponent from './ScoreComponent'
import { GameConsumer } from "../contexts/GameContext";

export default class WrongModal extends React.Component {
  render() {
    return (
      <GameConsumer>
        {({ modal, page, resetScore }) => (
          <div className={modal && page === "wrong" ? "modal show" : "modal"}>
            <div>Too bad :(</div>
            <ScoreComponent />
            <button className="close" onClick={e => resetScore()}>
              play again
            </button>
          </div>
        )}
      </GameConsumer>
    );
  }
}
