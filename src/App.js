import React from "react";

import "./App.css";
import MainPage from "./pages/MainPage";
import {GameProvider} from './contexts/GameContext'

export default class App extends React.Component {
  render() {
    return (
      <GameProvider>
        <MainPage />
      </GameProvider>
    );
  }
}
