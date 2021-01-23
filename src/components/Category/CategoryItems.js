import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function CategoryItem({ categoryName, pictureFace, link }) {
  // console.log(picture);
  return (
    // <Link to={link}>
    <li className="galleryCategoryItem">
      <Link to={link}>
        <span>{categoryName}</span>

        <div className="galleryFaceImage">
          <img
            src={pictureFace}
            alt=""
            className="galleryCategoryItem-image"
            // onClick={() => onClick(pictureFace)}
          />
        </div>
      </Link>
    </li>
  );
}

CategoryItem.propTypes = {
  categoryName: propTypes.string.isRequired,
  pictureFace: propTypes.string.isRequired,
  // pictureBack: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  // onClick: propTypes.func.isRequired,
};

export default CategoryItem;
