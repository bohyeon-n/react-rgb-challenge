import React from "react";
import { PageConsumer} from "../contexts/PageContext";
import { ColorConsumer } from "../contexts/ColorContext";

export default class ColorItem extends React.Component {
  state = {
    selectedColor: null
  };
  handleClickColor = (index, answerCode, func1) => {
    this.setState({
      selectedColor: index
    });
    if (index === answerCode) {
      func1("right");
    } else {
      func1("wrong");
    }
  };

  render() {
    return (
      <ColorConsumer>
        {colorValue => (
          <PageConsumer>
            {pageValue => (
              <div className="color">
                {colorValue.colorCodes.map((color, index) => (
                  <div
                    key={index}
                    className={
                      pageValue.modal && index === this.state.selectedColor
                        ? "box large"
                        : "box"
                    }
                    style={{ backgroundColor: color }}
                    onClick={e =>
                      this.handleClickColor(
                        index,
                        colorValue.answerCode,
                        pageValue.changePage
                      )
                    }
                  />
                ))}
              </div>
            )}
          </PageConsumer>
        )}
      </ColorConsumer>
    );
  }
}
