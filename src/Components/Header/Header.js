import React from "react";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import SearchComponent from "../Search/SearchComponent";
const Header = (props) => {
  const styleMenu = {
    color: "black ",
    fontSize: "27px",
    fontFamily: "Poppins",
    marginRight: "40px"
  };
  const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <div
      style={{position:"relative",
        width: "100%",
        background: "dodgerblue",
        height:"100px",
        display:"flex",
      alignItems:"center",
      }}
    >
      <Link to={`/`} style={styleMenu}>
        Home
      </Link>
      <Link to={`/login`} style={styleMenu}>
        login
      </Link>
      <Link to={`/register`} style={styleMenu}>
        register
      </Link>
      <Cart />
      <SearchComponent />
    </div>
  );
};

export default Header;
