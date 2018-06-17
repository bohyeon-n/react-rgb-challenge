import React from "react";
import ScoreComponent from "../components/ScoreComponent";
import { ScoreConsumer } from "../contexts/ScoreContext";
import { PageConsumer } from "../contexts/PageContext";
export default class WrongPage extends React.Component {
  render() {
    return (
      <ScoreConsumer>
        {scoreValue => (
          <PageConsumer>
            {pageValue => (
              <div
                className={
                  pageValue.modal && pageValue.page === "wrong"
                    ? "modal show"
                    : "modal"
                }
              >
                <div>Too bad :(</div>
                <ScoreComponent />
                <button className='close' onClick={e => scoreValue.handleResetScore()}>
                  play again
                </button>
              </div>
            )}
          </PageConsumer>
        )}
      </ScoreConsumer>
    );
  }
}
