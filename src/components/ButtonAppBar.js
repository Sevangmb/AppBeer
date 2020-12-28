import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import AffBeer from './AffBeer';
import { loadCSS } from 'fg-loadcss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
        <Router>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <IconButton edge="start" className={classes.menuButton }>
            <Link to={'/'} className="nav-link">
              <MenuIcon />
            </Link>
          </IconButton>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <Link to={'/AffBeer'} className="nav-link">
              <Icon className="fas fa-beer" />
            </Link>
            <Link to={'/about'} className="nav-link">
              <Icon className="fas fa-info-circle" />
            </Link>
          </ul>
        </nav>

        </Toolbar>
      </AppBar>

          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/AffBeer' component={AffBeer} />
              <Route path='/about' component={About} />
          </Switch>
    </div>
          </Router>
  );
}
