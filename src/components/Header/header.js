import './header.css';
import olx from '../../assets/olx.png';
import Profile from '../Admin/Profile'
import PrivateRoute from "./PrivateRouting";
// import PublicRoute from "./PublicRouting";
import Login from '../../modules/auth/login/Login'
import SellLogin from '../../modules/auth/login/SellLogin'
import LogOut from '../../modules/auth/logout/logout'
// import AddProduct from "../Admin/addProducts";
import Product from "../../modules/products/Product.js";
import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import homeolx from '../../assets/home.png'
import Products from "../Body/Products/Products";
import Electronics from "../Body/Products/Electronics";
import Jewelerys from "../Body/Products/Jewelery";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
const useStyles1 = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Header() {
  const authState = useSelector(state => state.AuthReducer.isUserLogin);
  const [doLogoutAction] = LogOut();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const classes1 = useStyles1();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return (
    <div style={{ marginTop: '85px' }} className={classes.grow}>
      <Router>
        {/* Fixed Header */}
        <AppBar position="fixed" style={{ backgroundColor: "whitesmoke", color: 'black' }}>
          <Toolbar>
            <div className={classes.search}>
              <Link to="/"><img className='olximage' src={olx} alt="OLX" /></Link>
            </div>
            <div className={classes.search} style={{ border: 'solid 1px' }}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search Location"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.search} style={{ border: 'solid 1px', width: '100%' }}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search Categories"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.grow} />
            {!authState ?
              <React.Fragment>
                {/* For Desktop */}
                <div className={classes.sectionDesktop}>
                  <span className='links'>
                    <Login />
                  </span>
                </div>
                <div className={classes.sectionDesktop}>
                  <span className='links'>
                    <SellLogin />
                  </span>
                </div>
                {/* For Mobile */}
                <div className={classes.sectionMobile}>
                  <span className='links'>
                    <Login />
                  </span>
                </div>
                <div className={classes.sectionMobile}>
                  <Link className='links' to="/addproducts">
                    <SellLogin />
                  </Link>
                </div>
              </React.Fragment>
              :
              <React.Fragment>
                {/* For Desktop */}
                <div className={classes.sectionDesktop}>
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <Avatar>
                      <AccountCircle />
                    </Avatar>
                  </IconButton>
                </div>
                <div className={classes.sectionDesktop}>
                  <Link className='links' to="/addproducts">
                    <Button style={{borderRadius: '50px', padding: '12px 25px', border: 'Solid 6px'}} variant="outlined" color="secondary">+Sell</Button>
                  </Link>
                </div>
                {/* For Mobile */}
                <div className={classes.sectionMobile}>
                  <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <Avatar>
                      <AccountCircle />
                    </Avatar>
                  </IconButton>
                </div>
                <div className={classes.sectionMobile}>
                  <Link className='links' to="/addproducts">
                    <Button style={{borderRadius: '50px', padding: '12px 25px', border: 'Solid 6px'}} variant="outlined" color="secondary">+Sell</Button>
                  </Link>
                </div>
              </React.Fragment>
            }
          </Toolbar>
        </AppBar>
        {/* 2nd NavBar For Body */}
        <AppBar position="static" style={{ backgroundColor: 'white' }}>
          <Toolbar variant="dense">
            <FormControl variant="outlined" className={classes1.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Categories</InputLabel>
              <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" value={age} onChange={handleChange} label="Age">
                <MenuItem value={0}>
                  <Link className='menulink' to="/">All Categories</Link>
                </MenuItem>
                <MenuItem value={1}>
                  <Link className='menulink' to="/electronics">Electronics</Link>
                </MenuItem>
                <MenuItem value={2}>
                  <Link className='menulink' to="/jewelery">Jewelery</Link>
                </MenuItem>
              </Select>
            </FormControl>
            <IconButton color="inherit">
              <Link className='links' to="/">All Categories</Link>
            </IconButton>
            <IconButton color="inherit">
              <Link className='links' to="/electronics">Electronics</Link>
            </IconButton>
            <IconButton color="inherit">
              <Link className='links' to="/jewelery">Jewelery</Link>
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* Profile for Mobile */}
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={handleProfileMenuOpen}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link className='menulink' to="/Profile">
              Profile
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link className='menulink' to="/AddProduct">
              Add Product
            </Link>
          </MenuItem>
          <hr />
          <MenuItem onClick={handleMenuClose}>
            <Link className='menulink' to="/Settings">
              Settings
            </Link>
          </MenuItem>
          <hr />
          <MenuItem className='menulink' onClick={handleMenuClose}>
            <a className='menulink' onClick={doLogoutAction}>
              Logout
            </a>
          </MenuItem>
        </Menu>
        {/* Profile for Desktop */}
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link className='menulink' to="/Profile">
              Profile
            </Link>
          </MenuItem >
          <MenuItem onClick={handleMenuClose}>
            <Link className='menulink' to="/Settings">
              Settings
            </Link>
          </MenuItem>
          <MenuItem className='menulink' onClick={handleMenuClose}>
            <a className='menulink' onClick={doLogoutAction}>
              Logout
            </a>
          </MenuItem>
        </Menu>
        {/* Routes */}
        <Switch>
          <Route path="/jewelery">
            <Jewelerys />
          </Route>
          <Route path="/electronics">
            <Electronics />
          </Route>
          <PrivateRoute path="/Profile" auth={authState}>
            <Profile />
          </PrivateRoute>
          <PrivateRoute path="/Settings" auth={authState}>
            <Settings />
          </PrivateRoute>
          <PrivateRoute path="/addproducts" auth={authState}>
            <Product />
          </PrivateRoute>
          <Route excat path="/">
            <img style={{ width: '100%' }} src={homeolx} />
            <Products />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


function Settings() {
  return <h2>Settings</h2>;
}

export default Header;
