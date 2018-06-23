import React from "react";
import { GameConsumer } from "../contexts/GameContext";

export default class ColorItem extends React.Component {
  state = {
    selectedColor: null
  };
  handleClickColor = (index, answerCode, changePage) => {
    this.setState({
      selectedColor: index
    });
    if (index === answerCode) {
      changePage("right");
    } else {
      changePage("wrong");
    }
  };

  render() {
    return (
      <GameConsumer>
        {({ colorCodes, modal, answerCode, changePage }) => (
          <div className="color">
            {colorCodes.map((color, index) => (
              <div
                key={index}
                className={
                  modal && index === this.state.selectedColor
                    ? "box large"
                    : "box"
                }
                style={{ backgroundColor: color }}
                onClick={e =>
                  this.handleClickColor(index, answerCode, changePage)
                }
              />
            ))}
          </div>
        )}
      </GameConsumer>
    );
  }
}
