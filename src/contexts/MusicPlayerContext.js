import React, { useState } from "react";
import Track1 from "./Track1.mp3";
import Track2 from "./Track2.mp3";
import Track3 from "./Track3.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Đừng yêu",
      file: Track1,
    },
    {
      name: "Tòng Phu",
      file: Track2,
    },
    {
      name: "Em một mình quen rồi",
      file: Track3,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
