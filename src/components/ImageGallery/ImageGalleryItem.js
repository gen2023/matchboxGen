import React from 'react';
import propTypes from 'prop-types';

const ImageGalleryItem = ({ face, back, onClick, id }) => {
  // console.log(this.props);
  // console.log(id);
  return (
    <li className="ImagesGalleryItem">
      <div className="card">
        <div className="faceImage">
          <img src={face} alt="" className="ImagesGalleryItem-image" />
        </div>
        <div className="backImage">
          <img src={back} alt="" className="ImagesGalleryItem-image" />
        </div>
      </div>
      <div className="clickImage" onClick={() => onClick(face, back, id)}>
        <span>Подробнее</span>
      </div>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: propTypes.string.isRequired,
  face: propTypes.string.isRequired,
  back: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

export default ImageGalleryItem;
