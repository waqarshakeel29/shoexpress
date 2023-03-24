import { Toolbar, IconButton, Grid, Button } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerWidth: number;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const AppBarButton = styled(Button)(() => ({
  color: "Black",
  fontFamily: "Didact Gothic",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "15px",
  "&:hover": {
    color: "white",
  },
}));


export const CAppBar = ({open, drawerWidth, toggleDrawer }: any) => {
  return (
    <AppBar
      position="absolute"
      elevation={0}
      open={open}
      drawerWidth={drawerWidth}
      // color="secondary"
      sx={{ backgroundColor: "rgba(114,177,185,0.8)" }}
    >
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Grid container spacing={3} justifyContent="center">
          {["Home", "Shop", "Order", "Contact", "Log in"].map((page) => (
            <Grid item>
              <AppBarButton
                key={page}
                // onClick={handleCloseNavMenu}
              >
                {page}
              </AppBarButton>
            </Grid>
          ))}
        </Grid>
        <IconButton color="inherit" onClick={() => {}}>
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
