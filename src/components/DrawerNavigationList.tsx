import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
// import AssignmentIcon from '@mui/icons-material/Assignment';

export const DrawerNavigationList = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <ListItemButton
        onClick={() => {
          navigate("/");
        }}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton
        // onClick={() => {
        //   navigate(RoutePaths.ORDER_LISTING);
        // }}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Shop" />
      </ListItemButton>
      <ListItemButton
        // onClick={() => {
        //   navigate(RoutePaths.SEARCH_CUSTOMER);
        // }}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Policy" />
      </ListItemButton>
    </React.Fragment>
  );
};
