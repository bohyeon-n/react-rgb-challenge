import React from "react";
import ColorList from "../components/ColorList";
import ScoreComponent from "../components/ScoreComponent";
import Resultpage from "./ResultPage";
import { PageConsumer } from "../contexts/PageContext";
export default class MainPage extends React.Component {
  render() {
    return (
      <PageConsumer>
        {pageValue =>
          pageValue.page === "main" ? (
            <div>
              <header className="header">
                <span>THE GREAT</span>
                <span>RGB</span>
                <span>GUESSING CHALLENGE</span>
              </header>
              <ScoreComponent />
              <ColorList />
            </div>
          ) : (
            <Resultpage />
          )
        }
      </PageConsumer>
    );
  }
}
