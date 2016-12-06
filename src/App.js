import React from 'react';
import {Link, IndexLink} from 'react-router';

require('./App.css');

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><IndexLink to="/">Home</IndexLink></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default App;
