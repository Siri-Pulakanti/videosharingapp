import { Grid, Paper, Typography } from "@mui/material";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          padding: 1,
          transition: "background-color 0.2s",
          "&:hover": {
            backgroundColor: "action.hover",
          },
        }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{
            width: "120px",
            height: "90px",
            objectFit: "cover",
            marginRight: "15px",
            borderRadius: "4px",
          }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <div>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {video.snippet.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {video.snippet.channelTitle}
          </Typography>
        </div>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
