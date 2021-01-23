import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import Modal from '../components/Modal';
import ImageGallery from '../components/ImageGallery';

import list from '../json/gallery.json';

import routes from '../services/routes';

class CategoryItems extends Component {
  state = {
    id: null,
    face: null,
    back: null,
    isModal: false,
    currentImage: null,
    name: null,
  };

  toggleModal = (face, back, id) => {
    // console.log(face);
    // console.log(back);
    this.setState(prevState => ({
      isModal: !prevState.isModal,
      currentImage: prevState.isModal ? null : face,
      back: back,
      id: id,
    }));
  };

  handleImageClick = (face, back, id) => {
    // console.log(face);
    // console.log(back);
    this.toggleModal(face, back, id);
  };

  titleCategory() {
    const idCategory = this.props.match.params.galleryId;
    const name = list.find(name => name.id === idCategory);
    // console.log(name);
    return name.category;
  }

  render() {
    const { isModal, currentImage, back, id } = this.state;
    const images = list
      .filter(cat => cat.id === this.props.match.params.galleryId)
      .map(img => img.image);
    const kol_vo = images[0].length;
    // console.log(this.props.match.params.galleryId);
    return (
      <div className="contentGeneral">
        {isModal && (
          <Modal
            id={id}
            face={currentImage}
            back={back}
            onToggle={this.toggleModal}
            category={this.props.match.params.galleryId}
          />
        )}
        <Link to={routes.category}>
          <span>вернуться назад</span>
        </Link>
        <h1>
          {this.titleCategory()}({kol_vo} шт)
        </h1>
        <ImageGallery images={images[0]} onClick={this.handleImageClick} />
      </div>
    );
  }
}

CategoryItems.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      galleryId: propTypes.string,
    }),
  }),
};

export default CategoryItems;
