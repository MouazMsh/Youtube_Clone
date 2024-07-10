import { Link } from "react-router-dom";
import logo from "../assets/YouTube-Logo.svg";
import VideocamIcon from "@mui/icons-material/Videocam";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Stack } from "@mui/material";

export default function Header() {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        useFlexGap
      >
        <Link to={"/"}>
          <img className="logo" src={logo}></img>
        </Link>
        <Stack className="icon-stack" direction="row" spacing={2}>
          <VideocamIcon />
          <NotificationsNoneIcon />
          <PersonOutlineIcon />
        </Stack>
      </Stack>
    </>
  );
}
