import React, { Component } from 'react';
import logo from './logo.svg';
import {MyApp, Logo, Header, Intro} from './styles';

class App extends Component {
  render() {
    return (
      <MyApp>
        <Header>
          <Logo src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </MyApp>
    );
  }
}

export default App;
