import React from 'react'
import { PageConsumer } from '../contexts/PageContext';
import ResultPage from '../pages/ResultPage'

export default class ColorItem extends React.Component {
  render() {
    const {colorCodes, answerCode} = this.props
    console.log(colorCodes)
    return (
      <PageConsumer>
        {pageValue => (

      <div className="color">
        {colorCodes.map((color, index) => (
          <div 
          key={index} 
          className='box'
          style={{backgroundColor: color}}
          onClick={e => index === answerCode ? (pageValue.changePage('right')) : (pageValue.changePage('wrong'))}
          >
          </div>
        ))}
      </div>




        )}
      </PageConsumer>
    )
  }
}