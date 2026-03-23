import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route, Link as RouterLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import AffBeer from './AffBeer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
    fontSize: '1.8rem',
    letterSpacing: 2,
  },
  navbar: {
    marginBottom: theme.spacing(3),
  },
  navButton: {
    marginLeft: theme.spacing(2),
    color: '#fff',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <Typography variant="h5" className={classes.title} component={RouterLink} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              🍺 BEER WORLD
            </Typography>
            <Button color="inherit" component={RouterLink} to="/" className={classes.navButton}>
              Accueil
            </Button>
            <Button color="inherit" component={RouterLink} to="/AffBeer" className={classes.navButton}>
              Bières
            </Button>
            <Button color="inherit" component={RouterLink} to="/about" className={classes.navButton}>
              À propos
            </Button>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" className={classes.content}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/AffBeer' component={AffBeer} />
            <Route path='/about' component={About} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}
