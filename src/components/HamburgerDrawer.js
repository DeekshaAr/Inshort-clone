import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/system";
import categories from "../data/category";

const StyledBox = styled(Box)(({ theme, anchor }) => ({
  width: anchor === "top" || anchor === "bottom" ? "auto" : 200,
  paddingLeft: anchor === "left" ? 10 : "auto",
  paddingRight: anchor === "right" ? 5 : "auto",
}));

export default function SwipeableTemporaryDrawer({ setCategory }) {
  const [state, setState] = React.useState({
    left: false,
  });

  const preferDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: preferDarkMode ? "dark" : "light",
        },
      }),
    [preferDarkMode]
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <StyledBox
      anchor={anchor}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          Categories
          <ListItemText />
        </ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text) => (
          <ListItem
            style={{ height: 40, borderRadius: 3 }}
            button
            key={text}
            onClick={() => setCategory(text)}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </StyledBox>
  );

  return (
    <ThemeProvider theme={theme}>
      <div>
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}>
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </React.Fragment>
      </div>
    </ThemeProvider>
  );
}
