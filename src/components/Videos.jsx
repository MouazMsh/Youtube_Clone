import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Videos({ videos }) {
  return (
    <>
      <Grid container spacing={2} mt={2}>
        {videos.length === 0 || videos === null ? (
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            style={{ height: "100vh" }}
          >
            <Typography variant="h4">Loading &nbsp;</Typography>
            <CircularProgress />
          </Grid>
        ) : (
          videos.map((video, index) => {
            return (
              <Grid
                container
                item
                xs={12}
                sm={6}
                md={4}
                p={2}
                key={index}
                justifyContent={{ xs: "center" }}
              >
                <Link
                  to={`/video/${video.id.videoId}`}
                  style={{ textDecoration: "none" }}
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
              </Grid>
            );
          })
        )}
      </Grid>
    </>
  );
}
