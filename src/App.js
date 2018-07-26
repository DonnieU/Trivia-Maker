import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonAppBar from './ButtonAppBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar />
      </div>
    );
  }
}

export default App;
