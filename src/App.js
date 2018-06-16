import React from "react";

import "./App.css";
import MainPage from "./pages/MainPage";
import ResultPage from './pages/ResultPage'
import { PageProvider, PageConsumer } from "./contexts/PageContext";
import { ScoreProvider } from "./contexts/ScoreContext";

export default class App extends React.Component {
  render() {
    return (
      <PageProvider>
        <ScoreProvider>
          <PageConsumer>
            {pageValue => (
              pageValue.page === 'main' ? (
                <MainPage/>
              ) : (
                <ResultPage/>
              )
            )}
          </PageConsumer>
        </ScoreProvider>
      </PageProvider>
    );
  }
}
