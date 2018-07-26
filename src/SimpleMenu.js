import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class SimpleMenu extends Component {
  state = {
    anchorEl: null,
  };

  handlclick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton 
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          aria-owns={anchorEl ? 'simple-menu' : null }
          aria-haspopup="true"
          onClick={this.handlclick}
        >
        <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Games</MenuItem>
        </Menu>
      </div>
    );
  }
}

SimpleMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMenu);
// export default SimpleMenu;