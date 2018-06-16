import React from 'react'
import RightPage from './RightPage'
import WrongPage from './WrongPage'
import { PageConsumer } from '../contexts/PageContext';
export default class ResultPage extends React.Component {
  render() {
    return (
      <PageConsumer>
        {pageValue => (
          pageValue.page === 'right' ? (
            <RightPage/>
          ) : (
            <WrongPage/>
          )
        )}
      </PageConsumer>
    )
  }
}