import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  footer: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#1d0073',
    color: theme.palette.common.white,
  },
  iconButton: {
    color: theme.palette.common.white,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.footer}>
      <Toolbar>
        <Typography variant="body1">
        Copyright &copy; 2024 chemAuction Systems, Inc. All rights reserved.
Designed and powered by ABC.
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <IconButton
          className={classes.iconButton}
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
