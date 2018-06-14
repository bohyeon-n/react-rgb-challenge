import React from "react";
import { ColorConsumer } from "../contexts/ColorContext";
import { ScoreConsumer } from "../contexts/ScoreContext";
import { PageConsumer } from "../contexts/PageContext";

export default class ColorList extends React.Component {
  render() {
    return (
      <ScoreConsumer>
        {scoreValue => (
          <ColorConsumer>
            {colorValue => (
              <PageConsumer>
                {pageValue => (
                  <div>
                    <div className="answer-box">
                      <div className="color-code">
                        {colorValue.colorCodes[colorValue.answerCode]}
                      </div>
                      <div className="color">
                        {colorValue.colorCodes.map((color, index) => (
                          <div
                            className="box"
                            key={index}
                            style={{ backgroundColor: color }}
                            onClick={e =>
                              colorValue.answerCode === index
                                ? pageValue.changePage("right")
                                : pageValue.changePage("wrong")
                            }
                          >
                            {index}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </PageConsumer>
            )}
          </ColorConsumer>
        )}
      </ScoreConsumer>
    );
  }
}
