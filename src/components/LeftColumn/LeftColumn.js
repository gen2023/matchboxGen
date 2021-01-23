import React, { Component } from 'react';
// import no_image from '../../images/no_image.png';
import list from '../../json/gallery.json';
import './leftColumn.css';

class LeftColumn extends Component {
  popularImage() {
    //выбираем со всех категорий изображения
    const cat = list.map(list => list.image);

    //выбираем в каэждой категории наилучшее изображение
    let masPopularImg = [];
    for (let i = 0; i <= cat.length - 1; i++) {
      masPopularImg[i] = cat[i].reduce((acc, curr) =>
        acc.raiting > curr.raiting ? acc : curr,
      );
    }

    //выбираем с полученного массива наилучшее изображение
    const img = masPopularImg.reduce((acc, curr) =>
      acc.raiting > curr.raiting ? acc : curr,
    );

    return img.face;
  }
  render() {
    // console.log(this.popularImage());
    return (
      <>
        <div className="contentLeft">
          <div className="blockNews">
            <h1 className="HeadingTitle">Новости</h1>
          </div>
          <div className="blockPopular">
            <h1 className="HeadingTitle">Популярное фото</h1>
            <img
              src={this.popularImage()}
              alt="Популярное фото"
              width="150px"
            />
          </div>
        </div>
      </>
    );
  }
}

export default LeftColumn;
