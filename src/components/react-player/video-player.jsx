import ReactPlayer from "react-player";


const over = {
  overflow: 'hidden'
};

function VideoPlayer({ url, width, height }) {
  return (
    <ReactPlayer
      className="col-md-10 no-scroll"
      url={url}
      width={width}
      height={height}
      light
      style={over}
      playsinline
    />
  );

}

export default VideoPlayer;