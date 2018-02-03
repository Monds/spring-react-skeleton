import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';
import TaxonomyContainer from './components/TaxonomyContainer';

class App extends Component {
  render() {

    const menuStyle = {
      position: 'fixed',
      top: '0px',
      left: '0px',
      height: '100%',
      width: '50px',
      background: '#282c34',
      color: 'white',
      'z-index': '1'
    };

    const mainStyle = {
      'padding-left': '50px'
    };

    return (
      <div className="App">
        <div style={menuStyle}>
          {/* <Menu.Item name="Grid Template">Grid</Menu.Item> */}
        </div>
        <div style={mainStyle}>
          <TaxonomyContainer />
        </div>
      </div>
    );
  }
}

export default App;
