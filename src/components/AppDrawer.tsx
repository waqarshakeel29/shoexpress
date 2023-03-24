import { styled } from "@mui/material/styles";
import MuiDrawer, { DrawerProps } from "@mui/material/Drawer";
import { Toolbar, IconButton, Divider, List } from "@mui/material";
import { DrawerNavigationList } from "./DrawerNavigationList";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

interface AppDrawerProps extends DrawerProps {
  open?: boolean;
  drawerWidth: number;
}

const AppDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppDrawerProps>(({ theme, open, drawerWidth }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(0),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(0),
      },
    }),
  },
}));

export const CAppDrawer = ({open, drawerWidth, toggleDrawer }: any) => {
  return (
    <AppDrawer variant="permanent" open={open} drawerWidth={drawerWidth}>
      <Toolbar>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <DrawerNavigationList />
        <Divider sx={{ my: 1 }} />
        {/* {secondaryListItems} */}
      </List>
    </AppDrawer>
  );
};
