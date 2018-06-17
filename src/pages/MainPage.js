import React from "react";
import ColorList from "../components/ColorList";
import ScoreComponent from "../components/ScoreComponent";
import RightPage from "./RightPage";
import WrongPage from "./WrongPage";
import { PageConsumer } from "../contexts/PageContext";
export default class MainPage extends React.Component {
  render() {
    return (
      <PageConsumer>
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
              <RightPage />
              <WrongPage />
            </div>
          </div>
        )}
      </PageConsumer>
    );
  }
}
