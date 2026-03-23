import React, { Component } from 'react';
import { Card, CardContent, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import LocalBarIcon from '@material-ui/icons/LocalBar';

const styles = (theme) => ({
  container: {
    maxWidth: 800,
    margin: '0 auto',
  },
  card: {
    background: 'rgba(245, 124, 0, 0.05)',
    border: '3px solid #f57c00',
  },
  title: {
    color: '#f57c00',
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  listItem: {
    marginBottom: theme.spacing(1),
  },
  icon: {
    color: '#f57c00',
  },
});

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4" className={classes.title}>
              À propos de Beer World
            </Typography>
            <Typography variant="body1" paragraph>
              Bienvenue sur Beer World, votre destination ultime pour découvrir et explorer le monde fascinant de la bière artisanale.
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Notre Mission
            </Typography>
            <Typography variant="body1" paragraph>
              Nous sommes passionnés par la promotion de la bière artisanale de qualité. Notre plateforme vous permet de découvrir des bières du monde entier, d'en apprendre plus sur les différents styles et de profiter des conseils de dégustateurs expérimentés.
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Ce que nous proposons
            </Typography>
            <List>
              <ListItem className={classes.listItem}>
                <ListItemIcon>
                  <LocalBarIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="Catalogue complet" secondary="Explorez notre sélection de bières artisanales" />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon>
                  <LocalBarIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="Conseils d'experts" secondary="Apprenez à déguster la bière comme un connaisseur" />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon>
                  <LocalBarIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="Communauté" secondary="Rejoignez d'autres passionnés de bière" />
              </ListItem>
            </List>
            <Box marginTop={3}>
              <Typography variant="body2" color="textSecondary">
                © 2024 Beer World. À déguster avec modération 🍺
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(About);