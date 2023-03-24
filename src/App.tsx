import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { theme } from "./theme";
import { CAppBar } from "./components/AppBar";
import { CAppDrawer } from "./components/AppDrawer";

const drawerWidth: number = 240;

function DashboardContent() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CAppBar open={open} drawerWidth={drawerWidth} toggleDrawer={toggleDrawer}  />
      <CAppDrawer open={open} drawerWidth={drawerWidth} toggleDrawer={toggleDrawer} />
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
        {/* <Toolbar /> */}
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
