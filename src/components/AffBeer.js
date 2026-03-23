import React, { Component } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Chip,
  Box,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  container: {
    marginBottom: theme.spacing(4),
  },
  title: {
    color: '#f57c00',
    fontWeight: 700,
    marginBottom: theme.spacing(3),
    textAlign: 'center',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 24px rgba(245, 124, 0, 0.3)',
    },
  },
  media: {
    height: 200,
    backgroundSize: 'contain',
    backgroundColor: '#f5f5f5',
  },
  content: {
    flexGrow: 1,
  },
  beerName: {
    fontWeight: 700,
    color: '#f57c00',
    marginBottom: theme.spacing(1),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
});

const beerData = [
  {
    id: 1,
    name: 'Golden Hops',
    type: 'IPA',
    degree: '6.5%',
    image: 'https://img.icons8.com/plasticine/256/000000/beer-bottle.png',
  },
  {
    id: 2,
    name: 'Dark Knight',
    type: 'Stout',
    degree: '7.2%',
    image: 'https://img.icons8.com/plasticine/256/000000/beer-bottle.png',
  },
  {
    id: 3,
    name: 'Wheat Dream',
    type: 'Weizen',
    degree: '5.8%',
    image: 'https://img.icons8.com/plasticine/256/000000/beer-bottle.png',
  },
  {
    id: 4,
    name: 'Amber Sunset',
    type: 'Amber Lager',
    degree: '5.5%',
    image: 'https://img.icons8.com/plasticine/256/000000/beer-bottle.png',
  },
  {
    id: 5,
    name: 'Citrus Blast',
    type: 'Pale Ale',
    degree: '6.0%',
    image: 'https://img.icons8.com/plasticine/256/000000/beer-bottle.png',
  },
  {
    id: 6,
    name: 'Smooth Porter',
    type: 'Porter',
    degree: '6.8%',
    image: 'https://img.icons8.com/plasticine/256/000000/beer-bottle.png',
  },
];

class AffBeer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          🍻 Notre sélection de bières
        </Typography>
        <Grid container spacing={3}>
          {beerData.map((beer) => (
            <Grid item xs={12} sm={6} md={4} key={beer.id}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={beer.image}
                  title={beer.name}
                />
                <CardContent className={classes.content}>
                  <Typography variant="h6" className={classes.beerName}>
                    {beer.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {beer.type}
                  </Typography>
                  <Box marginTop={2}>
                    <Chip
                      label={`${beer.degree} Vol.`}
                      color="primary"
                      size="small"
                      className={classes.chip}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}

export default withStyles(styles)(AffBeer);