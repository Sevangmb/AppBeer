import React, { Component } from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  card: {
    maxWidth: 600,
    background: 'rgba(245, 124, 0, 0.05)',
    border: '3px solid #f57c00',
  },
  media: {
    height: 250,
    backgroundSize: 'contain',
  },
  title: {
    color: '#f57c00',
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    color: '#6d4c41',
    marginBottom: theme.spacing(2),
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="https://img.icons8.com/plasticine/256/000000/beer-bottle.png"
            title="Beer Bottle"
          />
          <CardContent>
            <Typography variant="h3" className={classes.title}>
              BEER WORLD
            </Typography>
            <Typography variant="h6" className={classes.subtitle}>
              Bienvenue dans l'univers de la bière artisanale
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Découvrez nos sélections de bières du monde. Explorez, dégustez et appréciez les saveurs uniques.
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Home);