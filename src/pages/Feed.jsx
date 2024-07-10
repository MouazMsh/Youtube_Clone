import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";
import fetchapi from "../lib/fetchApi";
import { Grid, Stack, Typography } from "@mui/material";

export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const response = async () => {
    const response = await fetchapi(
      `search?part=snippet&rapidapi-key=${
        import.meta.env.VITE_RAPID_API_KEY
      }&q=${selectedCategory}`
    );
    setVideos(response.items);
  };

  useEffect(() => {
    response();
  }, [selectedCategory]);
  return (
    <>
      {/* SideBar Grid */}
      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} md={3} lg={2}>
          <Stack
            direction={{ xs: "row", md: "column" }}
            flexWrap={{ xs: "wrap", md: "nowrap" }}
            justifyContent={{ xs: "space-evenly", md: "center" }}
            alignItems={{ xs: "center", md: "flex-start" }}
            spacing={{ xs: 2, md: 2 }}
          >
            <Sidebar setSelectedCategory={setSelectedCategory} />
          </Stack>
        </Grid>
        {/* Videos Grid */}
        <Grid item xs={12} md={9} lg={10}>
          <Typography
            variant="h4"
            ml={3}
            textAlign={{ xs: "center", md: "left" }}
          >
            {selectedCategory === "New" ? (
              <>
                New{" "}
                <Typography variant="span" sx={{ color: "red" }}>
                  videos
                </Typography>
              </>
            ) : (
              <Typography variant="h4">{selectedCategory}</Typography>
            )}
          </Typography>
          <Videos videos={videos} />
        </Grid>
      </Grid>
    </>
  );
}
