import React, { useState, Suspense, lazy } from "react";
import './video-player.css';

const ReactPlayer = lazy(() => import("react-player"));

const over = {
  overflow: 'hidden'
};

function VideoPlayer({ url, width = "100%", height }) {
  const [playing, setPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  // Calcular width apropiado basado en height si no se proporciona
  const videoWidth = width === "100%" && height ?
    (parseInt(height) * 16/9) + "px" : width;

  const handlePlay = () => {
    setPlaying(true);
    setShowPlayer(true);
  };

  const customPlayButton = (
    <div className="custom-play-overlay">
      <div className="custom-play-button" onClick={handlePlay}>
        <svg viewBox="0 0 24 24" className="play-icon">
          <path d="M8 5v14l11-7z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="video-player-container">
      <Suspense fallback={<div className="video-loading">Loading video...</div>}>
        {!showPlayer ? (
          <div className="video-thumbnail-wrapper" style={{ width: videoWidth, height }}>
            <ReactPlayer
              className="col-md-10 no-scroll real"
              url={url}
              width={videoWidth}
              height={height}
              light={true}
              playing={false}
              controls={false}
              style={{...over, maxWidth: videoWidth, maxHeight: height}}
            />
            {customPlayButton}
          </div>
        ) : (
          <ReactPlayer
            className="col-md-10 no-scroll real"
            url={url}
            width={videoWidth}
            height={height}
            playing={playing}
            controls={true}
            style={{...over, maxWidth: videoWidth, maxHeight: height}}
            playsinline
          />
        )}
      </Suspense>
    </div>
  );

}

export default VideoPlayer;