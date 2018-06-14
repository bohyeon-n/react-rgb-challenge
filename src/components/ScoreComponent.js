import React from 'react'
import { ScoreConsumer } from '../contexts/ScoreContext';

export default class ScoreComponent extends React.Component {
  render() {
    return (
    <ScoreConsumer>
      {
        value => (
          <div>
          score: {value.score}
          </div>
        )
      }
    </ScoreConsumer>
    )
  }
}