import React from "react";

import { GameConsumer } from "../contexts/GameContext";
export default class RightModal extends React.Component {
  render() {
    return (
      <GameConsumer>
        {({ modal, page, incScore }) => (
          <div className={modal && page === "right" ? "modal show" : "modal"}>
            <div>That's right :)</div>
            <button className="close" onClick={e => incScore()}>
              next color
            </button>
          </div>
        )}
      </GameConsumer>
    );
  }
}
