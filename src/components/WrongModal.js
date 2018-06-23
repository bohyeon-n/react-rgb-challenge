import React from "react";
import ScoreComponent from './ScoreComponent'
import { GameConsumer } from "../contexts/GameContext";
import classnames from 'classnames'
export default class WrongModal extends React.Component {
  render() {
    return (
      <GameConsumer>
        {({ modal, page, resetScore }) => (
          <div className={classnames('modal', {show: modal && page === 'wrong'})}>
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
