import React from "react";
import ColorItem from './ColorItem'
import AnswerCode from './AnswerCode'

export default class ColorList extends React.Component {

  
  render() {
    return (
      <div>
        <AnswerCode />
        <ColorItem />
      </div>
    
    );
  }
}
