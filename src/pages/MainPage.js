import React from "react";
import ColorList from "../components/ColorList";
import ScoreComponent from "../components/ScoreComponent";
import RightModal from '../components/RightModal'
import WrongModal from '../components/WrongModal'
import {GameConsumer} from '../contexts/GameContext'
export default class MainPage extends React.Component {
  render() {
    return (
      <GameConsumer>
        {pageValue => (
          <div>
            <header className="header">
              <span>THE GREAT</span>
              <span>RGB</span>
              <span>GUESSING CHALLENGE</span>
            </header>
            <ScoreComponent />
            <div className="color-box">
              <ColorList />
              <RightModal />
              <WrongModal />
            </div>
          </div>
        )}
      </GameConsumer>
    );
  }
}
