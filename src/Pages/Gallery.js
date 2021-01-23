import React, { Component } from 'react';

import Category from '../components/Category';
import list from '../json/gallery.json';
// import LeftColumn from '../components/LeftColumn';
// import RightColumn from '../components/RightColumn';

class Gallery extends Component {
  quantity() {
    return list
      .map(img => img.image.length)
      .reduce((acc, currentValue) => acc + currentValue);
  }
  render() {
    return (
      <>
        <h1 className="quantity">
          Общее колличество - {this.quantity()} изображений
        </h1>
        <div className="content">
          {/* <LeftColumn /> */}
          <Category />
          {/* <RightColumn /> */}
        </div>
      </>
    );
  }
}

export default Gallery;
