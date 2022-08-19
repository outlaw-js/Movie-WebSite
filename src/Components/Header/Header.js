import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
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
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import SearchComponent from "../Search/SearchComponent";
import { styled, alpha, createTheme } from '@mui/material/styles';

const Header = (props) => {
 

  const drawerWidth = 240;
  const navItems = [{name:"HOME",route:"/"}, {name:"LOGIN",route:"/login"}, {name:"REGISTER",route:'/register'}];
  const  {window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
const navigate=useNavigate()
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
       Movies Website
      </Typography>
      <Divider />
      <List>
        {navItems.map((item,index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} onClick={()=>{navigate(item.route)}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  const container = window !== undefined ? () => window().document.body : undefined;

  return (<>
 <Box sx={{ display: 'flex' ,direction:"ltr",height:"70px"}}>
      <AppBar component="nav" >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { ccc: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', ccc: 'block' } }}
          >
          
          </Typography>
         
          <Box sx={{ display: { xs: 'none', ccc: 'block' } ,height:"100%",width:"100%"}}>
            {navItems.map((item,index) => (
              <Link to={item.route} key={index} sx={{ color: '#fff' }} style={{marginRight:"35px",fontSize:"30px"}}>
                {item.name}
              </Link>
            ))}
        
          </Box>         
           
          <SearchComponent/>
          <Cart/>
                  
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', ccc: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
    
      </Box>
    </Box>
  </>
  );
};
Header.propTypes = {

  window: PropTypes.func,

};
export default Header;
