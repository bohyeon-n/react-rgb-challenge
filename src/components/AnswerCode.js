import React from 'react'

export default class AnswerCode extends React.Component {
  render() {
    const {colorCodes, answerCode} = this.props
    return (
      <div className="color-code">
      {colorCodes[answerCode]}
    </div>
    )
  }
  
}