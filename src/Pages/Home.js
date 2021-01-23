import React, { Component } from 'react';

import Common from '../components/Common';
import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';

class Home extends Component {
  render() {
    return (
      <>
        <div className="content">
          <LeftColumn />
          <Common />
          <RightColumn />
        </div>
      </>
    );
  }
}

export default Home;
