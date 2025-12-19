import React, { useState } from "react";
import './video-player.css';

function VideoPlayer({ url, width = "100%", height }) {
  const getYoutubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYoutubeId(url);

  // Calcular width apropiado basado en height si no se proporciona
  const videoWidth = width === "100%" && height ?
    (parseInt(height) * 16 / 9) + "px" : width;

  if (!videoId) {
    return <div className="video-error">Invalid Video URL</div>;
  }

  return (
    <div className="video-player-container" style={{ width: videoWidth, height: height }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ borderRadius: '8px' }}
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
