import React from "react";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import Controller from "./components/Controller";
import TrackList from "./components/TrackList";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <Header />
        <TrackList />
        <Controller />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
