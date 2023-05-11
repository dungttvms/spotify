import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";

function Header() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <div className="header">
      <p>Playing: {currentTrackName}</p>
    </div>
  );
}

export default Header;
