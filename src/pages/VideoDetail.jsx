import { useEffect, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import fetchapi from "../lib/fetchApi";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

export default function VideoDetail() {
  const [videos, setVideos] = useState([]);
  const [videoDetail, setVideoDetail] = useState({});
  const { id } = useParams();

  const response = async () => {
    const response = await fetchapi(`videos?part=snippet,statistics&id=${id}`);
    const responseRelated = await fetchapi(
      `search?part=snippet&relatedToVideoId=${id}&type=video`
    );
    setVideoDetail(response.items[0]);
    setVideos(responseRelated.items);
  };

  useEffect(() => {
    response();
  }, [id]);
  return (
    <>
      <Grid container mt={2}>
        {!videoDetail || !videoDetail.snippet ? (
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            style={{ height: "100vh" }}
          >
            <Typography variant="h4">Loading &nbsp; </Typography>
            <CircularProgress />
          </Grid>
        ) : (
          <>
            {/*  video player */}
            <Grid item xs={12} md={9}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${id}`}
                ></ReactPlayer>
              </Box>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                mt={1}
                mb={2}
              >
                <Typography variant="h6" component="div" color="#002884">
                  {videoDetail.snippet.title}
                </Typography>
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" color="text.secondary">
                    {videoDetail.snippet.channelTitle}
                  </Typography>
                  <CheckCircleOutlineIcon fontSize="small" sx={{ ml: 0.5 }} />
                </Box>
                <Box display="flex" alignItems="center" color="#2196f3">
                  <Typography variant="body">
                    {parseInt(
                      videoDetail.statistics.viewCount
                    ).toLocaleString()}
                    &nbsp;Views&nbsp;&nbsp;
                  </Typography>
                  <Typography variant="body">
                    {parseInt(
                      videoDetail.statistics.likeCount
                    ).toLocaleString()}
                    &nbsp;Likes
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            {/*  Suggested videos */}
            <Grid item xs={12} md={3}>
              <Typography
                variant="h4"
                color="red"
                mb={2}
                textAlign={{ xs: "center", md: "left" }}
              >
                Suggested Videos
              </Typography>
              <Stack
                direction={{ xs: "row", md: "column" }}
                flexWrap={{ xs: "wrap", md: "nowrap" }}
                justifyContent="center"
                alignItems={{ xs: "center", md: "flex-start" }}
                spacing={2}
              >
                {videos.map((video, index) => {
                  return (
                    <Link
                      to={`/video/${video.id.videoId}`}
                      style={{ textDecoration: "none" }}
                      key={index}
                    >
                      <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                          component="img"
                          height="180"
                          src={video.snippet.thumbnails.medium.url}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {video.snippet.title.slice(0, 60)}
                          </Typography>
                          <Box display="flex" alignItems="center">
                            <Typography variant="body2" color="text.secondary">
                              {video.snippet.channelTitle}
                            </Typography>
                            <CheckCircleOutlineIcon
                              fontSize="small"
                              sx={{ ml: 0.5 }}
                            />
                          </Box>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </Stack>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}
