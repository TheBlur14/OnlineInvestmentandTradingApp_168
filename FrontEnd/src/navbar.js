import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Button} from '@mui/material';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useNavigate} from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()
       }
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const navigate=useNavigate();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEll, setAnchorEll] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePoint = (event) => {
    setAnchorEll(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCover = () => {
    setAnchorEll(null);
    navigate("/inv");
  };

  return (
    <ThemeProvider theme={defaultTheme} style={{position: "sticky"}}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar style={{backgroundColor: "grey",marginRight: 200}} position="sticky">
          <Toolbar
            sx={{
              pr: '24px', 
            }}
          >
            <IconButton
                color="inherit"
                aria-label='menu'
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handlePoint}
             >
            <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEll}
                anchorOrigin={{
                  vertical: 'top', 
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEll)}
                onClose={handleCover}
              >
                <MenuItem onClick={handleCover} >Stock Inventory</MenuItem>
                <MenuItem onClick={handleCover}>Deposit/WithDraw</MenuItem>
                <MenuItem onClick={handleCover}>Mutual Funds</MenuItem>
                <MenuItem onClick={handleCover}>LearnWithCryptic</MenuItem>
              </Menu>
           <Toolbar style={{marginRight: 500}}><img  src="/images/CRYPTIC.jpg" onClick={()=> navigate("/home")}/></Toolbar>
            <div style={{justifyContent: "space-evenly",display: "flex"}}>
             <Button sx={{margin:"20px",color: "white"}} onClick={()=> navigate("/si")}>Stocks</Button>
             <a href="#cards"><Button sx={{margin:"20px",color: "white"}}>How Do We Trade?</Button></a>
             <a href="#about"><Button sx={{margin:"20px",color: "white"}}>About Us</Button></a>
             <Button sx={{margin:"20px",color: "white"}} onClick={()=> navigate("/feed")}>FeedBack</Button>
             </div>
            <div style={{display: "flex",justifyContent: "space-evenly"}}>
            <IconButton
                color="inherit"
                aria-label='menu'
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}
             >
            <AccountCircleIcon/>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={()=> navigate("/pro")}>Profile</MenuItem>
                <MenuItem onClick={()=> navigate("/acc")}>My Account</MenuItem>
                <MenuItem onClick={()=> navigate("/ ")}>LogOut</MenuItem>
              </Menu>
              </div>
            </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}