/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import FormatListBulletedSharpIcon from "@mui/icons-material/FormatListBulletedSharp";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import AllInboxSharpIcon from "@mui/icons-material/AllInboxSharp";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import HeadsetMicSharpIcon from "@mui/icons-material/HeadsetMicSharp";
import ImportContactsSharpIcon from "@mui/icons-material/ImportContactsSharp";
import { styled } from "styled-components";
import { StyledAlignFlex } from "@/style/common";
import Link from "next/link";
import { PATHS } from "@/constants/path";
import AccountImage from "@/components/atoms/AccountImage";

const StyledDrawer = styled.div`
  .css-1e6y48t-MuiButtonBase-root-MuiButton-root {
    padding: 5px;
    min-width: fit-content;
  }
`;

const StyledHeader = styled.div`
    background-color: var(--secondary-color);
    padding: 20px;

  .links {
    margin-top: 5px;
  }

  a {
    color: var(--dark-color);
    padding-top: 1px;
  }
  a:first-child {
    padding-right: 4px;
    border-right: 1px solid var(--dark-color);
  }
`;

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <StyledHeader>
        <AccountImage />
        <StyledAlignFlex gap="4px" className="links">
          <Link href={PATHS.LOGIN}>Sign in</Link>
          <Link href={PATHS.SIGNUP}>Register</Link>
        </StyledAlignFlex>
      </StyledHeader>
      <List>
        {["Home", "Categories", "Favorites", "My orders"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeSharpIcon />}
                {index === 1 && <FormatListBulletedSharpIcon />}
                {index === 2 && <FavoriteBorderSharpIcon />}
                {index === 3 && <AllInboxSharpIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["English | USD", "Contact us", "About"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <LanguageSharpIcon />}
                {index === 1 && <HeadsetMicSharpIcon />}
                {index === 2 && <ImportContactsSharpIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["User agreement", "Partnership", "Privacy policy"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <StyledDrawer>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <img src="/assets/menu.png" alt="Menu" loading="lazy" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </StyledDrawer>
  );
}
