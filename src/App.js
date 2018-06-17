import React from "react";

import "./App.css";
import MainPage from "./pages/MainPage";
import { PageProvider, PageConsumer } from "./contexts/PageContext";
import { ScoreProvider } from "./contexts/ScoreContext";
import { ColorConsumer, ColorProvider } from "./contexts/ColorContext";

export default class App extends React.Component {
  render() {
    return (
      <ColorProvider>
        <ColorConsumer>
          {colorValue => (
            <PageProvider>
              <PageConsumer>
                {pageValue => (
                  <ScoreProvider
                    updatePage={pageValue.changePage}
                    changeColorCodes={colorValue.changeColorCodes}
                  >
                    <MainPage />
                  </ScoreProvider>
                )}
              </PageConsumer>
            </PageProvider>
          )}
        </ColorConsumer>
      </ColorProvider>
    );
  }
}
