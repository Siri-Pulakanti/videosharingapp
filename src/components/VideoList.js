import { Grid, Paper, Typography } from "@mui/material";
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
    <Paper elevation={3} sx={{ padding: 2, maxHeight: 600, overflowY: "auto" }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
        Up next
      </Typography>
      <Grid container spacing={1}>
        {listOfVideos}
      </Grid>
    </Paper>
  );
};

export default VideoList;
