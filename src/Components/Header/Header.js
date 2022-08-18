import React,{useState} from "react";
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

  const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight:"10px",
  width: '100%',
  [theme.breakpoints.down('md')]: {
    marginLeft: theme.spacing(1),
    width: '45%',
    marginRight:"20PX"
  },
  [theme.breakpoints.down('ccc')]: {
    marginLeft: theme.spacing(1),
    width: '70%',
    marginRight:"auto",
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

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
           <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
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
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
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
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default Header;
