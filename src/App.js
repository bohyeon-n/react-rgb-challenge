import React from "react";

import "./App.css";
import MainPage from "./pages/MainPage";
import ResultPage from "./pages/ResultPage";
import { PageProvider, PageConsumer } from "./contexts/PageContext";
import { ScoreProvider } from "./contexts/ScoreContext";
import { ColorProvider, ColorConsumer } from "./contexts/ColorContext";

export default class App extends React.Component {
  render() {
    return (
      <PageProvider>
        <ColorProvider>
          <PageConsumer>
            {pageValue => (
              <ColorConsumer>
                {colorValue => (
                  <ScoreProvider
                    changePage={pageValue.changePage}
                    changeColorCode={colorValue.changeColorCode}
                  >
                    {pageValue.page === "main" ? <MainPage /> : <ResultPage />}
                  </ScoreProvider>
                )}
              </ColorConsumer>
            )}
          </PageConsumer>
        </ColorProvider>
      </PageProvider>
    );
  }
}
