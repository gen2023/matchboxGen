import React, { Fragment, Component } from 'react';

import list from '../../json/gallery.json';
import './GalleryCategory.css';

import CategoryItems from './CategoryItems';

class Category extends Component {
  randomImage(arr) {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }

  // const reducer = (accumulator, currentValue) => accumulator + currentValue;
  // handleImageClick = image => {
  //   console.log(image);
  // };
  language() {}
  render() {
    return (
      <Fragment>
        <nav className="listCategoryGallery">
          <ul className="galleryCategory">
            {list.map(({ id, category, image }) => (
              <CategoryItems
                key={id}
                categoryName={category}
                pictureFace={this.randomImage(image.map(img => img.face))}
                // pictureBack={this.randomImage(image.map(img => img.back))}
                link={`gallery/${id}`}
                // onClick={this.handleImageClick}
              />
            ))}
          </ul>
        </nav>
      </Fragment>
    );
  }
}

export default Category;
