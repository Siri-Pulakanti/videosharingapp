import { Grid } from "@mui/material";
import { useState } from "react";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: 10 });
  return (
    <Grid
      container
      spacing={3}
      sx={{
        justifyContent: "center",
        minHeight: "100vh",
        padding: 2,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Grid item xs={12} md={10} lg={11}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={12} md={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={12} md={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchItem) {
    const {
      data: { items: videos },
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyBcsBDqlPr0N9cyZZ4v3G68Bu9Ynzv_G9o",
        q: searchItem,
      },
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}

export default App;
