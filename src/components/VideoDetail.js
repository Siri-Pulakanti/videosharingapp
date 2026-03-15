import { Paper, Typography } from "@mui/material";
import React from "react";

const VideoDetail = ({
  video: {
    id: { videoId },
    snippet: { title, channelTitle, description },
  },
}) => {
  if (!videoId) return <div>Loading...</div>;
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <React.Fragment>
      <Paper
        elevation={6}
        sx={{
          height: "400px",
          marginBottom: 2,
        }}
      >
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
          allowFullScreen
        />
      </Paper>
      <Paper
        elevation={6}
        sx={{
          padding: 2,
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {channelTitle}
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1, lineHeight: 1.6 }}>
          {description}
        </Typography>
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetail;
