import React from "react";
import { ScoreConsumer } from "../contexts/ScoreContext";
import { PageConsumer } from "../contexts/PageContext";
export default class RightPage extends React.Component {
  render() {
    return (
      <PageConsumer>
        {pageValue => (
          <ScoreConsumer>
            {scoreValue => (
              <div
                className={
                  pageValue.modal && pageValue.page === "right"
                    ? "modal show"
                    : "modal"
                }
              >
                <div>That's right :)</div>
                <button className='close' onClick={e => scoreValue.handleIncScore()}>
                  next color
                </button>
              </div>
            )}
          </ScoreConsumer>
        )}
      </PageConsumer>
    );
  }
}
