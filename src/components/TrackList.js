import { Button, Container } from "@mui/material";
import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";

function TrackList() {
  //  const TrackList = () => {
  const { trackList, playTrack } = useMusicPlayer();

  return (
    <div className="track-list">
      {trackList.map((track, index) => (
        <Container>
          <Button
            className="strack-btn"
            key={index}
            onClick={() => playTrack(index)}
          >
            <p>🔊 {track.name}</p>
          </Button>
        </Container>
      ))}
    </div>
  );
}

export default TrackList;
