import { Button } from "@mui/material";
import React from "react";
import {
  Home as HomeIcon,
  Whatshot as WhatshotIcon,
  Code as CodeIcon,
  LocalMall as LocalMallIcon,
  MusicNote as MusicNoteIcon,
  MovieCreation as MovieCreationIcon,
  SportsEsports as SportsEsportsIcon,
  Newspaper as NewspaperIcon,
  EmojiEvents as EmojiEventsIcon,
  School as SchoolIcon,
  FitnessCenter as FitnessCenterIcon,
} from "@mui/icons-material";
const categories = [
  { name: "New", icon: <HomeIcon /> },
  { name: "Trending", icon: <WhatshotIcon /> },
  { name: "Coding", icon: <CodeIcon /> },
  { name: "Shopping", icon: <LocalMallIcon /> },
  { name: "Music", icon: <MusicNoteIcon /> },
  { name: "Movies", icon: <MovieCreationIcon /> },
  { name: "Gaming", icon: <SportsEsportsIcon /> },
  { name: "News", icon: <NewspaperIcon /> },
  { name: "Sport", icon: <EmojiEventsIcon /> },
  { name: "Education", icon: <SchoolIcon /> },
  { name: "Gym", icon: <FitnessCenterIcon /> },
];

export default function Sidebar({ setSelectedCategory }) {
  return (
    <>
      {categories.map((category) => {
        return (
          <React.Fragment key={category.name}>
            <Button
              variant="text outlined"
              color="dark"
              startIcon={category.icon}
              onClick={() => {
                setSelectedCategory(category.name);
              }}
            >
              {category.name}
            </Button>
          </React.Fragment>
        );
      })}
    </>
  );
}
