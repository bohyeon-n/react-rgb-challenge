import React from "react";
import classnames from 'classnames'
import { GameConsumer } from "../contexts/GameContext";
export default class RightModal extends React.Component {
  render() {
    return (
      <GameConsumer>
        {({ modal, page, incScore }) => (
          <div className={classnames('modal',{show: modal && page === 'right'})}>
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
