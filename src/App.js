import './App.css';
import React,{useContext} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DarkModeToggle from "react-dark-mode-toggle";
import {createMuiTheme} from "@material-ui/core";
import {
  ThemeProvider,
} from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import {BrowserRouter,Route,Switch,Link} from "react-router-dom";
import Main from "./main";
import About from "./About";
import HeroCard from "./card";
import InfoIcon from '@material-ui/icons/Info';
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';

  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
    link: {
      color: 'inherit',
      textDecoration: 'none',
    }
  }));



function App(){

  const [darkMode, setDarkMode] = React.useState(false);

  const theme = createMuiTheme({
      palette: {
        type: darkMode ? 'dark' : 'light',
        primary: {
          main: darkMode ? "#000000" : "#808080"
      },
      }
  });

    const classes = useStyles();
    const Theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    function Nav() {

      return (
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })}
            >
              <Toolbar>
                <AccountBoxSharpIcon/>  
                <Typography style={{paddingLeft:"5px",paddingTop: "2px"}} variant="h6" noWrap className={classes.title}>
                    Hero Base
                </Typography>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  className={clsx(open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="right"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                  {Theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </div>
              <Divider />
              <Link to='/' className={classes.link} >
                <List>
                    <ListItem button >
                      <ListItemIcon><HomeIcon/></ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItem>
                </List>
              </Link>
              <Link to='/about' className={classes.link} >
                <List>
                    <ListItem button >
                      <ListItemIcon><InfoIcon/></ListItemIcon>
                      <ListItemText primary="About" />
                    </ListItem>
                </List>
              </Link>
              <List>
                  <ListItem button >
                    <ListItemIcon>
                      <DarkModeToggle
                          onChange={() => setDarkMode(!darkMode)}
                          checked={darkMode}
                          size={80}
                      />
                    </ListItemIcon>
                  </ListItem>
              </List>
            </Drawer>
          </div>
      );
  }

  return(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route component={Main} path="/" exact/>
          <Route component={HeroCard} path="/hero" exact/>
          <Route component={About} path="/about" exact/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
