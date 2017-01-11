import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import HomeBar from './homepage/home-bar';
import '../css/main.scss';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HomeBar/>
      </div>
    );
  }
}

export default withRouter(App);
