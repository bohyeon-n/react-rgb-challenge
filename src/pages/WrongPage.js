import React from 'react'
import ScoreComponent from '../components/ScoreComponent'
export default class WrongPage extends React.Component {
  render() {
    return ( 
      <div>
      <div>too bad</div>
      <ScoreComponent />
      <button>
        play again
      </button>
    </div>
    )
  }
}