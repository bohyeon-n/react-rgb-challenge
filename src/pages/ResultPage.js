import React from "react";
import { ScoreConsumer } from "../contexts/ScoreContext";
import { ColorConsumer } from "../contexts/ColorContext";
import { PageConsumer } from "../contexts/PageContext";

export default class ResultPage extends React.Component {
  render() {
    return (
      <PageConsumer>
        {pageValue => (
          <ScoreConsumer>
            {scoreValue => (
              <ColorConsumer>
                {colorValue => 
                pageValue.page === 'right' ? (
                  <div>
                    <div>that's right</div>
                    <button onClick={e => scoreValue.updateScore('right')}>next color</button>

                  </div>
                ) : (
                  <div>
                  <div>too bad</div>
                  <div>score: {scoreValue.score}</div>
                  <button onClick={e => scoreValue.updateScore('wrong')}>play again</button>
                  </div>  
                )
                }
              </ColorConsumer>
            )}
          </ScoreConsumer>
        )}
      </PageConsumer>
    );
  }
}
