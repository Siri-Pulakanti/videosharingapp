import { Grid } from "@mui/material";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video) => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));
  return (
    <Grid
      container
      spacing={1}
      sx={{
        maxHeight: "600px",
        overflowY: "auto",
      }}
    >
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
