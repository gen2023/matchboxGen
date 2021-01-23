import React, { Component } from 'react';
import propTypes from 'prop-types';

// import list from '../../json/gallery.json';

import ImageGalleryItem from './ImageGalleryItem';

import './imageGallery.css';

class ImageGallery extends Component {
  render() {
    const { images, onClick } = this.props;
    // const list=this.funcLanguage();
    // console.log(images.length);
    return (
      <>
        {/* <h1>{list.category}</h1> */}
        <ul className="ImagesGallery">
          {images.map(({ face, back, id }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              face={face}
              back={back}
              onClick={onClick}
            />
          ))}
        </ul>
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: propTypes.array.isRequired,
  onClick: propTypes.func.isRequired,
};

export default ImageGallery;
