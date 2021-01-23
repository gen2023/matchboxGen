import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';
import list from '../../json/gallery.json';

// import { writeFileJson } from '../WriteRaiting/WriteRaiting';
// const fs = require('fs').promises;
//var fileName = '../../json/gallery.json';
// var file = require('../../json/gallery.json');

import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
    const closeModal = document.querySelector(
      'button[data-action="closeModal"]',
    );
    closeModal.addEventListener('click', this.handleBackdrop);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      // console.log('ok');
      this.props.onToggle();
    }
  };

  handleBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onToggle();
    }
  };

  raiting() {
    const { id } = this.props;
    const { category } = this.props;
    //console.log(category);
    //console.log(list);
    const findCategory = list.find(cat => cat.id === category);
    // console.log(findCategory);
    const lengthlist = list.length - 1;
    //текущая категория
    const findImageArray = findCategory.image;
    // console.log(lengthFindCategory);
    const lengthFindImageArray = findImageArray.length - 1;
    //массив image всей категории
    let findIdImage = findImageArray.find(img => img.id === id);
    //ищем ид иекущей картинки
    const UpdateRaiting = Number(findIdImage.raiting) + 1;
    // увеличиваем рейтинг на 1
    const updateImageId = {
      ...findIdImage,
      raiting: UpdateRaiting,
    };
    //обновляем текущий ид
    const deleteobjImage = findImageArray.filter(img => img.id != id);
    //удаляем старый обьект

    deleteobjImage[lengthFindImageArray] = updateImageId;
    const updateImageArray = deleteobjImage;
    //обновляем массив изображений

    const updateCategory = { ...findCategory, image: updateImageArray };

    const deleteobjCategory = list.filter(cat => cat.id != category);
    //сохраняем новый массив в категорию

    deleteobjCategory[lengthlist] = updateCategory;
    const updateList = deleteobjCategory;
    // console.log(updateList);
    //обновляем list

    //const updateFile=
    //обновляем list
    //сохраняем в файле

    const file = updateList;
    return file;
  }

  render() {
    const { face, back } = this.props;
    // const { face } = this.props;
    // console.log(this.raiting());
    // console.log(fs);
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdrop}>
        <div className="modalContent">
          <div className="Modal">
            <img className="ModalImgFace" src={face} alt="" />
            <img className="ModalImgBack" src={back} alt="" />
            <button
              type="button"
              className="closeButton"
              data-action="closeModal"
            ></button>
          </div>
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  id: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  face: propTypes.string.isRequired,
  back: propTypes.string.isRequired,
  onToggle: propTypes.func.isRequired,
};

export default Modal;
