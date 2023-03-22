import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SearchIcon from "@mui/icons-material/Search";
// import { Outlet, useLocation } from "react-router-dom";
import { DrawerNavigationList } from "./components/DrawerNavigationList";
import { useState } from "react";
// import CustomLoader from "./components/CustomLoader";
// import { useSelector } from "react-redux";
// import { Copyright } from "./components/Copyright";
import { AppBar } from "./components/AppBar";
import { AppDrawer } from "./components/AppDrawer";
// import { Slices } from "./constants";
// import CToastInfoDialog from "./components/CToastInfoDialog";
// import usePageTitle from "./hooks/usePageTitle";
// import { RootState } from "./store";
// import { selectIsCustomerLoading } from "./slices/customers/selectors";
// import { selectIsComplaintLoading } from "./slices/complaints/selectors";
// import { selectIsOrderLoading } from "./slices/orders/selectors";
// import { selectIsConfigurationLoading } from "./slices/configuration/selectors";
// import { selectIsDashboardLoading } from "./slices/dashboard/selectors";
import { Button, Grid, styled, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { theme } from "./theme";

const drawerWidth: number = 240;

const AppBarButton = styled(Button)(() => ({
  color: "Black",
  fontFamily: "Yu Gothic",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "15px",
  "&:hover": {
    color: "white",
  },
}));

function DashboardContent() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        elevation={0}
        open={open}
        drawerWidth={drawerWidth}
        color="secondary"
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
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container
            maxWidth="xl"
            style={{ margin: 0, padding: 0, backgroundColor: "white" }}
          >
            <Outlet />
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DashboardContent />
      </ThemeProvider>
    </>
  );
}
